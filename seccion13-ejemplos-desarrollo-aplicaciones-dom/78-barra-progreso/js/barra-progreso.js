//  ********************************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion13-ejemplos-desarrollo-aplicaciones-dom/  **********  
//  **********  /78-barra-progreo/js/barra-progreso.js  ****************************************************  
//  ********************************************************************************************************  


//  -----  Al cargar el documento, ejecuta el código del juego  -----
document.addEventListener("DOMContentLoaded", () => {

    console.log("El documento ha sido completamente cargado."); // Confirma carga en consola

    //  -----  referencias al HTML  -----
    const btnInicio = document.getElementById('inicio');
    const barra = document.getElementById('barra');

    let iniciado = false;

    btnInicio.addEventListener("click", () => {
        
        if (!iniciado) {
            
            iniciado = true;
            
            let incrementoBarra = 1;
            const intervalo = setInterval(avanza, 50);

            function avanza() {
                
                if (incrementoBarra >= 100) {
                    
                    iniciado = false;
                    clearInterval(intervalo);

                } else {
                    incrementoBarra++;
                    barra.style.width = `${incrementoBarra}%`;
                    barra.innerText = `${incrementoBarra}%`;
                }
            }
        }
    })
});
