//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /68-menu-con-encabezado/js/menu-con-encabezado.js  *******************************
//  **********************************************************************************************  


let desplazamiento;


window.onload = function () {
	const menu = document.getElementById("menu");
	desplazamiento = menu.offsetTop;
}


window.onscroll = function () {
	if (window.scrollY >= desplazamiento) menu.classList.add("fijar");
	else menu.classList.remove("fijar");
}