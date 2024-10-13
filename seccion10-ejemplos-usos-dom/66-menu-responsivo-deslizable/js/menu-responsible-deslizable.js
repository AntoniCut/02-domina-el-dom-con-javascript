//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /66-menu-responsivo-deslizable/js/menu-responsivo-deslizable.js  *****************
//  **********************************************************************************************  


window.onload = function () {
	
	const abre = document.getElementById("abre");
	const cerrar = document.getElementById("cerrarMenu");
	const miMenu = document.getElementById("miMenu");

	abre.addEventListener('click', () => {
		miMenu.style.width = "250px";
		abre.style.display = "none";
	});
	
	cerrar.addEventListener('click', () => {
		miMenu.style.width = "0";
		abre.style.display = "block";
	});
}
