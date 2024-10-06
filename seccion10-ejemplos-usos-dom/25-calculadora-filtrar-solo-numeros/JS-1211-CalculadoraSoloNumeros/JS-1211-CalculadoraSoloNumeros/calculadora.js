window.onload = function() {
	document.getElementById("valor").onkeypress = function(event){
		return numeros(event);
	}
}
/*****************
F U N C I O N E S
******************/
function numeros(e){
	let tecla = e.keyCode;
	let teclado = String.fromCharCode(tecla);
	let especiales = new Array();
	especiales["backspace"] = 8;
	especiales["izquierda"] = 37;
	especiales["derecha"] = 39;
	let bandera = false;
	let numeros = "0123456789.";
	//
	bandera = especiales.includes(tecla);
	//
	if(numeros.indexOf(teclado)==-1 && bandera==false){
		return false;
	}
}