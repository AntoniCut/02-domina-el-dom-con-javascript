//  ************************************************************************************ 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********** 
//  **********  /57-menu-responsivo/js/menu-responsivo.js  *****************************
//  ************************************************************************************  


window.onload = function () {

    // Seleccionamos todas las imágenes
    const $img = document.getElementsByTagName('img');

    // Recorremos todas las imágenes para agregarles un evento de clic
    for (let i = 0; i < $img.length; i++) {

        $img[i].addEventListener('click', function () {

            const imagen = document.getElementById("imagen");
            const texto = document.getElementById("texto");

            imagen.src = this.src;  // Se usa 'this' para referirse a la imagen que fue clickeada
            texto.innerHTML = this.alt;  // Se obtiene el texto alternativo de la imagen
            imagen.parentElement.style.display = "block";  // Mostramos el contenedor
        });


        // Seleccionamos el botón de cerrar
        const cerrar = document.querySelector('.cerrar');

        // Agregamos un evento para cerrar la imagen ampliada
        cerrar.addEventListener('click', function () {
            const contenido = document.querySelector('.contenido');
            contenido.style.display = "none";  // Ocultamos el contenedor de la imagen ampliada
        });
    }
}



