//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /65-menu-tabular-encabezado/js/menu-tabular-encabezado.js  ***********************
//  **********************************************************************************************  


window.onload = function () {
	
	//  -----  creamos los listeners de los botones  -----
	const botonesArray = document.getElementsByClassName("boton");
	
	for (let i = 0; i < botonesArray.length; i++) {
		botonesArray[i].onclick = muestra;
	}

	//  -----  Iniciamos con el primer boton  -----
	document.getElementById("inicio").click();
}


function muestra() {
	
	const contenedorArray = document.getElementsByClassName("contenedor");
	const botonesArray = document.getElementsByClassName("boton");
	
	//  -----  Apagamos los contenedores o imagenes  -----
	for (let i = 0; i < contenedorArray.length; i++) {
		contenedorArray[i].style.display = "none";
	}
	
	//  -----  Apagamos los botones  -----
	for (let i = 0; i < botonesArray.length; i++) {
		botonesArray[i].style.backgroundColor = "gray";
	}
	
	//  -----  Encender el boton y el contenedor que esta activo  -----
	let num = this.innerHTML;
	num = num.replace("Foto ", "");
	document.getElementById("foto" + num).style.display = "block";
	this.style.backgroundColor = "orange";
}

