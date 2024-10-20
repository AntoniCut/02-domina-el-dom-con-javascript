//  ************************************************************************************ 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********** 
//  **********  /72-juego-de-memoria/js/juego-memoria.js  ******************************
//  ************************************************************************************  


//  ----------  VARIABLES  ----------

const arrayCartas = [
    { nombre: '1', seleccion: false },
    { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false },
    { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false },
    { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false },
    { nombre: '8', seleccion: false },
    { nombre: '1', seleccion: false },
    { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false },
    { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false },
    { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false },
    { nombre: '8', seleccion: false }
];

let intentos = 0;
let jugada1 = "";
let jugada2 = "";
let idJugada1 = "";
let idJugada2 = "";
const numeroFichas = 16;

//  -----  Referencias al HTML  -----
const btnIniciar = document.getElementById('iniciar');



//  ----------  al cargar el documento  ----------
window.onload = function () {

    //  -----  creamos los eventos click  -----
    btnIniciar.addEventListener('click', iniciarJuego);

    // Agregar eventos a las cartas
    for (let i = 0; i < numeroFichas; i++) {

        //  -----  convertimos el id a string  -----
        const carta = document.getElementById(i.toString());

        //  -----  asignamos los eventos a cada carta  -----
        carta.addEventListener('click', girarCarta);
    }
}



//  ----------  Iniciar Juego  ----------
function iniciarJuego() {

    //  -----  Modificar el tablero  -----
    const tablero = document.getElementById('juego');
    tablero.style.opacity = 1;

    //  -----  Ocultamos el botón de iniciar juego  -----
    btnIniciar.style.display = 'none';

    //  -----  Barajamos las cartas aleatoriamente -----
    arrayCartas.sort(function () {
        return Math.random() - 0.5;
    })

    //  -----  asignamos los valores a las cartas  -----
    asignarValoresCartas();
}



//  ----------  Asignar los valores a las cartas  ----------
function asignarValoresCartas() {

    //  -----  asignamos los valores a las cartas en el atributo data-valor  -----
    arrayCartas.forEach((carta, index) => {

        //  -----  Extraemos el valor 'nombre' de la carta actual del array 'arrayCartas'  -----
        const cartaTem = carta.nombre;

        //  -----  Seleccionamos el elemento HTML con el ID correspondiente al índice (index)  -----
        const dataValor = document.getElementById(index.toString());

        //  -----  Asignamos el valor de la carta al atributo 'data-valor' del elemento HTML  -----
        dataValor.dataset.valor = cartaTem;

        console.log(dataValor.dataset.valor);  // Mostramos en consola el valor asignado para cada carta
    });
}



//  ----------  Girar Carta  ----------
function girarCarta(e) {

    //  -----  valor del evento jugada 2  -----
    jugada2 = e.target.dataset.valor;
    idJugada2 = e.target.id;
    //alert("id: " + e.target.id + " - jugada: " + jugada2);

    //  -----  si hay jugada 1  -----
    if (jugada1) {

        //  -----  si las 2 cartas son iguales  -----
        if (jugada1 === jugada2 &&
            arrayCartas[parseInt(idJugada2)].seleccion != true &&
            arrayCartas[parseInt(idJugada1)].seleccion != true) {

            //  -----  Marcar las cartas como seleccionadas  -----
            arrayCartas[parseInt(idJugada2)].seleccion = true;
            arrayCartas[parseInt(idJugada1)].seleccion = true;

            //  -----  Cambiar color a verde, cartas acertadas  -----
            cambiaColor(idJugada2, 'green', 'OK');
            cambiaColor(idJugada1, 'green', 'OK');

            //  -----  Desactivar el evento de clic en las cartas seleccionadas  -----
            desactivarCarta(idJugada1);
            desactivarCarta(idJugada2);

            limpiarVariables();
            verificar();


        } else if (idJugada1 !== idJugada2) {

            setTimeout(function () {
                cambiaColor(idJugada1, "black", "?");
                cambiaColor(idJugada2, "black", "?");
                limpiarVariables();
            }, 500);
            cambiaColor(idJugada2, "blue", jugada2);
        }

    } else if (jugada2 !== "void") {

        cambiaColor(idJugada2, "blue", jugada2);
        jugada1 = jugada2;
        idJugada1 = idJugada2;
    }
}



//  ----------  Cambia el color de la carta  ----------
function cambiaColor(posicion, color, numero) {

    const numeroCarta = document.getElementById(posicion.toString());
    numeroCarta.style.backgroundColor = color;
    numeroCarta.innerHTML = numero;
}



//  ----------  limpiamos las variables si has acertado las 2 cartas  ----------
function limpiarVariables() {
    
    jugada1 = jugada2 = "";
    idJugada1 = idJugada2 = "";
}



//  ----------  verificamos si el juego ha terminado  ----------
function verificar() {

    let aciertos = 0;

    for (let i = 0; i < numeroFichas; i++) {
        if (arrayCartas[i].seleccion == true) {
            aciertos++;
        }
    }
    if (aciertos == numeroFichas) {
        alert('Has Ganado 😊');
        if (confirm('¿Quieres jugar otra Partida?')) location.reload();
        else return;
    }
}



//  ----------  Desactivar carta  ----------
function desactivarCarta(id) {

    const carta = document.getElementById(id);
    carta.removeEventListener('click', girarCarta);
}