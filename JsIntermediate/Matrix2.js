// ORDENAMENTO DE ARRAYS
console.log("-------------- ORDENAMENTO DE ARRAYS DE STRING ------------");
const stringArray = ["A", "c", "D", "W", "L", "B"];

console.log(stringArray.sort()); // coloca em ordem crescente
console.log(stringArray.reverse()); // coloca em ordem descrescente
console.log("");

// Porém, não funciona para números.
// Para trabalhar com números ou outros tipos de dados devemos chamar uma função callback do tipo ArrowFunction
console.log("-------------- ORDENAMENTO DE ARRAYS DE NÚMEROS ------------");
const numberArray = [10, 5, 3, 20, 30, -100, 0];

console.log(numberArray.sort((a, b) => a - b)); // coloca em ordem crescente
console.log(numberArray.sort((a, b) => b - a)); // coloca em ordem descrescente;
console.log("");

// TRABALHANDO COM OBJETOS
console.log("-------------- ORDENAMENTO DE ARRAYS COM OBJETOS ------------");
let objectArray = [{ nome: "Maria da silva", tel: "(51) 99999-9999", idade: 62},
{ nome: "João Henrique", tel: "(51) 99999-9999", idade: 36 },
{ nome: "Ana Braga", tel: "(51) 99999-9999", idade: 74 },
{ nome: "Luan da Silveira", tel: "(51) 99999-9999", idade: 23 },
{ nome: "Ricardo Tableu", tel: "(51) 99999-9999", idade: 28 },
{ nome: "Carla Schmit", tel: "(51) 99999-9999", idade: 45 },]
console.table(objectArray);
// Queremos ordernar por nome e por idade essa tabela:
console.log("");
console.table(objectArray.sort((a, b) => a.nome.localeCompare(b.nome))); // Ordenando por nome
console.log("");
console.table(objectArray.sort((a, b) => a.idade - b.idade)); // Ordenando por idade
