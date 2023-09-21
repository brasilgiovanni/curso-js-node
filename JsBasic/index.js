console.log("Ola mundo!");
/*
console.log('Aqui vai uma String em aspas SIMPLES');
console.log(`Aqui temos
uma string quebrada em CRASES`);

// Podemos fazer um cast para tipo String()
//console.log(String(CPF:858.313.010-87)); // erro, não é permitido pontos, virgulas ou espaços...
console.log(String(85831301087));

// Soma ou concatenação?
console.log("-----Soma ou Concatenação? Amarelo=Numero // Branco=Texto-----")
console.log("Eu sou um texto: " + "123"); // concatenação
console.log("Esse aqui é um número: " + 123); // concatenação
console.log("100" + 1); //concatenação
console.log(1 + "001"); //concatenação
console.log(1001); //numero puro
console.log("123" - 1); //ele converte a String para número
console.log(Number("1001") - 2); //jeito correto, convertendo a String para Number
console.log("100" / 2); //transforma para número
console.log("100" * 2); // transforma para número
console.log("100abc" -50); // NaN (not a number) erro do tipo de variável, porém nao da erro de compilador.

//Como saber qual é o tipo da variável?
console.log("*******************************")
console.log("typeof para identificar os tipos")
console.log(typeof 500); //Number
console.log(typeof Number("500"));
console.log(typeof "500");

// Boolean
console.log(">>>>Analise de tipo Boolean<<<<");
console.log(2 === 2); //true
console.log(1 === 2); // false
*/

/* Undefined x Null --> Undefined significa que uma variável não foi tipada, 
enquanto se resultar em Null, significa que veio vazio tipo erro nullpointer.
*/

// Array
/*
console.log("Analisando arrays");
console.log([1, 2, 3, 4, 555, 200]);
console.log(["Giovanni", "Vitor", "Alex"]);
console.log(["Giovanni", "Vitor", "Alex"].length);
x = [1, 2, 3, 4]; // declarando uma variável
console.log(x); // imprimindo a variável
console.log(x.length); // sabendo o tamanho da variável
console.log(x[1]); // sabendo o valor da SEGUNDA POSIÇÃO da variável (INICIO EM ZERO IGUAL JAVA E PYTHON)
*/

// FOR EACH - 
/*Cuidado a IDE não aponta muitos dos erros de Sintaxe, por exemplo se escrever 'foreach' (tudo minusculo)
ela não identifica como erro de sintaxe */

list_name = ["Giovanni", "Vitor", "Alex", "Maria", "João"];
list_name.forEach((valor, index) => {
    console.log("O indice: " + index + ". O valor: " + valor);
});
