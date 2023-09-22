/*
var // É utilizado globalmente (Variavel global) / Pouco utilizado
let // É utilizado dentro de um escopo (variável local) / Muito utilizado
const // Cria uma constante (não pode ser alterada) Se for feita a tentativa de alterar o valor da erro de execução
*/


// Escopos - Variável externa sendo lida em um escopo interno - Funciona

let name = "Giovanni";

{
    console.log(name); // Funciona! (Observa que o compilador já avisa que a variável foi 'Deprecated' - Descontinuada)
}
/*
{
    let idade = 30; // Observa que o compilador já avisa que a variável foi declarada, mas nunca foi utilizada
}

console.log(idade); // Não funciona - observa que o compilador informa valor 'any' - qualquer - algo não atribuido.
// Quando manda rodar da o seguinte erro: ReferenceError: idade is not defined.
*/

// Escopo Global - VAR
{
    var estacaoDoAno = "Verão";
}

console.log(estacaoDoAno); 
// funciona, pois o Var tem escopo global, mesmo dentro de um escopo local. Por isso esta em desuso, pois causa confusao no código.