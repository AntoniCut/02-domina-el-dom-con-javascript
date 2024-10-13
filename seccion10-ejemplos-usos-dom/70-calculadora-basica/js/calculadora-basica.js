//  ********************************************************************************************** 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ******************** 
//  **********  /70-calculadora-basica/js/calculadora-basica.js  *********************************
//  **********************************************************************************************  



window.onload = function () {
    const teclaPulsada = document.getElementById("valor");
    const botones = document.querySelectorAll('input[type=button]');
    const signos = "+-*/"; // Operaciones matemáticas.

    // ----- Evento pulsar una tecla -----
    teclaPulsada.addEventListener('keypress', (e) => {
        return numeros(e);
    });

    // ----- Obtener los eventos de todos los botones -----
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const valorBoton = e.target.value;

            if (valorBoton === "C") borrar();
            else if (valorBoton === "<") borrarCaracter();
            else if (valorBoton === "=") calcular();
            else regresar(valorBoton);
        });
    });
}



// ---------- FUNCIONES ----------


//  ----------  Verificar si el carácter ingresado es un número o signo ----------
const numeros = (e) => {
    const tecla = e.keyCode || e.which;
    const teclado = String.fromCharCode(tecla);
    const caracteresEspeciales = [8, 37, 39]; // Códigos de teclas especiales
    let numeros = "0123456789.";

    // Si la tecla no es un número ni un carácter especial, no hace nada
    if (numeros.indexOf(teclado) === -1 && !caracteresEspeciales.includes(tecla)) {
        return false;
    }

    console.log(teclado); // Muestra el carácter en el console.log
}



// ---------- Función para borrar todo el contenido ----------
const borrar = () => {
    console.log("Borrar");
    document.querySelector('#valor').value = ""; 
}



// ---------- Función para borrar el último carácter ----------
const borrarCaracter = () => {
    console.log("Borrar caracter");
    const valor = document.querySelector('#valor').value;
    document.querySelector('#valor').value = valor.slice(0, -1); 
}



// ---------- Función para realizar el cálculo ----------
const calcular = () => {
    console.log("Calcular");
    const valorEntrada = document.querySelector('#valor').value;

    // Verificar que la entrada no esté vacía
    if (!valorEntrada) {
        document.querySelector('#valor').value = "Error: vacío";
        return;
    }

    try {
        // Validar que la expresión sea válida
        const expresionValida = /^[0-9+\-*/.() ]+$/.test(valorEntrada);
        
        if (!expresionValida) {
            document.querySelector('#valor').value = "Error: inválido";
            return;
        }

        // Evaluar la expresión
        const resultado = eval(valorEntrada);

        // Verificar si el resultado es Infinity o NaN
        if (resultado === Infinity) document.querySelector('#valor').value = "No podemos dividir entre 0";
        else if (isNaN(resultado)) document.querySelector('#valor').value = "Error: resultado inválido";
        else document.querySelector('#valor').value = resultado;
        
    } catch (error) {
        console.error("Error en el cálculo:", error);
        document.querySelector('#valor').value = "Error: cálculo";
    }
}



// ---------- Añadir un número al valor actual ----------
const regresar = (n) => {
    console.log("Regresar número");
    const valorActual = document.querySelector('#valor').value;
    const numeros = "0123456789.";
    const signos = "+-*/";

    // Permitir el signo menos al inicio
    if (n === '-' && valorActual.length === 0) {
        document.querySelector('#valor').value = valorActual + n;
    }
    // Si es un número, simplemente agregar
    else if (numeros.indexOf(n) > -1) {
        document.querySelector('#valor').value = valorActual + n;
    } 
    // Si es un signo, validar que no sea el último carácter
    else if (signos.indexOf(n) > -1) {
        // Verificar que el último carácter no sea un signo
        if (valorActual.length > 0) {
            const ultimoCaracter = valorActual[valorActual.length - 1];
            // No permitir más de un signo consecutivo
            if (signos.indexOf(ultimoCaracter) === -1) {
                document.querySelector('#valor').value = valorActual + n;
            }
        }
    }
}