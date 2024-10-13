//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /69-menu-vertical-con-submenu/js/menu-vertical-con-submenu.js  *******************
//  **********************************************************************************************  


window.onload = function () {
	
	const botonesArray = document.getElementsByClassName("boton");
	const submenu = document.querySelector(".contenido");

	
	for (let i = 0; i < botonesArray.length; i++) {

		botonesArray[i].addEventListener("click", function () {

			// Si el submenú está visible, lo oculta, de lo contrario, lo muestra
			if (submenu.style.display === "block") submenu.style.display = "none";  // Oculta el submenú
			else submenu.style.display = "block";  									// Muestra el submenú
			

			// Alternar clase 'activo' en el botón clicado
			for (let j = 0; j < botonesArray.length; j++) {
				botonesArray[j].classList.remove("activo");  // Remover 'activo' de todos los botones
			}
			this.classList.add("activo");  // Agrega 'activo' solo al botón clicado

		}, false);
	}


	//  -----  Cerrar el submenú si se hace clic en cualquier parte fuera de los botones del menú  -----
	window.addEventListener("click", function (event) {
		
		let isClickInside = false;

		for (let i = 0; i < botonesArray.length; i++) {
			
			if (botonesArray[i].contains(event.target)) {
				isClickInside = true;
				break;
			}
		}

		if (!isClickInside) {
			
			submenu.style.display = "none";  // Cierra el submenú si se clicó fuera de los botones
			for (let i = 0; i < botonesArray.length; i++) {
				botonesArray[i].classList.remove("activo");  // Remueve clase 'activo'
			}
		}
	});
}



