// Mesclando e clonando Objetos

let Tenis = {
    preco: 399.99,
    cardaco: {
        cor: "rosa",
        tamanho: "G"
    },
    palmilha: {
        tipo: "conforto",
        tamanho: 42,
    },
}
console.log(Tenis);

let link = { link: { a: "a", b: { c: "c" } } };
console.log(link);

// Clonando Objeto Tenis de forma rasa
console.log(">>>> CLONANDO OBJETO RASO <<<<");
let clone1 = Tenis;
console.log(clone1);
// Alterando valor do clone1
console.log(">>>> ALTERANDO VALOR DO PREÇO DO CLONE1 <<<<");
clone1["preco"] = 100.00;
console.log(clone1["preco"]);
console.log(Tenis["preco"]); // Observe que a alterar o valor do preço do clone1, também foi alterado o valor do preço de Tenis.

// MESCLANDO OBJETOS DE FORMA RASA
console.log(">>>> MESCLANDO TENIS E LINK <<<<");
let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1);

// ALTERANDO VALOR DE "a" do Link de Mesclar1
console.log(">>>> ALTERANDO VALOR DE LINK DO MESCLAR1 <<<<");
mesclar1.link.a = "ABC";
console.log(mesclar1);
console.log(link); // Observa que o valor de "a" do Link de Link também foi alterado, mesmo sendo pedido apenas para MESCLAR1.

// QUANDO FAZEMOS CLONES OU MESCLAS DE NÍVEL RASO, CRIAMOS UMA REFERÊNCIA ENTRE OBJETOS E ISSO PODE CAUSAR CONFUSÃO.
// PARA RESOLVER O PROBLEMA, DEVEMOS FAZER UMA CLONAGEM PROFUNDA DA SEGUINTE MANEIRA:

// CRIAÇÃO DE UMA FUNÇÃO DE CLONAGEM, QUE CRIA UMA STRING A PARTIR DO OBJETO E DEPOIS CONVERTE DE VOLTA A OBJETO
console.log("")
console.log("CLONAGE PROFUNDA")
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
Tenis = {
    preco: 399.99,
    cardaco: {
        cor: "rosa",
        tamanho: "G"
    },
    palmilha: {
        tipo: "conforto",
        tamanho: 42,
    },
}

let clone2 = cloneObject(Tenis);
clone2["preco"] = 100;
console.log(clone2["preco"]); // aqui o valor foi alterado para 100
console.log(Tenis["preco"]); // Observe no console que agora continua o valor de 399.99

link = { link: { a: "a", b: { c: "c" } } };

// MESCLAGEM PROFUNDA
console.log("MESCLAGEM PROFUNDA")
let mesclar2 = {...cloneObject(Tenis), ...cloneObject(link)};
mesclar2.link.a = "ABC";
console.log(link); // valor se mantem sem alteração
console.log(mesclar2); // valor alterado para "ABC"