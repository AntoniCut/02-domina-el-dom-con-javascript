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
var identificadorJ1 = indentificadorJ2 = "";
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
	alert("Evento"+evento.target.id+" Juagada"+jugada2);
}