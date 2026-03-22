//generics: É o conceito ded tornar o tipo do parametro de uma função dinâmico, podendo ser decidido ao chama-la. 
const returnValue = <T, X>(value: T, valor: X) => value

const message = returnValue<string, boolean>("message", true);
const count = returnValue<number, number[]>(5, [1,2]);

function getFirstValueFromArray<Type>(array: Type[]){
    return array[0];
}

const primeiroArrayString = getFirstValueFromArray(["1","2"]);
const primeiroArrayNumber = getFirstValueFromArray([1, 2]);


// Promises
const returnPromise = async (): Promise<number> =>{
    return 5;
}

// classes
class GenericeNumber<T>{
    zeroValue: T;
    sum:(x: T, y: T) => T;

    constructor(zeroValue: T, sum:(x: T, y: T) => T){
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const numero = new GenericeNumber<number>(0, (x: number, y: number) => {
    return x + y;
});