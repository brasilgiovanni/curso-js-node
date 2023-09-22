// if & else

let a = 10;

if (a === '10') {
    console.log("Eu sou uma String de valor '10'"); // false
} else if (a == 10) {
    console.log("Eu sou um Número de valor 10"); // true
} else {
    console.log("Meu valor não é 10"); // false
}

// Falsy = false, 0, "", NaN, Undefined e null
// Truthy = Todos os outros diferentes de Falsy

// Operador Ternario
console.log("--------------TERNARIO--------------------")
const velocidade = 75;
const warn = 85;

const condicao = velocidade >= warn ? console.log("Recebeu uma multa- valor ultrapasasdo") : console.log("Sem multa - valor não ultrapassado");

console.log("_--------------------------------")
let name = "Giovanni";
let nameUser = "Vitor";

let verifyName = name === nameUser ? "Verdade - Giovanni é o usuário." : "Falso - Giovanni não é o usuário";
console.log(verifyName);

// SWITCH CASE

const mes = 5;

switch (mes){
    case 1: 
        console.log("Janerio"); // False
        break;
    case 2:
        console.log("Fevereiro"); // False
        break;
    case 3:
        console.log("Março"); // False
        break;
    case 4:
        console.log("Abril"); // False
        break;
    default:
        console.log("Fora do Escopo"); // True
}
