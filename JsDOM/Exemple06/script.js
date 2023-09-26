"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const radio = form.radio; // utiliza o form.radio, pois é o radio que está dentro do nosso form
    submit.innerHTML = radio.value; // estamos passando para o submit o valor do nosso form.radio (o valor que o usuário selecionar)

});

// como o 'change' é justamente a ação de clicar um uma das opções do Radio (e existe mais de uma)
// Então podemos fazer um for each, para que toda vez que o usuário selecionar uma opção algo seja feito
// neste caso, estão mandando verificar se de fato foi selecionado (event.target.checked)
// e se sim, mandamos imprimir no console quem foi clicado (event.target.value)
// ao inves de ficar chamando event.target, podemos declarar uma constante {target} = event; troca event.target por apenas target

form.radio.forEach((res) => {
    res.addEventListener("change", (event) => {
        const { target } = event;
        if (target.checked) {
            console.log(target.value);
            change.innerHTML = target.value; 
            // agora aqui além de aparecer no console, aparece na página, pois foi atribuido o valor a nossa div id="change"></div>
        };
    });
});