// Elaborar um código que conte a quantidade de cada letra numa palavra

const palavra = "Analoga".toLowerCase(); // passando todas as letras para minusculo // declarando a palavra a ser analisada

let letras = {}; // criando um array para guardar o resultado da contagem de letras

// O array em JS funciona similar ao Dicionario do Python, ele tem uma chave e um valor
// a iteração for procura verificar se existe letras[palavra[0]] = letras[a], e o JS interpreta que tu esta buscando a chave "a" no array letras
// Como incialmente não existe, a gnt cria essa chave na condição ELSE dizendo que letras[a] = 1, assim a chave é "a" e o valor é 1
// Na proxima vez que encontrar a letra "a" na palavra, ele vai verificar que já existe a chave "a" no array 'letras' e vai fazer letras[a] = +1;
for (let i=0; i< palavra.length; i++) {
    if (letras[palavra[i]]) {
        letras[palavra[i]]++;
    } else {
        letras[palavra[i]] = 1;
    }
}console.log(`A palavra ${palavra} tem ${palavra.length} letras. E a quantidade de cada uma é apresentada abaixo:`)
console.log(letras);


// Vamos retirar os espaços de uma frase?
const frase = "Ola Mundo!".replaceAll(" ", "");
console.log("Minha frase sem espaços: " + frase);

// Podemos fazer o replace para retirar as virgulas também
console.log("///////////////////////////////////////////////")
let fraseOriginal = "Ola, eu sou o Giovanni!"
let fraseConcatenada = fraseOriginal.replaceAll(" ", "");
let fraseSemVirgula = fraseConcatenada.replaceAll(",", "");
let fraseSemExclamacao = fraseSemVirgula.replaceAll("!", "");
let fraseLower = fraseSemExclamacao.toLowerCase();

console.log("fraseOriginal: " + fraseOriginal)
console.log("fraseConcatenada: " + fraseConcatenada)
console.log("fraseSemVirgula: " + fraseSemVirgula)
console.log("fraseSemExclamacao: " + fraseSemExclamacao)
console.log("fraseLower: " + fraseLower)