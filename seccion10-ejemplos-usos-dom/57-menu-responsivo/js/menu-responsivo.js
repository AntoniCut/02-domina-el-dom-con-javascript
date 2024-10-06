//  ************************************************************************************ 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********** 
//  **********  /57-menu-responsivo/js/menu-responsivo.js  *****************************
//  ************************************************************************************  


window.onload = function () {
    
    //  -----  click botón del menu superior  -----
    document.getElementById("boton").onclick = function () {
        
        const miMenu = document.getElementById("miMenu");
        if (miMenu.className === "menu") miMenu.className += " responsivo";
        else miMenu.className = "menu";
    }


    //  -----  click botón del menu inferior  -----
    document.getElementById("boton2").onclick = function () {
        
        const miMenu2 = document.getElementById("miMenu2");
        if (miMenu2.className === "menu2") miMenu2.className += " responsivo2";
        else miMenu2.className = "menu2";
    }
}


