'use strict';
// Criando um objeto Tenis

const Tenis = {
    tamanho: 45,
    estoque: true,
    marca: [{ nome: "Nike" }, { nome: "Adidas" }, { nome: "Olympikus" }],
    cor: ["preto", "branco", "azul", "cinza", "vermelho"],
};

// Usando a função map para obter os nomes das marcas
const nomesMarcas = Tenis.marca.map(item => item.nome);

// Imprimindo os nomes das marcas
console.log("Marcas do tênis:", nomesMarcas);


// Acessando os dados da propriedade 'marca'

console.log("Marcas do tênis:");
for (let i = 0; i < Tenis.marca.length; i++) {
    console.log(Tenis.marca[i].nome);
}
console.log("---------------------------------------------------")

// hasOwnProperty | porpertyName is Tenis

if (Tenis.hasOwnProperty("tamanho")) {
    console.log("Existe a propriedade 'tamanho' no objeto Tenis");
} else {
    console.log("Não existe a propriedade 'tamanho' no objeto Tenis");
}

if ('marca' in Tenis) {
    console.log("Existe a propriedade 'marca' no objeto Tenis");
} else {
    console.log("Não existe a propriedade 'marca' no objeto Tenis");
}

// Acessando dados do objeto
console.log(`O tamanho disponível de tenis é: ${Tenis.tamanho}`); // aparece o tamanho do tenis
console.log(typeof Tenis.tamanho); // Diz o tipo de objeto da propriedade tamanho; (neste caso, Number)
console.log(`As marcas disponíveis de Tenis são: ${Tenis.marca}`); // Como é um array, não aparece dessa forma
console.log(`As cores existentes são: ${Tenis.cor}`); // Observe que as cores vem tudo juntas...

// Destructuring

const { tamanho, estoque, marca, cor } = Tenis;
console.log(tamanho, estoque, marca, cor);

// E se caso não existir o dado que você busca? Você pode deixar configurado um valor default
const { modelo = "Não existem modelos" } = Tenis; // Repare que não é preciso chamar novamente a propriedade 'tamanho', uma vez que ja foi declarada.
console.log(tamanho, modelo);


// Adicionar e Atualizar dados (devemos usar o prefixo 'let' e não 'const' para isso)
console.log("")
console.log("Adicionando propriedades a um objeto")
let Produto = {
};

Produto.tipo = "Livro";
Produto.preco = 80.00;
console.log(Produto);
// Podemos também acessar os dados como se fosse dicionarios no Python
console.log(Produto["tipo"]);
// E adicionar dados:
Produto["Categoria"] = "A";
console.log("Aqui acrescentamos a propriedade Categoria: A --> " + Produto); // converte para string e não objeto
console.log(`Aqui acrescentamos a propriedade Categoria: A -->  ${Produto}`); // converte para string e não objeto
// Deletando propriedades do objeto
delete Produto.Categoria;
console.log("Aqui deletamos a propriedade Categoria: A --> " + Produto)

// Para criar uma frase e imprimir na tela todas as propriedades de um objeto, podemos fazer:
console.log(" ----------------------------------------------------------------------------")
let ProdutoA = {
    Categoria: "A",
    Nome: "Produto 1",
    Preco: 50.00,
};

let frase = "Todas as propriedades do Objeto Produto são: ";

for (let prop in ProdutoA) {
    frase += prop + ": " + ProdutoA[prop] + ", ";
}

console.log(frase); // aqui será impresso a frase completa com todas as propriedades

