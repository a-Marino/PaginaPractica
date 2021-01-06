var btn = document.querySelector('#btn');
var btnRestar = document.querySelector('#btnRestar');
var resultado = document.querySelector('#resultado');
var contador = 0;
btn.addEventListener('click', function () {
    contador++;
    btnRestar.hidden = false;
    resultado.innerHTML = contador.toString();
    frases();
});
btnRestar.addEventListener('click', function () {
    if (contador <= 1)
        btnRestar.hidden = true;
    contador--;
    resultado.innerHTML = contador.toString();
    frases();
});
var frases = function () {
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
};
