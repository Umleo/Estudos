interface IPerson {
    id: number;
    //age: number;
    //name: string;
    SayMyName(): string;
}

class Person implements IPerson{
//readonly: Pode apenas ser iniciado uma unica vez, geralmente em seu construtor, inalteravel.
    readonly id: number;
//protected: A variavel pode ser acessada apenas dentro da classe ou subclasse - deve ser criada na própria classe.
    protected name: string;
//private: Só pode ser acessada dentro da classe - deve ser criada na própria classe.
    private age: number; 

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    SayMyName(): string {
        return this.name
    }
}

//////////////////////
//maneira simples de trabalhar com classes:
class PersonRefact {
    constructor(
        id: number, 
        name: string, 
        ge: number
    ) {}
}
///////////////////////
const newPerson = new PersonRefact(1, "Leo", 20);
const person = new Person(1, "Leo", 20);

/////////////////////////////////////////////Subclasses
class Employee extends Person{
        constructor(id: number, name: string, age: number){
            super(id, name, age);
    }

    whoAmi(){
        return this.name
    }
}