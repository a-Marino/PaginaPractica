'use strict';
var btn = document.querySelector('#btn');
var btnRestar = document.querySelector('#btnRestar');
var resultado = document.querySelector('#resultado');
var contador = 0;
btn.addEventListener('click', aumentarContador);
btnRestar.addEventListener('click', restarContador);
function aumentarContador() {
    contador++;
    btnRestar.hidden = false;
    resultado.innerHTML = contador.toString();
    frases();
}
function restarContador() {
    if (contador <= 1) {
        btnRestar.hidden = true;
    }
    contador--;
    resultado.innerHTML = contador.toString();
    frases();
}
function frases() {
    var p = document.createElement('p');
    p.classList.add('text-info');
    switch (contador) {
        case 100:
            p.innerHTML = 'Felicidades tocaste el boton 100 veces';
            resultado.appendChild(p);
            //alert('Felicidades tocaste el boton 100 veces');
            break;
        case 200:
            p.innerHTML = 'Calmate, ya tocaste el boton 200 veces';
            resultado.appendChild(p);
            break;
        case 300:
            p.innerHTML = 'Estas loco, tocaste el boton 300 veces';
            p.classList.remove('text-info');
            p.classList.add('text-danger');
            resultado.appendChild(p);
            break;
        default:
            break;
    }
}
// CALCULADORA
var parrafo = document.createElement('p');
var btnSuma = document.querySelector('#sumar');
var btnResta = document.querySelector('#restar');
var divResultado = document.querySelector('#calculo');
var resultadoCalculo;
btnSuma.addEventListener('click', calcular);
btnResta.addEventListener('click', calcular);
function calcular(e) {
    var num1 = document.querySelector('#numero1').value;
    var num2 = document.querySelector('#numero2').value;
    if (num1 == '' || num2 == '') {
        parrafo.innerHTML = 'Debe colocar ambos numeros para poder realizar la operacion';
        parrafo.classList.add('text-danger');
        divResultado.appendChild(parrafo);
        setTimeout(function () {
            parrafo.innerHTML = '';
            parrafo.classList.remove('text-danger');
        }, 3000);
    }
    else {
        if (e.target == btnSuma) {
            resultadoCalculo = parseInt(num1) + parseInt(num2);
            parrafo.innerHTML = resultadoCalculo.toString();
            divResultado.appendChild(parrafo);
        }
        else if (e.target == btnResta) {
            resultadoCalculo = parseInt(num1) - parseInt(num2);
            parrafo.innerHTML = resultadoCalculo.toString();
            divResultado.appendChild(parrafo);
        }
    }
}
