"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value;

    const newDivElement = document.createElement("div"); // criei uma div
    newDivElement.innerText = "Username: " + name.toUpperCase(); // a div vai receber o "name" que o usuário digitar e vai converter para letra maiuscula

    form.nextElementSibling.remove(); // remove o elemento irmao já criado
    form.after(newDivElement); // adiciona a div depois do formulario

    // para visualizar o resultado, clique no botão "registration" da página, digitando um nome em "name"
});