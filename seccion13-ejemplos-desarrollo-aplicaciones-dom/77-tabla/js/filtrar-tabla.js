//  ********************************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion13-ejemplos-desarrollo-aplicaciones-dom/  **********  
//  **********  /77-filtrar-tabla/js/filtrar-tabla.js  *****************************************************  
//  ********************************************************************************************************  


//  -----  Al cargar el documento, ejecuta el código del juego  -----
document.addEventListener("DOMContentLoaded", () => {

    console.log("El documento ha sido completamente cargado."); // Confirma carga en consola

    //  -----  referencias al HTML  -----
    const entrada = document.getElementById('entrada');
    const tr = document.getElementsByTagName('tr');
    

    //  -----  función que filtra la información  -----
    const filtro = () => {

        const filtroTxt = entrada.value.toUpperCase();
        
        //  -----  Convierte 'tr' a un array y usa forEach  -----
        Array.from(tr).forEach(row => {
            
            //  -----  elemento 0 que es el título  -----
            const td = row.getElementsByTagName('td')[0];   
            
            //  -----  Si existe td  -----
            if (td) {
                
                const txtValor = td.textContent || td.innerText;
                
                //  -----  Muestra la fila si coincide  -----
                if (txtValor.toUpperCase().indexOf(filtroTxt) > -1) row.style.display = ""; 
                
                //  -----  Oculta la fila si no coincide  -----
                else row.style.display = "none";                        
                
            }
        });
    }


    //  -----  evento al escribir en el input  -----
    entrada.addEventListener('keyup', filtro);
});
