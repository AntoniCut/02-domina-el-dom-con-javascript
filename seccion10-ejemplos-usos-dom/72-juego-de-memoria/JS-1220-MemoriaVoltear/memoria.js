/*****************
V a r i a b l e s
******************/
var cartas = new Array(
{nombre:'1',seleccion:false},
{nombre:'2',seleccion:false},
{nombre:'3',seleccion:false},
{nombre:'4',seleccion:false},
{nombre:'5',seleccion:false},
{nombre:'6',seleccion:false},
{nombre:'7',seleccion:false},
{nombre:'8',seleccion:false},
{nombre:'1',seleccion:false},
{nombre:'2',seleccion:false},
{nombre:'3',seleccion:false},
{nombre:'4',seleccion:false},
{nombre:'5',seleccion:false},
{nombre:'6',seleccion:false},
{nombre:'7',seleccion:false},
{nombre:'8',seleccion:false}
)

var intentos = 0;
var jugada1 = jugada2 = "";
var identificadorJ1 = ""; 
var identificadorJ2 = "";
var numFichas = 16;

window.onload = function(){
	document.getElementById("iniciar").onclick = iniciarJuego;
	for (var i = 0; i < numFichas; i++) {
		document.getElementById(i.toString()).onclick = girarCarta;
	}
}

function iniciarJuego(){
	//Modificar el tablero
	var dato = document.getElementById("juego");
	dato.style.opacity = 1;

	//Ocultar botón
	document.getElementById("iniciar").style.display = 'none';

	//Barajamos cartas
	cartas.sort(function(){return Math.random() - 0.5});

	//Asignamos los datos a las celdas de la tabla
	for (var i = 0; i < numFichas; i++) {
		var carta = cartas[i].nombre;
		var data = document.getElementById(i.toString());
		data.dataset.valor = carta;
		console.log(data.dataset.valor);
	}

}

function girarCarta(){
	var evento = window.event;
	jugada2 = evento.target.dataset.valor;
	identificadorJ2 = evento.target.id;
	
	//Seleccionamos la segunda carta
	if (jugada1 !== "") {

		//Son iguales las cartas
		if (jugada1 === jugada2 &&
			cartas[parseInt(identificadorJ2)].seleccion != true &&
			cartas[parseInt(identificadorJ1)].seleccion != true
			) {
			cartas[parseInt(identificadorJ2)].seleccion = true;
			cartas[parseInt(identificadorJ1)].seleccion = true;

			cambiaColor(identificadorJ2, "blue", jugada2);
			limpiarVariables();
			verificar();
		} else if(identificadorJ1 !== identificadorJ2){
			setTimeout(function(){
				cambiaColor(identificadorJ1, "black", "?");	
				cambiaColor(identificadorJ2, "black", "?");	
				limpiarVariables();
			}, 500);
			cambiaColor(identificadorJ2, "blue", jugada2);
		}

	} else if (jugada2 !== "void") {
		cambiaColor(identificadorJ2, "blue", jugada2);
		jugada1 = jugada2;
		identificadorJ1 = identificadorJ2;
	}
}

function cambiaColor(posicion, color, numero){
	document.getElementById(posicion.toString()).style.backgroundColor = color;
	document.getElementById(posicion.toString()).innerHTML = numero;
}

function limpiarVariables() {
	jugada1 = jugada2 = "";
	identificadorJ1 = identificadorJ2 = "";
}

function verificar() {
	var aciertos = 0;
	for(var i = 0; i < numFichas; i++) {
		if(cartas[i].seleccion == true) {
			aciertos++;
		}
	}
	if(aciertos == numFichas) {
		alert("Felicidades, concluiste el juego de memoria");
	}
}