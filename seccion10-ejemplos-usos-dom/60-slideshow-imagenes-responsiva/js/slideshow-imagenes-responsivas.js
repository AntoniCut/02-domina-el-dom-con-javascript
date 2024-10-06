//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********************* 
//  **********  /60-slideshow-imagenes-responsivas/js/slideshow-imagenes-responsivas.js  **********
//  ***********************************************************************************************  


let index = 1;

window.onload = function () {
    muestraFoto(index);
}


function mueve(n) {
    muestraFoto(index += n);
}


function foto(n) {
    muestraFoto(index = n);
}


function muestraFoto(n) {

    //var i;

    //  -----  referencia al HTML  -----
    const fotos = document.getElementsByClassName("foto");
    const bolitas = document.getElementsByClassName("bolita");
    
    //  -----  si la foto es la tercera pasamos a la foto 1  -----
    if (n > fotos.length) index = 1;
    
    //  -----  si la foto es la primera pasamos a la foto 4  -----
    if (n < 1) index = fotos.length;

    //  -----  apagamos todas las fotos  -----
    for (let i = 0; i < fotos.length; i++) fotos[i].style.display = "none";

    //  -----  eliminamos al array de bolitas la clase activo si la tiene  -----
    for (let i = 0; i < bolitas.length; i++) bolitas[i].className = bolitas[i].className.replace("activo", "");
    
    fotos[index - 1].style.display = "block";
    bolitas[index - 1].className += " activo";

}




