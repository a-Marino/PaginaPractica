// CAMBIAR TEMA
var btnTema = document.querySelector('#btnTema');
var body = document.querySelector('body');
var btnSuma = document.querySelector('#sumar');
var btnResta = document.querySelector('#restar');
var nav = document.querySelector('#nav');
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
function cambiarTema() {
    if (body.className == 'dia') {
        noche();
        localStorage.setItem('user', JSON.stringify({ modoNoche: true }));
    }
    else if (body.className == 'noche') {
        dia();
        localStorage.setItem('user', JSON.stringify({ modoNoche: false }));
    }
}
window.addEventListener('DOMContentLoaded', function () {
    var userSettings = JSON.parse(localStorage.getItem('user'));
    if (userSettings.modoNoche == true) {
        noche();
    }
    else {
        dia();
    }
});
