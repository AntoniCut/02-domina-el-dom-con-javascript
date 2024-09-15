window.onload = function(){
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	
	//Listener
	fotos.addEventListener("click",function(e){
		//Igualdad estricta
		if(e.target.tagName==="IMG"){
			//Crear la imagen
			var archivoMini = e.target.src;
			var archivo = archivoMini.substr(archivoMini.length-10, 10);
			//console.log(archivo);
			var imagenGrande = "url('imagenes/fondos/"+archivo+"')";
			//alert(imagenGrande);
			//con style modificamos los estilos, no los atributos
			document.getElementById("foto").style.backgroundImage = imagenGrande;
		} else { 
			console.log("NO pulso una imagen");
		}
	}, false);
}