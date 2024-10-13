//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /62-acordeon/js/acordeon.js  *****************************************************
//  **********************************************************************************************  


window.onload = function () {

	const acordeonArray = document.getElementsByClassName("acordeon");

	//  -----  recorremos el arreglo y creamos los eventos  -----
	for (let i = 0; i < acordeonArray.length; i++) {
		acordeonArray[i].addEventListener("click", selecciona, false);
	}
}


function selecciona() {

	this.classList.toggle("activo");

	const panel = this.nextElementSibling;

	if (panel.style.display === "block") panel.style.display = "none";
	else panel.style.display = "block";
}


