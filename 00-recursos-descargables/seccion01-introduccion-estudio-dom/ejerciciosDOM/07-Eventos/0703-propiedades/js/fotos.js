window.onload = function(){
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	//Listener DOM 2
	fotos.addEventListener("click",function(e){
		console.log(e);
		//Igualdad estricta
		if(e.target.tagName==="IMG"){
			console.log("Pulso una imagen");
		} else { 
			console.log("NO pulso una imagen");
		}
	}, false);
}