
import { crearCartaHTML, pedirCarta, valorCarta } from "../usecases";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar puntos.
 *  @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar la carta.
 * @param {Array<String>} deck 
 */
// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora,deck) => {
    if (!puntosMinimos) throw new Error ('Puntos minimos no existe')
    if (!deck) throw new Error ('Deck no existe')
        if (!puntosHTML) throw new Error ('Puntos HTML no existe')
    let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta)
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};