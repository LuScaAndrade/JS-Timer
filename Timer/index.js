const timer = document.querySelector('#timer');
let segundos = 0
let time;

function criaHoraDosSegundos(segundos) {
    const data = new Date(1000 * segundos);
    return data.toLocaleTimeString('pt-BR', {
        hours12: false,
        timeZone: 'UTC'
    });
}


function iniciaRelogio() {
    time = setInterval(function () {
        segundos++;
        timer.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    //el = elemento 
    //e = event
    const el = e.target;

    if (el.classList.contains('reiniciar')) {
        clearInterval(time);
        timer.innerHTML = '00:00:00';
        timer.classList.remove('pausado');
        segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
        timer.classList.remove('pausado');
        clearInterval(time);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        clearInterval(time);
        timer.classList.add('pausado')
    }
});

relogio();

