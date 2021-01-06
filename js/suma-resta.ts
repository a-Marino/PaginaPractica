const parrafo = document.createElement('p');
const btnSuma = document.querySelector<HTMLButtonElement>('#sumar');
const btnResta = document.querySelector<HTMLButtonElement>('#restar');
const divResultado = document.querySelector<HTMLDivElement>('#calculo');
let resultadoCalculo:number;

btnSuma.addEventListener('click', calcular);
btnResta.addEventListener('click', calcular);

function calcular(e) {
	let num1 = document.querySelector<HTMLInputElement>('#numero1').value;
	let num2 = document.querySelector<HTMLInputElement>('#numero2').value;
	if (num1 == '' || num2 == '') {
		parrafo.innerHTML = 'Debe colocar ambos numeros para poder realizar la operacion';
		parrafo.classList.add('text-danger');
	 	divResultado.appendChild(parrafo);
	 	setTimeout(()=> {
 			parrafo.innerHTML = '';
 			parrafo.classList.remove('text-danger');
		}, 3000);
	} else {	
		if (e.target == btnSuma) {
			resultadoCalculo = parseInt(num1) + parseInt(num2);
			parrafo.innerHTML = resultadoCalculo.toString();
			divResultado.appendChild(parrafo);
		} else if (e.target == btnResta) {
			resultadoCalculo = parseInt(num1) - parseInt(num2);
			parrafo.innerHTML = resultadoCalculo.toString();
			divResultado.appendChild(parrafo);
		}
	}
}