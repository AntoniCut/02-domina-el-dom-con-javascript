//  ************************************************************************************************************************
//  **********  /02-domina-el-dom-con-javascript/seccion01-introduccion-estudio-dom/01-introduccion/js/foto02.js  **********
//  ************************************************************************************************************************


//  **********  Forma Antigua  **********
window.onload = function () {

	console.log("\n\n");
	console.warn("*****  Forma Antigua  *****");

	//  -----  Console-Time  -----
	console.time("tiempo");
	
	//  -----  Recuperamos las fotos dentro de la división  -----
	const galeria = document.querySelector("#galeria");
	console.log("galeria: ", galeria);

	//  -----  Console-Dir  -----
	console.dir(document.getElementsByTagName("img"));
	console.info("info: ", "Hola, cara de bola");
	console.warn("warn: ", "Hola, cara de bola");
	console.error("error: ", "Hola, cara de bola");
	console.log("log: ","Hola, cara de bola");
	
	//  -----  Console-Group  -----
	console.group("group - Imagenes");
	const imagenes = document.querySelectorAll('img');
	console.dir(imagenes);
	console.groupEnd();
	
	//  -----  Console-Group-Collapsed  -----
	console.groupCollapsed("group - collapse - Imágenes");
	console.dir(imagenes);
	console.groupEnd();

	//  -----  Console-Time  -----
	document.addEventListener("click", function (e) {
		
		console.log("e.target.tagName: ", e.target.tagName);
		
		if (e.target.tagName === "IMG") console.log("Pulso una imagen");
		else console.log("NO pulso una imagen");
		
	});

	console.timeEnd("tiempo");
}
