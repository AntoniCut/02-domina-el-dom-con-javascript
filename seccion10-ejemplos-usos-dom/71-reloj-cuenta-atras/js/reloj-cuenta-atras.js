//  ************************************************************************************ 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********** 
//  **********  /71-reloj-cuenta-atras/js/reloj-cuenta-atras.js  ***********************
//  ************************************************************************************  


window.onload = function () {
    const btnIniciar = document.getElementById("btnIniciar");
    btnIniciar.addEventListener('click', iniciarCuentaAtras);
}


// ---------- Función para iniciar la cuenta atrás ----------
function iniciarCuentaAtras() {
    
    // -----  Obtener el valor del input (fecha seleccionada)  -----
    const inputFecha = document.getElementById("fecha").value;

    // Validar si el usuario ha seleccionado una fecha
    if (!inputFecha) {
        alert("Por favor, selecciona una fecha y hora.");
        return;
    }

    //  -----  Convertir la fecha seleccionada en formato adecuado para la cuenta atrás  -----
    const fechaFinal = new Date(inputFecha).toString();
    cuentaAtras(fechaFinal, "reloj", "¡Boom!");
}


// ---------- Función que ejecuta la cuenta atras ----------
function cuentaAtras(fechaFinal, elem, mensaje) {
    
    //  -----  referencia al HTML para el reloj  -----
    const reloj = document.getElementById(elem);


    //  -----  Validar si la fecha final es menor que la fecha actual  -----
    const now = new Date();
    const finalDate = new Date(fechaFinal);

    // Validar si la fecha final es menor que la fecha actual
    if (finalDate <= now) {
        reloj.innerHTML = "🚀 Fecha Final Errónea 🚀";
        return;
    }

    //  -----  Reloj cuenta atras  -----
    const idReloj = setInterval(function () {
        
        const tiempo = despliegaReloj(fechaFinal);
        reloj.innerHTML = `<span> &nbsp; &nbsp; &nbsp; Días &nbsp; : Horas &nbsp; : Minutos &nbsp; : Segundos</span><br>`;
        reloj.innerHTML += tiempo.diasRestantes + ":" + tiempo.horasRestantes + ":" + tiempo.minutosRestantes + ":" + tiempo.segundosRestantes;

        if (tiempo.tiempoRestante <= 1) {
            clearInterval(idReloj);
            reloj.innerHTML = mensaje;
        }
    }, 1000);
}


// ---------- Función que calcula los días, horas, minutos y segundos restantes ----------
function despliegaReloj(fechaFinal) {
    
    const now = new Date();

    //  -----  Restamos la fecha actual de la fecha final y convertimos a segundos  -----
    const tiempoRestante = (new Date(fechaFinal) - now) / 1000;

    //  -----  Validamos que el tiempo restante sea positivo  -----
    if (tiempoRestante < 0) {
        return {
            tiempoRestante: 0,
            segundosRestantes: "00",
            minutosRestantes: "00",
            horasRestantes: "00",
            diasRestantes: "0"
        };
    }

    //  -----  Cálculo de días, horas, minutos y segundos restantes  -----
    const diasRestantes = Math.floor(tiempoRestante / (3600 * 24));
    const horasRestantes = Math.floor((tiempoRestante % (3600 * 24)) / 3600);
    const minutosRestantes = Math.floor((tiempoRestante % 3600) / 60);
    const segundosRestantes = Math.floor(tiempoRestante % 60);

    return {
        tiempoRestante: tiempoRestante,
        segundosRestantes: ('0' + segundosRestantes).slice(-2),
        minutosRestantes: ('0' + minutosRestantes).slice(-2),
        horasRestantes: ('0' + horasRestantes).slice(-2),
        diasRestantes: ('0' + diasRestantes).slice(-2) // Formatear días con dos dígitos
    };
}