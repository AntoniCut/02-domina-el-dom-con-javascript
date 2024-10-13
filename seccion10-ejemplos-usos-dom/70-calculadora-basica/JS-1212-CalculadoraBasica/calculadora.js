window.onload = function () {
	var signos = "+-*/";
	var x = new Array();

	// Asignar evento onkeypress al campo de entrada
	document.getElementById("valor").onkeypress = function (event) {
		return numeros(event);
	};

	// Obtener todos los botones
	x = document.querySelectorAll("input[type=button]");

	// Asignar eventos onclick a los botones
	for (var i = 0; i < x.length; i++) {
		x[i].onclick = function () {
			var n = this.value; // Usar var en lugar de let para compatibilidad con sintaxis antigua

			if (n == "C") {
				borrar();
			} else if (n == "<") {
				borrarCaracter();
			} else if (n == "=") {
				calcular();
			} else if (signos.indexOf(n) > -1) {
				validarSigno(n);
			} else {
				regresar(n);
			}
		};
	}
};


/*****************
F U N C I O N E S
******************/

function numeros(e) {
	var tecla = e.keyCode;
	var teclado = String.fromCharCode(tecla);
	var especiales = new Array();

	// Definir códigos de teclas especiales
	especiales["backspace"] = 8;
	especiales["izquierda"] = 37;
	especiales["derecha"] = 39;

	var bandera = false;
	var numeros = "0123456789.";

	// Comprobar si la tecla es especial
	bandera = (especiales.indexOf(tecla) !== -1);

	// Si la tecla no es un número ni especial, no hacer nada
	if (numeros.indexOf(teclado) == -1 && bandera == false) {
		return false;
	}
}

function borrar() {
	console.log("Borrar");
	document.forma.valor.value = "";
}

function borrarCaracter() {
	console.log("Borrar caracter");
	var anterior = document.forma.valor.value;
	var nuevo = anterior.substring(0, anterior.length - 1);
	document.getElementById("valor").value = nuevo;
}

function calcular() {
	console.log("Calcular");
	var resultado = eval(document.forma.valor.value); // Eliminar el "=" en la expresión
	if (resultado == Infinity) {
		document.forma.valor.value = "No podemos dividir entre 0";
	} else {
		document.forma.valor.value = resultado;
	}
}

function validarSigno(n) {
	console.log("validaSigno");
	let anterior = document.forma.valor.value;

	if (anterior != "") {
		document.getElementById("valor").value = anterior + n;
		cadena = document.getElementById("valor").value;
		var record = 0;
		var igual = 1;
	}

	for (let a = 1; a < cadena.length; a++) {

		if (cadena.charAt(a) == "+" ||
			cadena.charAt(a) == "-" ||
			cadena.charAt(a) == "*" ||
			cadena.charAt(a) == "." ||
			cadena.charAt(a) == "/") igual++;

		else {
			if (igual > record) record = igual;
			else igual = 1;
		}

		if(igual > record) record = igual;
		if(record > 2) {
			var numero = cadena.substring(0, cadena.length - 1);
			document.getElementById("valor").value = numero;
			record = 0;
			igual = 1;
		}
	}
}


function regresar(n) {
	console.log("regresar número");
	var anterior = document.forma.valor.value;
	var nuevo = anterior + n;
	document.getElementById("valor").value = nuevo;
}

