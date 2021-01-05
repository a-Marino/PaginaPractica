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
