//  ********************************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion13-ejemplos-desarrollo-aplicaciones-dom/  **********  
//  **********  /79-barras-progreso-animadas/js/barras-progreso-animadas.js  *******************************  
//  ********************************************************************************************************  


//  -----  Al cargar el documento, ejecuta el código del juego  -----
document.addEventListener("DOMContentLoaded", () => {

    console.log("El documento ha sido completamente cargado."); // Confirma carga en consola

    const btnInicio = document.getElementById('inicio');

    const datos = [
        { barra: "chocolate", num: 18, color: "#d2691e", porcentajeVenta: 0, avance: 0 },
        { barra: "vainilla", num: 22, color: "#8b8000", porcentajeVenta: 0, avance: 0 },
        { barra: "fresa", num: 10, color: "#e06666", porcentajeVenta: 0, avance: 0 },
        { barra: "pistache", num: 8, color: "#b6d7a8", porcentajeVenta: 0, avance: 0 },
    ];


    let iniciado = false;
    let mayor = 0;
    let intervalo;

    for (let i = 0; i < datos.length; i++) {
        mayor = Math.max(datos[i].num, mayor);
    }

    for (let i = 0; i < datos.length; i++) {

        datos[i].porcentajeVenta = Math.round(datos[i].num / mayor * 100);
        datos[i].id = document.getElementById(datos[i].barra);
        //console.log(datos[i].porcentajeVenta);
    }


    btnInicio.addEventListener("click", () => {

        if (!iniciado) {

            iniciado = true;

            const avanza = () => {

                datos.forEach(dato => {

                    if (dato.avance >= dato.porcentajeVenta) {

                        iniciado = false;
                        dato.id.innerText = `venta ${dato.num} - ${dato.porcentajeVenta}%`;

                    } else {

                        dato.avance++;
                        dato.id.style.width = `${dato.avance}%`;
                        dato.id.style.backgroundColor = `${dato.color}`;
                    }
                })
            }

            setInterval(avanza, 30);
        }
    })
})
