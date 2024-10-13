//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /61-galeria-slideshow-responsivos/js/galeria-slideshow-responsivos.js  ***********
//  **********************************************************************************************  


var index = 1;

window.onload = function(){
	muestraFoto(index);
}

function mueve(n){
	muestraFoto(index += n);
}

function foto(n){
	muestraFoto(index = n);
}

function muestraFoto(n){
	
    var i;
	var fotos = document.getElementsByClassName("foto");
	var muestras = document.getElementsByClassName("muestra");
	var texto = document.getElementById("texto");
	console.log(muestras.length);
	
    if( n > fotos.length) index = 1;
	
    if( n < 1) index = fotos.length;
	
    /* Apagar la visualizacion de las fotos grandes */
	for (var i = 0; i < fotos.length; i++) {
		fotos[i].style.display = "none";
	}
	for (var i = 0; i < muestras.length; i++) {
		muestras[i].className = muestras[i].className.replace("activo","");
	}
	
    fotos[index-1].style.display = "block";
	muestras[index-1].className += " activo";
	texto.innerHTML = muestras[index-1].alt;
}
