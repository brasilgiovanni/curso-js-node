// Buscando elementos na página .HTML
/*
* Para acessarmos uma página .html, precisamos importar nosso arquivo .JS na página .html, similar ao que fazemos para importar o arquivo .CSS
* importação: 
* Acessando dados da página .html
* É uma boa prática iniciar o acesso pelas superclasses e depois ir especificando para as subclasses do arquivo .html
* Podemos fazer:
* const title = document.querySelector("title"); / irá buscar o titulo da nossa página .html
* const h1 = document.querySelector("h1"); / irá buscar nossa header 01 (apenas 1 por página) do .html
* Vamos supor que queremos importar um ID da nossa página .html: const meu_ID = document.querySelector(#meu_ID);
* Agora, queremos importar uma classe da nossa página .html: const minha_classe = document.querySelector(.minha_classe);
* Nessas formas apresentadas, podemos utilizar o for each para iterações dentro de cada elemento do ID ou CLasse;
* Podemos, também, importar de outra forma:
*               const meu_ID = document.getElementById("meu_ID");
*               const minha_classe = document.getElementByClassName("minha_classe");
*        Dessas formas, não podemos utilizar o "for each" para iterações. Precisamos utilizar: for (let elementof meu_ID) {};

* TAG NAME = pegar tudo dentro da TAG ( const p = document.getElementByTagName("p")); Trazendo todos os parágrafos

* + INFORMAÇÕES VIA CHATGPT
Comandos Básicos de JavaScript:

Selecionar elementos da página:

Por ID: document.getElementById('id-do-elemento')
Por Classe: document.getElementsByClassName('nome-da-classe')
Por Nome (raramente usado): document.getElementsByName('nome-do-elemento')
Por Tag: document.getElementsByTagName('nome-da-tag')
Seletor de CSS: document.querySelector('seletor-CSS') ou document.querySelectorAll('seletor-CSS')
Manipular conteúdo:

Alterar o texto de um elemento: elemento.textContent = 'novo texto'
Alterar o HTML de um elemento: elemento.innerHTML = 'novo HTML'
Eventos:

Adicionar um evento a um elemento: elemento.addEventListener('evento', função)
Iterações:

Usar loops, como for ou forEach, para percorrer arrays ou NodeList de elementos.
Criar elementos:

Criar um elemento HTML: document.createElement('tag')
Adicionar um elemento à página: elementoPai.appendChild(novoElemento)

* DIFERENÇA PRINCIPAL:
****************************
*querySelector & querySelectorAll => NodeList
*********************************************
*getElementById | getElementsByClassName | getElementsByTagName => Collection
*****************************************************************************

*/
