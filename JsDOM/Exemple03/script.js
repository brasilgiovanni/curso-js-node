"use strict";

const menu = document.querySelector('#menu');

menu?.addEventListener("click", (event) => { // o Ponto de interrogação (?) faz uma conferência se de fato ele achou a tag "menu"
    const { target } = event;
    const body = document.querySelector("body");

    switch (target.getAttribute("class")) {
        case "home":
            body.style.background = "blue";
            break;
        case "sobre":
            body.style.background = "yellow";
            break;
        case "contato":
            body.style.background = "#F9F9F9";
            break;
    };
});