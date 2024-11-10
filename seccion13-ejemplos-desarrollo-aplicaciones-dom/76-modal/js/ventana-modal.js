//  ********************************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion13-ejemplos-desarrollo-aplicaciones-dom/  **********  
//  **********  /76-ventana-modal/js/ventana-modal.js  *****************************************************  
//  ********************************************************************************************************  


//  -----  Al cargar el documento, ejecuta el código del juego  -----
document.addEventListener("DOMContentLoaded", () => {

    console.log("El documento ha sido completamente cargado."); // Confirma carga en consola

    //  -----  referencias al HTML  -----
	
    const img = document.getElementById('miImg');               //  imagen
    const modal = document.getElementById("miModal");           //  modal a visualizar
    const modalImg = document.getElementById("img01");          //  imagen del modal
	const modalTexto = document.getElementById("caption");      //  texto del modal
	const span = document.getElementsByClassName("close")[0];   //  X para cerrar el modal

	//  -----  Detectamos el click  -----
	img.addEventListener('click', () => {
   
        modal.style.display = "block";
        modalImg.setAttribute('src', 'imagenes/fondo1.jpg')
        
        const texto = img.getAttribute('alt');
        modalTexto.innerText = texto;
	});
      

    span.addEventListener('click', () => {
        
        modal.style.display = "none";
    });
	
    
});



