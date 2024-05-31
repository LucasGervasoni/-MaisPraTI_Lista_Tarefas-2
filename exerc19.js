const prompt = require('prompt-sync')();

function validarHorario(horario) {
    const partes = horario.split(':');
    if (partes.length !== 3) {
        return false;
    }

    const hora = parseInt(partes[0]);
    const minuto = parseInt(partes[1]);
    const segundo = parseInt(partes[2]);

    if (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
        return false;
    }

    if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59) {
        return false;
    }

    return true;
}

for (let i = 0; i < 5; i++) {
    let horario = prompt('Digite um horário no formato HH:MM:SS: ');

    while (!validarHorario(horario)) {
        console.log('Horário inválido. Tente novamente.');
        horario = prompt('Digite um horário no formato HH:MM:SS: ');
    }

    console.log(`Horário ${i+1}: ${horario}`);
}