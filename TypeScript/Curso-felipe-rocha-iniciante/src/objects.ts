//Type
type Order = {
    productId: number
    price: number
}

type User = {
    name: string 
    age: number
    email: string
    //o "?"" torna a variavel do objeto opcional.
    //o tipo dela não é o de uma string comum, o tipo dela é "string OU undefined" e deve ser compatível com o mesmo quando for solicitada.
    //siga o exemplo 1:
    password?: string
    orders: Order[]
    register?(x: number, y: number): number
};

const user: User = {
    name: "leo",
    age: 20,
    email: "teste@teste",
    orders: [{productId: 1, price: 200}],
    register(x:number, y:number){
        return x+y
    }
}

//exemplo 1 (duas maneiras [ ? ou ! ]):
const print = (message: string)=>{}
console.log(print(user.password!))

//const print = (message?: string)=>{}
//console.log(print(user.password))
//////////////////////////////////////


//Unions
type Author = {
    books: string[]
}

const author: User & Author = {
    books: ["Exemplo Muito foda", "Exemplo Foda"],
    age: 26,
    email: "teste@tese",
    name: "Leo",
    orders: [{productId: 2, price:150}, {productId: 3, price: 500}],
    register(x:number, y:number){
        return x-y
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////interfaces

//Interfaces são semelhates a os types.

//readOnly - é uma variavel que ao ser declarada, não pode mais ser alterada.
interface Usuario {
    email: string
    readonly name: string
}

const usuario: Usuario = {
    email:"teste@teste",
    name:"Leo"
}

//usuario.name = "teste"

