// INTERFACES

/**
 * Definem o contrato a ser seguido pela classe
 * Também fornecem nomes explicitos para verificação de tipo
 */

interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
}

let p1: IPessoa = { nome: "Dener", idade: 31, cpf: 10010010001 }; // A interface esta agindo como se fosse um tipo (string + number)

p1.nome = "Giovanni"; // aceita a modificação
// p1.cpf = 1928392833; // não aceita, apenas LEITURA

class Giovanni implements IPessoa {
    nome: string = "Giovanni";
    idade: number = 29;
    cpf:  number = 78010212585;
    
    constructor() {
    }
}

let p2 = new Giovanni();
console.log(p2);