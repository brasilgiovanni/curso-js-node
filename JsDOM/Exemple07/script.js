"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

// Como checkbox você pode selecionar mais de uma opção, nós não enviaremos para o backend apenas 1 valor, mas sim um array de 1 ou mais valores
let checkedboxValues = [];

// Vamos escrever um código que atenda o submit e o change

const hasChecked = (event, element) => {
    const { target } = event;

    if (target.checked) {
        return checkedboxValues.push(element.value); // adicona o elemento marcado
    };

    if (!target.checked) {
        return checkedboxValues.map((checkedValue, index) => {
            if (element.value === checkedValue) {
                return checkedboxValues.splice(index, 1); // remove o elemento unchecked (não marcado)
            };
        });
    };
};

// Criando código para o submit
form.addEventListener("submit", (event) => {
    event.preventDefault(); // tira a ação do action (que não colocamos nada válido no html)
    submit.innerHTML = checkedboxValues;
});

// Criando código para o change
form.checkbox.forEach((element) => {
    element.addEventListener("change", (event) => {
        hasChecked(event, element);
        change.innerHTML = checkedboxValues;
    });
});


// Código para trabalhar com o submit apenas
/* form.addEventListener("submit", (event) => {
    event.preventDefault();
    const checkbox = form.checkbox;
    checkedboxValues = []; // antes de adicionar os itens, é ideal iniciar o array de valores vazios
    checkbox.forEach((element) => {
        if (element.checked) {
            checkedboxValues.push(element.value);
        };
    });

    submit.innerHTML = checkedboxValues; // adiciona os valores da <div id="submit" já delcarada lah em cima do código
}); */
