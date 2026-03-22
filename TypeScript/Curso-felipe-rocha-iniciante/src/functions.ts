interface  MathFunc  {
    (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number =>{
    return x + y;
};

const valor = sum(2, 4);
////

//void - Uma função que não retorna nada.
const log = (message: string) : void =>{
    console.log(message)
}
