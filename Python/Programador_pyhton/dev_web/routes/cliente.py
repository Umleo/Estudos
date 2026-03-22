from flask import Blueprint, render_template, request
from database.models.cliente import Cliente


cliente_route = Blueprint('cliente', __name__)

"""
#Criar uma rota dinâmica com <tipo:[]>
Rota de Clientes

    - /clientes/ (GET) - Listar os clientes
    - /clientes/ (PUT) - inserir cliente no servidor
    - /clientes/new (GET) - renderizar formulário para criar um cliente
    - /clientes/<id> (GET) - obter os dados de um cliente
    - /clientes/<id>/edit (GET) - renderizar um formulário para editar um cliente
    - /clientes/<id>/update (PUT) - atualizar os dados do cliente
    - /clientes/<id>/delete (DELETE) - deletar o registro do usuário
"""

@cliente_route.route('/')
def lista_clientes():
    """Lista os clientes"""
    clientes = Cliente.select()
    return render_template('lista_clientes.html', clientes=clientes)



@cliente_route.route('/', methods=['POST'] )
def inserir_cliente():
    """inserir dados do cliente"""

    data = request.json

    novo_usuario = Cliente.create(
        email = data['email'],
        name = data['nome'],
    ) 
    print(novo_usuario)

    return render_template('item_cliente.html', cliente=novo_usuario) 



@cliente_route.route('/new')
def form_cliente():
    """Formulario para criar cliente"""
    return render_template('form_cliente.html')


@cliente_route.route('/<int:cliente_id>')
def detalhe_cliente(cliente_id):
    """Dados do cliente"""
    cliente = Cliente.get_by_id(cliente_id)
    return render_template('detalhe_cliente.html', cliente=cliente)
    


@cliente_route.route('/<int:cliente_id>/edit')
def form_edit_cliente(cliente_id):
    """Formulario para editar cliente"""
    cliente = Cliente.get_by_id(cliente_id)
    return render_template('form_cliente.html', cliente=cliente)


@cliente_route.route('/<int:cliente_id>/update', methods=['PUT'])
def atualizar_cliente(cliente_id):
    """Atualizar os dados do cliente"""
 # obeter os dados do formulario para edição
    data = request.json   
    
    cliente_editado = Cliente.get_by_id(cliente_id)

# atualizando dados dos clientes
    cliente_editado.name = data['nome']
    cliente_editado.email = data['email']
    cliente_editado.save()
    print(cliente_editado)


#editar usuario
    return render_template('item_cliente.html', cliente=cliente_editado)


@cliente_route.route('/<int:cliente_id>/delete', methods=['DELETE'])
def deletar_cliente(cliente_id):
    """Deletar os dados do cliente"""
    cliente = Cliente.get_by_id(cliente_id)
    cliente.delete_instance()
    cliente.save()
    return {'deleted':'ok'}