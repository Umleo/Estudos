import { useState } from "react";
import { useRef } from "react";
import ItemLista from "./ItemLista";

function App() {
  //hook
  //useState - Cria uma variavel de estado
  //Não retorna informação
  //Retornar uma array: A variavel que retorna o valor, e uma função para alterar essa variavel
  const [listaMercado, setListaMercado] = useState([]);

  //useRef()
  const inputRef = useRef();

  const AdicionarElemento = () => {
    //spread no array listaMercado para cloná-lo
    const novaLista = [...listaMercado];
    //puxamos o valor do input
    const valorInput = inputRef.current.value;

    if (valorInput) {
      //inserimos o valor do input no novo array (novaLista)
      novaLista.push(valorInput);

      //definimos que nossa váriavel de estado recebera um novo valor através da função de mudança
      setListaMercado(novaLista);

      //zeramos o valor do input
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="w-full max-w-96 flex flex-col items-center gap-4">
      
        <h1 className="text-3xl font-bold"> Lista de Mercado </h1>

        <div className="w-full flex gap-2">
          <input className="w-full border-2 border-gray-600 rounded-md px-2" ref={inputRef} type="text" placeholder="Digite um item" />
          
          <button className="rounded-md bg-gray-800 text-white px-2 cursor-pointer hover:bg-gray-600 transition" onClick={() => AdicionarElemento()}>Adicionar</button>
        </div>

        {listaMercado.length > 0 ? (
          <ul className="flex w-full flex-col gap-2">
            {listaMercado.map((ItemMercado, index) => {
              //passamos tres variaveis de ambiente dentro da variavel ItemLista
              return (
                <ItemLista
                key={index}
                ItemMercado={ItemMercado}
                listaMercado={listaMercado}
                setListaMercado={setListaMercado}
                indice={index}
                />
              );
            })}
          </ul>
        ) : (
          <p>Nenhum produto na lista.</p>
        )}

      </div>

    </> //Tag vazia = "Fragment"
  );
}

export default App;
