// CAMBIAR TEMA
const btnTema = document.querySelector<HTMLButtonElement>('#btnTema');
const body = document.querySelector<HTMLDivElement>('body');
const btnSuma = document.querySelector<HTMLButtonElement>('#sumar');
const btnResta = document.querySelector<HTMLButtonElement>('#restar');
const nav = document.querySelector<HTMLDivElement>('#nav');

btnTema.addEventListener('click', cambiarTema);

function noche() {
	body.classList.remove('dia');
	body.classList.add('noche');
	nav.classList.remove('navbar-light');
	nav.classList.add('navbar-dark');
	btnTema.innerHTML = 'ON';
}

function dia() {
	body.classList.remove('noche');
	body.classList.add('dia');
	nav.classList.remove('navbar-dark');
	nav.classList.add('navbar-light');
	btnTema.innerHTML = 'OFF';
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
