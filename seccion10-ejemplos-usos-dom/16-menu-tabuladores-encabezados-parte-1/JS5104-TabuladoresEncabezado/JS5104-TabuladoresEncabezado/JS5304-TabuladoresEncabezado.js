window.onload = function() {
	//creamos los listeners de los botones
	var botones_array = document.getElementsByClassName("boton");
	for (var i = 0; i < botones_array.length; i++) {
		botones_array[i].onclick = muestra;
	}
	//Iniciamos con el primer boton
	document.getElementById("inicio").click();
}
function muestra(e) {
	var i, num, botones_array, contenedor_array;
	contenedor_array = document.getElementsByClassName("contenedor");
	botones_array = document.getElementsByClassName("boton");
	//Apagamos los contenedores
	for (var i = 0; i < contenedor_array.length; i++) {
		contenedor_array[i].style.display = "none";
	}
	//Apagamos los botones
	for (var i = 0; i < botones_array.length; i++) {
		botones_array[i].style.backgroundColor = "gray";
	}
	//Encender el boton y el contenedor
	num = this.innerHTML;
	num = num.replace("Foto ","");
	document.getElementById("foto"+num).style.display = "block";
	this.style.backgroundColor = "orange";
}