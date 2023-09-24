let objectArray = [{ nome: "Maria da silva", tel: "(51) 99999-9999", idade: 62 },
{ nome: "João Henrique", tel: "(51) 99999-9999", idade: 36 },
{ nome: "Ana Braga", tel: "(51) 99999-9999", idade: 74 },
{ nome: "Luan da Silveira", tel: "(51) 99999-9999", idade: 23 },
{ nome: "Ricardo Tableu", tel: "(51) 99999-9999", idade: 28 },
{ nome: "Carla Schmit", tel: "(51) 99999-9999", idade: 45 },]
console.table(objectArray);
console.log("");

// for
for (k = 0; k < objectArray.length; k++) {
    console.log(objectArray[k].nome);
};

console.log("");
// for of
for (let item of objectArray) {
    console.log(item.nome);
};
console.log("");
// E como eu poderia acessar somente as chaves dos valores dos Objetos?
// Utilizando o for in
for (let item in objectArray) {
    console.log(item);
}; // aqui nesse caso ele esta pegando o indice do Array
console.log("");
for (let item in objectArray) {
    console.log(objectArray[item]); // aqui ele vai puxar cada objeto dentro do Array
};

// Para puxar as chaves dos valores dos Objetos, precisamos isolar um objeto
console.log("");
let newObject = objectArray[0];
console.log(newObject);
console.log("");
for (let item in newObject) {
    console.log(item); // retorna o "nome" + "tel" + "idade"
};
console.log("");
// continue & break
console.log("| CONTINUE & BREAK |");
for (let item of objectArray) {
    if (item.nome === "Ana Braga") {
        console.log("O josé Louro está te esperando...");
        continue; // ou seja, pula para o próximo
    }
    if (item.nome === "Luan da Silveira") {
        console.log("| Fim da iteração |");
        break; // para a iteração
    }

    console.log(item); // printa o 'item'
};
console.log("")
// for each (não aceita break nem continue, mas aceita return)
console.log("-------------FOR EACH -------------------")
objectArray.forEach((item, index) => {
    if (item.nome === "Ana Braga") {
        return console.log("O josé Louro está te esperando...");
    }
    console.log(item); // printa o 'item'
});
console.log("");
// MAP
console.log("-------- MAP ---------")
const pedidos = [
    {
        nome: "Maria",
        alimento: "Sandubao de bacon",
        bebida: "Suco de Limao",
    },
    {
        nome: "Ana",
        alimento: "Sandubao Vegano",
        bebida: "Chá gelado",
    }
];

pedidos.map((element, index) => {
    if (element.nome === "Maria") {
        return (element.alimento = "Mix folhas verdes");
    };
});
console.table(pedidos); // Observe na tabela que o alimento da Maria agora é Mix folhas verdes.
console.log("");

// comando FILTER -- cria um novo array com apenas aqueles elementos que atendem o critério do FILTER
console.log("---------- FILTER ----------");
pedidos.push({
    nome: "João",
    alimento: "Sandubao Vegano",
    bebida: "Coca-cola",
});
pedidos.push({
    nome: "Diego",
    alimento: "Sandubao de frango",
    bebida: "Suco de laranja",
});

const pedidosVeganos = pedidos.filter((element, index) => {
    return element.alimento === "Sandubao Vegano";
});

console.table(pedidosVeganos);

// método 'find' quando utilizar? Quando soubermos que só precisamos de 1 elemento daquele tipo, pois ele para a iteração assim que acha
// Dessa forma, se estamos buscando um id único, usamos o find, pois é muito mais otimizado que o 'filter' que varre todo o array.

console.log("------ FIND -------");
let findName = pedidos.find((element, index) => {
    return element.nome === "Diego";
});
console.table(findName);
console.log("");
// método EVERY --> verifica uma condição para todo o array, retornando True or False

// vamos testar da seguinte forma: Será que no Array 'pedidos' todo mundo pediu lanche vegano?
console.log("-------- EVERY ---------");
let veganoEvery = pedidos.every((element) => {
    return element.alimento === "Sandubao Vegano";
});

console.log('veganoEvery = ', veganoEvery); // FALSE

// vamos testar da seguinte forma: Será que no Array 'pedidosVeganos' todo mundo pediu lanche vegano?
veganoEvery = pedidosVeganos.every((element) => {
    return element.alimento === "Sandubao Vegano";
});
console.log('veganoEvery =', veganoEvery); // TRUE
console.log("");
// método SOME - é similar ao Every, porém ao inves de verificar se todo mundo atende aquela condição, verifica se ao menos 1 atende.
console.log("-------- SOME --------");
let veganoSome = pedidos.some((element) => {
    return element.alimento === "Sandubao Vegano";
});
console.log('veganoSome = ', veganoSome); // TRUE (existe ao menos uma pessoa que pediu o 'Sandubao Vegano')

console.log("");
// Método REDUCE
console.log("-------- REDUCE --------");
// A ideia é pegar todos os valores de um Array e reduzir a 1 valor. Por exemplo, podemos somar todos 'preços' de cada pedido

// Ele permite iniciar com um valor default, no nosso caso, esse valor será zero (0)

pedidos[0]['preco'] = 20;
pedidos[1]['preco'] = 24;
pedidos[2]['preco'] = 18;
pedidos[3]['preco'] = 30;
console.table(pedidos); // como ficou a tabela adicionando a coluna 'preco'
// Agora vamos calcular o total da conta:
const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0); // esse zero é o valor default
console.log("A conta total dessa turma é: R$", balancete);
