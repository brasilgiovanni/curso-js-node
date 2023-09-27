/**
 * Como fazer importação de dados de outro arquivo:
 * --------- import { oquedeseja } from "./pasta/arquivo";
 */

import { Pessoa } from "./script"; // importando a classe Pessoa do arquivo script

const p1 = new Pessoa("Giovanni", 29);
console.log(p1);

import { calculadora } from "./script"; // importando a funcao calculadora do arquivo script

const calculo1 = calculadora.soma(10, 20);
console.log(calculo1);

// Sempre lembrar que para rodar no JS aqui no Visual Studio Code - ctrl + alt + n

