window.onload = function(){
	//No funciona el IE 6-7
	//por clase (ojo con el punto)
	var rojos = document.querySelectorAll(".rojo");
	console.error("Tenemos "+rojos.length+" elementos rojos");

	//Selecciono por identificador (#)
	var amarillos = document.querySelectorAll("#amarillo");
	console.error("Tenemos "+amarillos.length+" elementos amarillos");

	//Seleccionamos por atributo
	var verdes = document.querySelectorAll("p[class]");
	console.log("Tenemos "+verdes.length+" elementos verdes");

	//Seleccionamos por etiqueta
	var parrafos = document.querySelectorAll("p");
	console.log("Tenemos "+parrafos.length+" párrafos");

	//Seleccionamos por varias clases
	var noexiste = document.querySelectorAll(".rojo .noexiste");
	console.log("Tenemos "+noexiste.length+" elementos con las clases rojo o noexiste");
}