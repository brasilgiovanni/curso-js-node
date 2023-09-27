/**
 * Não esquecer: para ver o output da aplicação - atalho teclado: ctrl + alt + n
 * Para converter em arquivo .JS - npm i -g ts-node no console
 */

// como criar uma arrowFunction

const funcao = (entrada: string): number => {
    // aqui o usuário vai entrar com uma string
    // e a funcao vai retornar um number
    return entrada.length; // retorna o tamanho da palavra (que é um tipo number)
}

// ARRAYS
let array1: [string, string] = ["Ola", "Mundo!"]; // digo que são apenas 2 dados e ambos são string
// aqui eu digo que todo array é string e posso ter 1 ou milhares de dados
let array2: Array<string> = ["Ola", "Mundo", "!", "Eu", "sou", "o", "Giovanni", "!"];

// Posso ter um array de diversos valores? Sim (TIPO TUPLA)
let array3: [number, boolean, string, number] = [123, true, "testando", 321]; // multiplas informações

// e tem uma forma de multiplos dados com multiplos tipos? Sim (TIPO DIAMANTE)
let array4: Array<string | number | boolean> = [1000.00, false, "Giovanni aqui", true, 8000.00];

// OBJETOS

// Objeto de qualquer tipo
let obj1: {} = { nome: "Giovanni" };
// Objeto de um tipo?
// let obj2: {string} = { nome: "Matheus"}; // Não funciona*
// Como funciona?
let obj3: { nome: string } = { nome: "Matheus" }; // agora sim, informa a propriedade e o tipo dela

// multiplas propriedades
let obj4: { nome: string; idade: number; disponivel: boolean } = {
    nome: "Fulano",
    idade: 25,
    disponivel: true,
};

// Array de objetos
let obj5: Array<{ nome: string; idade: number; disponivel: boolean }> = [
    {
        nome: "Fulano",
        idade: 25,
        disponivel: true,
    },

    {
        nome: "Fulano1",
        idade: 30,
        disponivel: true,
    },

    {
        nome: "Fulano2",
        idade: 20,
        disponivel: false,
    },

];

console.table(obj5);
// Não esquecer, para rodar aqui é ctrl + alt + n, e certifique-se no console que esta na pasta do arquivo

// E se a pessoa quiser que aceite qualquer valor?
let valor: any = "aqui pode ir qualquer tipo de valor";

// Podemos aplicar UNIO TYPE (Aceita alguns tipos de valores)
let valorUnion: number | boolean = true; // pode receber um numero ou boleano

// função que não retorna nada: VOID (igual java)
let pedido = (msg: string): void => {
    console.log(msg);
    // não tem return;
}

// NEVER (pode ser usado para ficar rodando infinitamente ou para aplicar um error)
const error = (): never => {
    throw new Error("Algo deu errado")
};

const validate = (value: string | number) => {
    if (typeof value === "string") {
        return console.log("É um string");
    } else {
        return console.log(error());
    };
};

// validate(1234); // AQUI DA A EXCEPTION ERROR COM A MENSAGEM "ALGO DEU ERRADO"

//ALIASES
type tiposQueEuQuero = string | number;

let dados: tiposQueEuQuero;
let dados2: tiposQueEuQuero; // ou seja, mais facil de fazer manutenção do código, basta alterar em 1 local

// STRING LITERAL TYPES
let mouseEvent: 'click' | 'dbclick' | 'mouseup';
// let mouseEvent = 'meuNome'; Não funciona, pois ele só aceita os valores passados.

mouseEvent = 'click'; // agora funciona, escolhemos o literal type 'click'

// OPTIONAL
// podemos ter uma entrada opcional (sem ser de preenchimento obrigatorio)
const formulario = (nome: string, idade?: number) => {
    if (!idade) {
        return `nome: ${nome}, idade: não definida`;
    }
    return `nome: ${nome}, idade: ${idade}`;
};

console.log(formulario("Dener", 31));
console.log(formulario("Dener"));

// ENUM (ENUMERADOS)

enum Mes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
};
console.log(Mes);
console.log(Mes.JAN);
