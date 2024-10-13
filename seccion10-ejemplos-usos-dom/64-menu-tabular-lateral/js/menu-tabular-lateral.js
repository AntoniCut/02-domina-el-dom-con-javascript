//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /64-menu-tabular-lateral/js/menu-tabular-lateral.js  *****************************
//  **********************************************************************************************  


window.onload = function () {
	document.getElementById("primero").click();
}


function muestra(e, num) {

	const contenidoArray = document.getElementsByClassName("contenido");
	const botonesArray = document.getElementsByClassName("link");

	//  -----  apagamos las imagenes  -----
	for (let i = 0; i < contenidoArray.length; i++) {
		contenidoArray[i].style.display = "none";
	}

	//  -----  encendemos la imagen con el id que le pasamos  -----
	document.getElementById("foto" + num).style.display = "block";

	//  -----  apagamos los botones  -----
	for (var i = 0; i < botonesArray.length; i++) {
		botonesArray[i].className = botonesArray[i].className.replace("activo");
	}

	//  -----  añadimos la clase activo  -----
	e.currentTarget.className += " activo";
}