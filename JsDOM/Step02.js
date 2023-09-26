"use strict";
/**
 * textContent => retorna o text COM formatações, mas sem os elementos
 * innerText => retorna somente o texto, sem formatações ou elementos
 * 
 * No document .html podemos criar elementos diretamente no DOM principal, mas para melhorar o desempenho podemos fazer no "fragment DOM"
 * const fragment = document.createDocumentFragment();
 * 
 * Como Buscar as superclasses das tags?
 * comando: tag.parentElement; 
 * Exemplo:
 * <html>
 *  <body>
 *      <div>
 *          <p class = "paragrafo"></p>
 * 
 * quem é o pai de <p> ?
 * const p = document.querySelector(".paragrafo");
 * console.log(p.parentElement);
 * --> Isso vai retornar no console a nossa <div>
 * --> se procurar o parentElement da div, vai ser o <body>
 * --> se procurar o parentElement do <body> vai ser o <html>
 * 
 * Como buscar as subclasse? (child)?
 * por exemplo: const container = document.querySelector(".container");
 * // queremos saber o que tem dentro do "container"
 * console.log(container.children); // HTML COLLECTION (Não funciona ForEach)
 * console.log(container.childNodes); // NodeList (funciona o ForEach, porém ele vem com todos os espaços em brancos do arquivo .html)
 * 
 * Então, uma boa saide é utilizar o 'children' que não é iterável pelo ForEach e converter ele num Array
 * const childrenContainer = Array.from(container.children);
 * childrenContainer.forEach((resultado) => {
 *      console.log(resultado); 
 * });
 * 
 * ************ Qual a diferença entre firstChild & firstElementChild? ***************
 * Ambos vao buscar apenas 1 elemento (e não um array de elementos) que esteja dentro de uma <tag>
 * Porém o primeiro ele pega qualquer coisa, por exemplo um texto de paragrafo ou um espaço em branco
 * O segundo (firstElementChild) ele busca apenas outras <tags>
 * Então se você quer selecionar o texto de um paragrafo <p>, você faz "p.firstChild"
 * Se você quer selecionar a tag <strong> dentro de um paragrafo, você faz: "p.firstElementChild"
 * 
 * Da mesma forma, existem os "tag.lastChild" & "tag.lastElementChild" que pega o último elemento da tag selecionada
 * 
 * E se eu não quiser nem o primeiro e nem o ultimo, como faz?
 * usa-se o <tag>.nextSibling (pega a proxima informação, texto ou vazio);
 * <tag>.nextElementSibling (pega a próxima <tag> dentro da <tag> pai)
 * 
 * Também existe o "elemento anterior" --> <tag>.previousSibling ou <tag>.previousElementSibling
 * 
 * ******* COMO ADICIONAR ELEMENTOS? ************
 * por exemplo: tenho a classe 'container' e quero adicionar mais elementos nela, como faz?
 * const container = document.querySelector(".container");
 * container.append("Ola Giovanni"); // adicionei um texto no final do container
 * E se quiser adicionar uma tag nova, por exemplo uma div dentro desse container?
 * const newDiv = document.createElement('div');
 * newDiv.innerText = "Ola Mundo!";
 * container.appendChild(newDiv); // agora foi adicionado uma <div>Ola Mundo!</div>
 * 
 * ***** INSERT BEFORE / AFTER *****
 * Vamos supor que nós tenhamos a seguinte estrutural .html
 * <html>
 *  <body>
 *      
 *      <div class='container'>
 *          <h1>Título aqui<h1>
 *          
 *          <p> class='paragrafo'> Meu texto aqui </p>
 * 
 *          <p> id='paragrafo'> Meu segundo texto aqui </p>
 *      
 *      </div>
 *  </body>
 * </html>
 * 
 * queremos adicionar um header <h2> antes da tag <p class='paragrafo'>. Como fazer isso?
 * const container = document.querySelector(".container");
 * const paragrafo = container.querySelector(".paragrafo");
 * const newH2 = document.createElement("h2");
 * newH2.innerText = "Novo H2 aqui";
 * 
 * container.insertBefore(newH2, paragrafo); // aqui ele vai inserir no container o "newH2" antes da classe "paragrafo";
 * 
 * E se eu quiser criar uma nova div depois da div container?
 * const newDiv = document.createElement("div");
 * container.after(newDiv);
 * newDiv.classList.add("container_section"); // adicionando uma classe a nova div criada
 * 
 * 
 */

