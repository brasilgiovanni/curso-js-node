"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // como nós não criamos nenhuma pagina que o botão ira acessa, então estamos travando esse comando do 'action' no html
    const name = form.name.value;
    const password = form.password.value;

    console.log(name, password);
})