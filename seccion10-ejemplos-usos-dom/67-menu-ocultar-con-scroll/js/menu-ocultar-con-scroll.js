//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /67-menu-ocultar-con-scroll/js/menu-responsivo-deslizable.js  ********************
//  **********************************************************************************************  


window.onscroll=function(){
	
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("menu").style.top = "0";
	} else {
		document.getElementById("menu").style.top = "-50px";
	}
}