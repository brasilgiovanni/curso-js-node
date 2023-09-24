// Similar ao Python e diferente do Java, o JS permite adicionar diferentes tipos de dados em um mesmo Array
// Por exemplo, aqui vamos declarar um Array que possui dados do tipo Number, String, Boolean e Object;
let Array1 = [1, 2, 3, 4, "5", "Ola Mundo", true, {nome: "Giovanni Brasil"}];
console.log(Array1);

// Podemos acessar um Array em forma de tabela no JS
console.table(Array1); // Observe a tabela formada, tem uma coluna para o tipo "nome" e o resto para os valores.

// Por exemplo, bora criar um Array com dois objetos Pessoa, tendo cada pessoa, um nome  e cpf
console.log("");
const Pessoa1 = {
    nome: "Maria Brasilia",
    cpf: "636.434.838-62",
};

const Pessoa2 = {
    nome: "João da Silva",
    cpf: "474.202.909-76"
}
let Array2 = [Pessoa1, Pessoa2]; // Observe que foi criada uma tabela com as colunas (index gerado automaticamente) e as colunas (Nome e cpf)
console.table(Array2);

// Agora vamos criar uma matriz de valores
let Array3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("");
console.table(Array3); // Observe que a tabela se forma de modo similar ao Array com objetos; onde as colunas recebem valores de indices...

// Como podemos acessar os valores desses Arrays?
console.log("---------------- Acessando dados dos Arrays ------------------------");
console.log(Array1[5]); // acessando o SEXTO elemento do Array1
console.log(Array2[0]); // acessando o PRIMEIRO elemento do Array2 (que é a Maria)
console.log(Array2[0]['cpf']); // acessando o CPF do PRIMEIRO elemento do Array2 (que é a Maria)
console.log(Array3[2][1]); // acessando o valor da TERCEIRA linha com a SEGUNDA coluna da Matriz de valores

// Podemos dar valores aos nossos indices de chamada
let [a, b, c] = ["Arroz", "Feijao", "Batata"];
console.log(a, b, c);

// Spread Operator
// E se quisermos aplicar uma função nos valores do Array?
const Array4 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// Quero saber qual é o maior valor do array
console.log(Math.max(Array4)); // da erro, a função matematica da biblioteca Math, não consegue ler. (NaN)
console.log(Math.max(...Array4)); //Agora sim, os 3 ponto retiram os valores de dentro do Array (valor máximo = 5)

// Como adicionar elementos:
// Se voce quer adiciona um elemento a um Array em uma determinada posição voce faz: Array[posicao] = novo_valor;
// Se você quer adicionar no inicio do Array um elemento: Array.unshift(novo_valor);
// Se você quer adicionar no final do Array um elemento: Array.push(novo_valor);

Array4.unshift(20);
Array4.push(-10);
console.table(Array4);

console.log("");

// Removendo elementos: Array.shift(); --> Remove o primeiro elemento; 
// se fizer console.log(Array.shift()); ele remove e mostra na tela qual elemento foi removido.

// Removendo elementos: Array.pop(); --> Remove o último elemento;
// se fizer console.log(Array.pop()); ele remove e mostra na tela qual elemento foi removido.

console.log("shift => ", Array4.shift());
console.log("pop => ", Array4.pop());
console.table(Array4);

// slice = pega os dados dentro de um range sem quebrar o Array
// splice = remove os dados do Array dentro de um range
console.log("");
const Array5 = Array4.slice(4, 8); // pega os valores do indice 4 até o indice 7 (Sempre um a menos), Não modifica o Array4 (original)
console.table(Array5);

Array4.splice(0, 5); // agora aqui estamos removendo os valores do indice 0 ao 4 (sempre um a menos)
console.table(Array4);

// E se quisermos remover um item apenas
Array4.splice(2, 3); // removendo apena o indice 2
console.table(Array4);  // Observe que ele removeu o indice 2 e o indice 3
// Então devemos fazer da seguinte forma:
Array5.splice(2, 1); // agora vamos remover só o elemento do indice 2 do Array5 que eh o valor (3).
console.log(" / /  / / ARRAY 5 / / / / ")
console.table(Array5);