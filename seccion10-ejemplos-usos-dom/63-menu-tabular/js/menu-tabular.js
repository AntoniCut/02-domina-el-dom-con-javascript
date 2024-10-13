//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /63-menu-tabular/js/menu-tabular.js  *********************************************
//  **********************************************************************************************  


function muestra(num){
	
	const contenidoArray = document.getElementsByClassName("contenido");
	
	//  -----  ocultamos el contenido que son las imagenes  -----
	for (var i = 0; i < contenidoArray.length; i++) {
		contenidoArray[i].style.display = "none";
	}
	
	document.getElementById("foto"+num).style.display = "block";
}