// Podemos declarar o 'use strict' para o compilador apontar mais erros
'use strict'; // link: https://www.geeksforgeeks.org/strict-mode-javascript/
// Podemos criar construtores a partir de funcoes no Js

function Pessoa(name, email, idade) {
    if (typeof (name) === "string" && typeof (email) === "string" && typeof (idade) === "number") {
        this.name = name;
        this.email = email;
        this.idade = idade;
    } else {
        console.log("Verifique se você inseriu corretamente os tipos de dados");
    }
}

const Pessoa01 = new Pessoa("Giovanni", "giovannisbrasil@gmail.com", 29);
console.log(Pessoa01);

// A funcao construtora pode ter métodos dentro dela, dessa forma podemos montar uma calculador, veja a seguir:

function Calculadora(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        this.soma = () => {
            return `${num1 + num2}`;
        };

        this.subtracao = () => {
            return `${num1 - num2}`;
        };

        this.multiplicacao = () => {
            return `${num1 * num2}`;
        };

        this.divisao = () => {
            return `${(num1 / num2).toFixed(2)}`;
        }

        this.divisor = () => {
            let resultado = num1 % num2;
            let divisivel = " é divisivel";
            if (resultado != 0) {
                divisivel = " não é divisivel";
            }
            return `O valor ${num1 + divisivel} pelo valor ${num2}, com resto igual a ${resultado}. `
        }
    } else {
        console.log("Verifique se você inseriu corretamente os tipos de dados");
    }
}

console.log("// / / / / / / / / / / / / / / / ///");

const calcularValores = new Calculadora(6, 2.0);
console.log(calcularValores.soma());
console.log(calcularValores.subtracao());
console.log(calcularValores.multiplicacao());
console.log(calcularValores.divisao());
console.log(calcularValores.divisor());

// Podemos tambem retirar os argumentas da funcao principal e colocar eles nos métodos

function Calculadora2(num1=0, num2=0) { // igualando a zero, definimos que os argumentos são opcionais
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        this.soma = (num1, num2) => {
            return `${num1 + num2}`;
        };

        this.subtracao = (num1, num2) => {
            return `${num1 - num2}`;
        };

        this.multiplicacao = (num1, num2) => {
            return `${num1 * num2}`;
        };

        this.divisao = (num1, num2) => {
            return `${(num1 / num2).toFixed(2)}`;
        }

    } else {
        console.log("Verifique se você inseriu corretamente os tipos de dados");
    }
}
console.log(" / / / / / // / / / / / / // /  / /")
const calculadora2 = new Calculadora2();
console.log("A soma dos dois valores é: " + calculadora2.soma(5, 10));
console.log("A subtracao dos dois valores é: " + calculadora2.subtracao(21, 7));

console.log(calculadora2.multiplicacao("2", "Giovanni")); // Resultado NaN, observe que agora a clausula do if() não consegue detectar o erro.