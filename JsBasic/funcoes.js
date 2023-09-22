// Como criar funcoes simples e arrowfunctions

function exponencial(a, b) {
    let resultado = 1;
    for (let i = 1; i <= b; i++) {
        resultado *= a;
    }
    return resultado;
}

console.log(exponencial(3, 3));

// arrowFunction -- faz a mesma coisa que o lambda no Java e Python

const funcaoArrow = (a, b) => a * b;

console.log(funcaoArrow(2, 5));

const funcaoArrow2 = () => 10 % 3;

console.log(funcaoArrow2());

const funcaoArrow3 = (palavra) => {
    let resultado = 0;
    for (let k = 1; k <= palavra.length; k++) {
        resultado += 5;
    }
    return resultado;
}

console.log(funcaoArrow3("OLA"));
