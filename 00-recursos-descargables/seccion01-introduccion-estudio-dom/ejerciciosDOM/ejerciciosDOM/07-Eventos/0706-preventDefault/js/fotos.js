window.onload = function(){
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	//Listener DOM 2
	fotos.addEventListener("click",function(e){
    	e.preventDefault()
		console.log("Desde la división",e);
	}, false);
}