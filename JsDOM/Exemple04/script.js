"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // como nós não criamos nenhuma pagina que o botão ira acessa, então estamos travando esse comando do 'action' no html
    const name = form.name.value;
    const password = form.password.value;

    const formData = new FormData(form);
    if (formData.has("name") && formData.has("password")) {
        console.log(formData.get("name"));
        console.log(formData.get("password"));
    };

    // Podemos também setar os dados
    formData.set("name", name);
    formData.set("password", password);

    // Podemos remover os dados também
    formData.delete("name");
    formData.delete("password");

    // ********** Código comentado
    /*
    // ao inves do submit podemos usar o formData (geralmente utilizado em aplicações REST, mas não é exclusivo)
    const formData = new FormData(form);
    //console.log(formData); // aparece os métodos disponíveis no console do navegador
    
    formData.forEach(res => {
        console.log(res); // agora aparece o username e a senha no console
    }); 

    // é possível também pegar apenas 1 valor --> console.log(formData.get("name"));

    /*     if (name && password) { // existe valor no coampo "name" e campo "password"? se sim, então segue adiante.
            console.log(name, password);
            form.submit(); // submeter ao action descrito no html
        }; */
}); 