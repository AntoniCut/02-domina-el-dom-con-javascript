//  ************************************************************************************************************************
//  **********  /02-domina-el-dom-con-javascript/seccion01-introduccion-estudio-dom/01-introduccion/js/foto02.js  **********
//  ************************************************************************************************************************


//  **********  Forma Antigua  **********
window.onload = function () {

	console.log("\n\n");
	console.warn("*****  Forma Antigua  *****");

	console.time("tiempo");
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	
	console.dir(document.getElementsByTagName("img"));
	console.info("info: ", "Hola, cara de bola");
	console.warn("warn: ", "Hola, cara de bola");
	console.error("error: ", "Hola, cara de bola");
	console.log("log: ","Hola, cara de bola");
	
	console.group("group - Imagenes");
	console.dir(document.querySelectorAll("img"));
	console.groupEnd();
	
	console.groupCollapsed("group - collapse - Imágenes");
	console.dir(document.querySelectorAll("img"));
	console.groupEnd();

	//Listener
	fotos.addEventListener("click", function (e) {
		//Igualdad estricta
		if (e.target.tagName === "IMG") console.log("Pulso una imagen");
		else console.log("NO pulso una imagen");
		
	}, false);
	console.timeEnd("tiempo");

}


//  **********  Forma Moderna  **********
document.addEventListener('DOMContentLoaded', function () {

	console.log("\n\n");
	console.warn("*****  Forma Moderna  *****");
	
	console.time("tiempo");

	// Recuperamos las fotos dentro de la división
	const fotos = document.querySelector("div");
	
	console.dir(document.getElementsByTagName("img"));
	console.info("info: ", "Hola, cara de bola");
	console.warn("warn: ", "Hola, cara de bola");
	console.error("error: ", "Hola, cara de bola");
	console.log("log: ","Hola, cara de bola");

	console.group("group - Imagenes");
	console.dir(document.querySelectorAll("img"));
	console.groupEnd();
	
	console.groupCollapsed("group - collapse - Imágenes");
	console.dir(document.querySelectorAll("img"));
	console.groupEnd();


	// Listener
	fotos.addEventListener("click", (e) => {
		// Igualdad estricta
		if (e.target.tagName === "IMG") console.log("Pulso una imagen");
		else console.log("NO pulso una imagen");
		
	}, false);

	console.timeEnd("tiempo");
});
