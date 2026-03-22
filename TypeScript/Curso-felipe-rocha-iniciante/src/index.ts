//tipos basicos
let age: number = 5;
const name: string = "Leo";
const isValid: boolean = true;
let idk: any = 3;
let iDk: any = "teste";

//listas
const ids: number[] = [1,2,3,4,5];
const names: string[] = ["teste","teste"];
const some: any[] = [1,"teste"];

//tupla
const person: [number, string] = [1, "Joao"];

//lista de tuplas: 
const listTuple: [number, string][] = [
    [25, "leo"],
    [14, "Pedro"]
] 

//intersections - assume qualquer um dos três tipos
const productId: number | string | boolean = "leo";

//Enum
enum Direction {
    up = 1,
    down = 2,
    left = "esquerda",
}
const direction = Direction.up; //assume o valor de "up"

//type assertions
const produto: any = "boné"

//let idProduto = produto as string
let idProduto = <string>produto

