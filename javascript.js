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

    let altura = 0.01 * document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = (peso / (altura * altura)).toFixed(2);
    //document.getElementById("resultado").value = imc;
    let condicao = "";
    /*
    if (imc < 17) {
        condicao = " - Muito abaixo do peso";
    } else {
        if (imc < 18.99) {
            condicao = " - Abaixo do peso";
        } else {
            if (imc < 24.99) {
                condicao = " - Peso normal";
            } else {
                if (imc < 29.99) {
                    condicao = " - Acima do peso";
                } else {
                    if (imc < 34.99) {
                        condicao = " - Obesidade grau I";
                    } else {
                        if (imc < 39.99) {
                            condicao = " - Obesidade grau II";
                        } else {
                            condicao = " - Obesidade SEVERA";
                        }
                    }
                }
            }
        }
    }
    */
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
    /*
    imc < 17
        ? (condicao = " - Muito abaixo do peso")
        : imc < 18.49
        ? (condicao = " - Abaixo do peso")
        : imc < 24.99
        ? (condica = " - Peso normal")
        : imc < 29.99
        ? (condicao = " - Acima do peso")
        : imc < 34.99
        ? (condicao = " - Obesidade")
        : imc < 39.99
        ? (condicao = " - Obesidade I")
        : (condicao = " - Obesidade II");
*/
    document.getElementById("resultado").value = `${imc}   |  ${condicao}`;
}
