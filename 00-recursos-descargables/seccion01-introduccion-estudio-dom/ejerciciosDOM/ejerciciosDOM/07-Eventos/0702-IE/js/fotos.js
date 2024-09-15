window.onload = function(){
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	//Listener DOM 2
	if(window.addEventListener){
		fotos.addEventListener("click",function(e){
			//Igualdad estricta
			if(e.target.tagName==="IMG"){
				console.log("Pulso una imagen");
			} else { 
				console.log("NO pulso una imagen");
			}
		}, false);
	} else if(window.attachEvent){
		fotos.attachEvent("onclick", function(e){
			//Igualdad estricta
			if(e.target.tagName==="IMG"){
				console.log("Pulso una imagen");
			} else { 
				console.log("NO pulso una imagen");
			}	
		})
	} else {
		fotos.onclick = function(e){
			//Igualdad estricta
			if(e.target.tagName==="IMG"){
				console.log("Pulso una imagen");
			} else { 
				console.log("NO pulso una imagen");
			}	
		};
	}

}