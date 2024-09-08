window.onload = function(){
	console.time("tiempo");
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	console.dir(document.getElementsByTagName("img"));
	console.info("Hola, cara de bola");
	console.warn("Hola, cara de bola");
	console.error("Hola, cara de bola");
	console.log("Hola, cara de bola");
	console.group("Imagenes");
		console.dir(document.querySelectorAll("img"));
	console.groupEnd();
	console.groupCollapsed("Imágenes");
		console.dir(document.querySelectorAll("img"));
	console.groupEnd();
	
	//Listener
	fotos.addEventListener("click",function(e){
		//Igualdad estricta
		if(e.target.tagName==="IMG"){
			console.log("Pulso una imagen");
		} else { 
			console.log("NO pulso una imagen");
		}
	}, false);
	console.timeEnd("tiempo");

}