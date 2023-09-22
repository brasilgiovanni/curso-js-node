/*
IMC = Indice de massa corporal
Como se calcula? É calculado dividindo o peso (kg) pela altura ao quadrado (m²) pela seguinte formula:
IMC = PESO / (ALTURA X ALTURA)

VALORES PADRÕES:
Abaixo de 17 | Muito abaixo do ideal (Desnutrido);
Entre 17 a 18,5 | Abaixo do ideal (muito magro);
Entre 18,5 e 24,99 | Ideal (normal);
Entre 25 e 29,99 | Acima do ideal (cheinho);
Entre 30 e 40 | Muito acima (Obesidade);
*/

const peso = 88;
const altura = 1.68;
const imc = Number((peso / (altura * altura)).toFixed(2)); // fixa em 2 casas decimais porém converte para String, então precisamos fazer cast para Number

console.log(imc);
console.log(typeof imc);
let resposta;

switch (true) {
    case imc < 17:
        resposta = "Desnutrido";
        break;
    case imc < 18.5:
        resposta = "magro";
        break;
    case imc < 25:
        resposta = "Normal";
        break;
    case imc < 30:
        resposta = "cheinho";
        break;
    case imc < 35:
        resposta = "gordo";
        break;
    case imc >= 35:
        resposta = "Obeso";
        break;

    default:
        resposta = "morto";
        break;
}

console.log("Você é um individuo: " + resposta);