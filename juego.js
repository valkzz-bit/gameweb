function jugar(eleccionJugador) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionBot = opciones[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (eleccionJugador === eleccionBot) {
        resultado = '¡Empate!';
    } else if (
        (eleccionJugador === 'piedra' && eleccionBot === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionBot === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionBot === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = 'Perdiste...';
    }

    document.getElementById('resultado').innerText = `Elegiste ${eleccionJugador}, el bot eligió ${eleccionBot}. ${resultado}`;
}
