// CAMBIAR TEMA
const btnTema = document.querySelector<HTMLButtonElement>('#btnTema');
const body = document.querySelector<HTMLDivElement>('body');
const nav = document.querySelector<HTMLDivElement>('#nav');

btnTema.addEventListener('click', cambiarTema);


function noche() {
	body.classList.remove('dia');
	body.classList.add('noche');
	nav.classList.remove('navbar-light');
	nav.classList.add('navbar-dark');
	btnTema.innerHTML = 'ON';
	if (document.querySelector<HTMLButtonElement>('#sumar') && document.querySelector<HTMLButtonElement>('#restar')) {
		const btnSuma = document.querySelector<HTMLButtonElement>('#sumar');
		const btnResta = document.querySelector<HTMLButtonElement>('#restar');
		btnSuma.classList.remove('btn-dark');
		btnSuma.classList.add('btn-light');
		btnResta.classList.remove('btn-dark');
		btnResta.classList.add('btn-light');
	}
}

function dia() {
	body.classList.remove('noche');
	body.classList.add('dia');
	nav.classList.remove('navbar-dark');
	nav.classList.add('navbar-light');
	btnTema.innerHTML = 'OFF';
	if (document.querySelector<HTMLButtonElement>('#sumar') && document.querySelector<HTMLButtonElement>('#restar')) {
		const btnSuma = document.querySelector<HTMLButtonElement>('#sumar');
		const btnResta = document.querySelector<HTMLButtonElement>('#restar');
		btnSuma.classList.remove('btn-light');
		btnSuma.classList.add('btn-dark');
		btnResta.classList.remove('btn-light');
		btnResta.classList.add('btn-dark');
	}
}

function cambiarTema(){
	if (body.className == 'dia') {
		noche();
		localStorage.setItem('user', JSON.stringify( { modoNoche: true }));
	} else if (body.className == 'noche') {
		dia();
		localStorage.setItem('user', JSON.stringify( { modoNoche: false }));
	} 
}


window.addEventListener('DOMContentLoaded', ()=>{
	let userSettings = JSON.parse(localStorage.getItem('user'));

	if (userSettings.modoNoche == true) {
		noche();
	} else {
		dia();
	}
}); 
