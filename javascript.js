"use strict";
window.addEventListener("load", focusInput);

function focusInput() {
    document.getElementById("altura").focus();
}

document.getElementById("form").reset();

document.addEventListener("submit", calculaImc);

/* Function to calculeter IMC */
function calculaImc(event) {
    event.preventDefault();

    let altura = 0.01 * document.getElementById("altura").value; //altura em cm.
    let peso = document.getElementById("peso").value;
    let imc = (peso / (altura * altura)).toFixed(2); //arredondando o resultado para duas casas decimais.
    let condicao = "";
    // Verificando a qual classe o imc pertence
    if (imc < 17) {
        condicao = " MUITO ABAIXO DO PESO";
    } else if (imc < 18.99) {
        condicao = " ABAIXO DO PESO";
    } else if (imc < 24.99) {
        condicao = " PESO NORMAL";
    } else if (imc < 29.99) {
        condicao = " ACIMA DO PESO";
    } else if (imc < 34.99) {
        condicao = " OBESIDADE GRAU I";
    } else if (imc < 39.99) {
        condicao = " OBESIDADE GRAU II";
    } else {
        condicao = " OBESIDADE SEVERA";
    }

    document.getElementById("resultado").value = ` ${imc} |${condicao} `;
}
