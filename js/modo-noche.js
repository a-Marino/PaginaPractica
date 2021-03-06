// CAMBIAR TEMA
var btnTema = document.querySelector('#btnTema');
var body = document.querySelector('body');
var nav = document.querySelector('#nav');
var noche = function () {
    body.classList.remove('dia');
    body.classList.add('noche');
    nav.classList.remove('navbar-light');
    nav.classList.add('navbar-dark');
    btnTema.innerHTML = 'ON';
    if (document.querySelector('#sumar') && document.querySelector('#restar')) {
        var btnSuma = document.querySelector('#sumar');
        var btnResta = document.querySelector('#restar');
        btnSuma.classList.remove('btn-dark');
        btnSuma.classList.add('btn-light');
        btnResta.classList.remove('btn-dark');
        btnResta.classList.add('btn-light');
    }
};
var dia = function () {
    body.classList.remove('noche');
    body.classList.add('dia');
    nav.classList.remove('navbar-dark');
    nav.classList.add('navbar-light');
    btnTema.innerHTML = 'OFF';
    if (document.querySelector('#sumar') && document.querySelector('#restar')) {
        var btnSuma = document.querySelector('#sumar');
        var btnResta = document.querySelector('#restar');
        btnSuma.classList.remove('btn-light');
        btnSuma.classList.add('btn-dark');
        btnResta.classList.remove('btn-light');
        btnResta.classList.add('btn-dark');
    }
};
btnTema.addEventListener('click', function () {
    if (body.className == 'dia') {
        noche();
        localStorage.setItem('user', JSON.stringify({ modoNoche: true }));
    }
    else if (body.className == 'noche') {
        dia();
        localStorage.setItem('user', JSON.stringify({ modoNoche: false }));
    }
});
window.addEventListener('DOMContentLoaded', function () {
    var userSettings = JSON.parse(localStorage.getItem('user'));
    if (userSettings.modoNoche == true)
        noche();
    else
        dia();
});
