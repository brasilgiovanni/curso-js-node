// criando a classe Pessoa
export class Pessoa {
    private name: string;
    private idade: number;

    constructor(nome:string, idade:number) {
        this.name = nome;
        this.idade = idade;
    }

    get getName() {
        return this.name;
    }

    get getIdade() {
        return this.idade;
    }
}

// NAMESPACE (Variaveis locais e não globais)

export namespace calculadora {
    export let soma = (num1:number , num2:number) => {
        return num1 + num2;
    }
}