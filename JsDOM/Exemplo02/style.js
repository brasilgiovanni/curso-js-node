"use strict";

const input = document.querySelector("#name");

console.log(input.value);

setTimeout(() => {
    input.value = "Abacate";
    console.log(input.value);
}, 1000)

const div = document.querySelector("div");
div.setAttribute("id", "div_id"); // criamos um Id para a div
div.setAttribute("class", "div_class") // criamos uma classe para a div
div.setAttribute("class", `${div.getAttribute("class")} alterada`); // alteramos o nome da classe da div
// Nese caso aqui, o nome fica = "div_class alterada"
div.setAttribute("class", "nova_class"); // agora aqui, o nome fica "nova_id", o que tinha anteriormente é apagado.

//div.removeAttribute("class"); // removemos a classe da div
console.log(div);


// buscando nossa ul
const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();
// criando um array de items
const lanches = ["Lanche1", "Lanche2", "Lanche3", "Lanche4"];
// fazendo um foreach para cada lanche ir para um "li" e cada "li" ser adicionado na tag "ul"
// O problema é que estamos criando no DOM, dessa forma, nossa página ficará se atualizando a cada iteração
// O melhor é criar no fragmentDOM, que depois de acabar todas as iterações, ele atualiza a página 1 única vez com todo conteúdo.

/* lanches.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.append(li);
}) */
// Código correto para adicionar no FragmentDOM
lanches.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    fragment.append(li);
})
ul.append(fragment); // agora sim, é adicionado tudo junto de uma vez só, e antes disso fica apenas na memória cache


// Removendo um dos "li"
const li = document.querySelectorAll("li"); // vamos selecionar todas "li" já criadas
console.log(li); // vamos ver no console da web essas li e seus index
// quero deletar o li de index = 2
li[2].remove();
console.log(li); // agora só tem lanche 1, lanche 2 e lanche 4 (pois o index=2 era o lanche 3)

// como remover algo que não é um nodeList?
const h1 = document.querySelector("h1");
h1.remove(); // não indica index pois não tem, basta apenas remover o elemento.
// agora se olhar a tela, não tem mais título a página.

// Recriando um h1
// Criar um novo elemento <h1>
const novoTitulo = document.createElement('h1');

// Definir o texto dentro do <h1>
novoTitulo.textContent = 'Novo Título';

// Selecionar o elemento <body>
const body = document.body;

// Adicionar o <h1> ao início do corpo
body.insertBefore(novoTitulo, body.firstChild);

// Modificando esse NovoTitulo
novoTitulo.style.fontFamily = "Arial";
novoTitulo.style.color = "blue";

// agora vamos selecionar todos os parágrafos da página
const p = document.querySelectorAll("p");
p.forEach((element) => {
    element.style.fontFamily = "Arial";
    element.style.fontSize = "12px";
    element.style.color = "rgb(0, 100, 200)";
});

// Adicionar background-color in body
body.style.backgroundColor = "rgba(50, 255, 200, 0.1)";

// adicionando a classe 'style' do .html

const label01 = document.querySelector("label");
label01.classList.add("active");

// contais e alert
if (label01.classList.contains("active")) {
    //alert("Existe a classe active aqui"); cria uma caixinha de aviso na pagina
};

// comando toggle => se existir ele remove, se não existir ele adiciona

label01.classList.toggle("toggle"); // como ainda não existe, ele cria
label01.classList.toggle("toggle"); // agora que ja existe, ele remove