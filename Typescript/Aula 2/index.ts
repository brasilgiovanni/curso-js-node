// CLASSES

/**
 *   Modificadores de acesso no TS 
 * PUBLIC -     Pode ser acessado por todos (DEFAULT)
 * ****************************************
 * PROTECTED -  Pode ser acessado pelas subclasse
 * ****************************************
 * PRIVATE -    Pode ser acessado apenas pela própria classe ( _propriedade --> privada )
 * */
class Pessoa {
    private nome: string = ""; // serve de valor padrão caso o usuario nao preencha
    private idade: number = 0; // serve de valor padrão caso o usuario nao preencha

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // getters and setters

    get getNome() {
        return this.nome;
    }

    set setNome(nome:string) {
    }

    get getIdade() {
        return this.idade;
    }

    set setIdade(idade:string) {
    }

    // colocando methodos dentro da classe

    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`
    }

}

const p1 = new Pessoa("Giovanni", 29);
console.log(p1)
console.log(p1.comer("arroz com feijao"));

// subclasses

class PessoaFisica extends Pessoa {
    private cpf: string = "000.000.000-00";

    constructor(nome: string, idade:number, cpf: string) {
        super(nome, idade);
        this.cpf = cpf;
    }

    get getCPF() {
        return this.cpf;
    }

    // não vamos colocar um set no cpf para não ser possível sua modificação
}

const pf1 = new PessoaFisica("Dener", 31, "101.494.373-55");
console.log(pf1);

// Classes abstratas (não tem no JS, mas tem aqui no TS)
// Classes abstratas não podem ter modificador de acesso 'private'

/**
 * A palavra 'static' define um método estático para a classe.
 * Métodos estáticos não são chamados  na instância da classe.
 * E sim, chamados na própria classe.
 * Geralmente, são funções utilitarias da classe (como clonar ou criar objetos)
 */

class Utilitaria {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

// criando objetos
const tenis1: { tamanho: number; estoque: boolean} = {
    tamanho: 41,
    estoque: true,
};

const tenis2: { tamanho: number; estoque: boolean} = {
    tamanho: 42,
    estoque: false,
};

// como chamamos a classe Utilitaria?
console.log(Utilitaria.cloneObject([tenis1, tenis2])); // recebe um array de objetos


// prefixo 'readonly' você especifica que aquele atribute é apenas para leitura, não pode ser modificado.

class Animal {
    public readonly name: string;
    public readonly grupo: string;

    constructor(name: string, grupo: string) {
        this.name = name;
        this.grupo = grupo;
    }
}

const animal1 = new Animal("Leao", "Mamifero");
console.log(animal1);
// animal1.name = "Boi"; // Observar que da erro, não é aceito modificar o nome, uma vez que para apenas LEITURA (readonly)