"use strict";
// Selecionando elementos
const titulo = document.getElementById('titulo');
const minhaLista = document.getElementsByClassName('lista')[0]; // Acessando o primeiro elemento da coleção
const botaoAdicionar = document.getElementById('botaoAdicionar');
const botaoRemover = document.getElementById('botaoRemover');

// Função para adicionar um novo item à lista
function adicionarItem() {
    // Criando um novo elemento li
    const novoItem = document.createElement('li');
    const tamanhoLista = minhaLista.children.length + 1; // Obtendo o número de elementos filhos e incrementando
    novoItem.textContent = "Item " + tamanhoLista;

    // Adicionando o novo item à lista
    minhaLista.appendChild(novoItem);
}

// Função para remover o último item da lista
function removerItem() {
    const ultimoItem = minhaLista.lastElementChild;
    if (ultimoItem) {
        minhaLista.removeChild(ultimoItem);
    }
}

// Adicionando eventos aos botões
botaoAdicionar.addEventListener('click', adicionarItem);
botaoRemover.addEventListener('click', removerItem);

// Alterando o texto do título
titulo.textContent = 'Página Dinâmica';
