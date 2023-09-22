/* 
    == , ===, !=, !==, >, <, >=, <=
*/

// Diferença entre == & ===
/*
console.log(1 == 1); // true
console.log(1 === 1); // true
console.log(1 == "1"); // true
console.log(1 === "1"); // false
*/

let a = 1.0;
let b = 2;
let c = "1.0";
let d = "2";

console.log(a == 1.0); // true
console.log(a === 1.0); // true
console.log(a == b); // false
console.log(a === b); // false
console.log(a == c); // true
console.log(a === c); // false

// Ou seja, além de verificar o conteúdo verifica também o TIPO (====)

// Operadores Lógicos --> && (E), || (OU), ! (Negação)
