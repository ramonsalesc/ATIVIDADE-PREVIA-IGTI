"use strict";

document.addEventListener("submit", calculaImc);

/* Function to calculeter IMC */
function calculaImc(event) {
    event.preventDefault();

    let altura = 0.01 * document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura * altura);
    document.getElementById("resultado").value = imc.toFixed(2);
    if (imc<17) {
        "Muito abaixo do peso"
    }if (imc<18,49) {
        
    } else {
        
    }

    Abaixo de 17	
Entre 17 e 18,49	Abaixo do peso
Entre 18,50 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
Entre 30 e 34,99	Obesidade I
Entre 35 e 39,99	Obesidade II (severa)
Acima de 40	Obesidade III (mórbida)

}
