//  **************************************************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion06-navegar-estructura-dom/45-juego-caja-numeros/js/caja.js  **********  
//  **************************************************************************************************************************  


window.onload = function () {
    var tablero = document.getElementById("tablero");
    var celdas = tablero.getElementsByTagName("td");

    //Creamos los listeners en forma dinámica
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].onclick = pulsaCelda;
    }
}


function pulsaCelda() {
    
    if (celdaVacia(this)) {
        alert("Pulsa un número.");  // Evita que se pulse la celda vacía
        return;
    }

    var renglon = this.id.charAt(5);  // Extrae el número de fila del ID de la celda (ej. "1" de "celda11")
    var columna = this.id.charAt(6);  // Extrae el número de columna del ID de la celda (ej. "1" de "celda11")

    // Verifica si la celda vacía está en la fila o columna adyacente.
    // Para cada dirección (arriba, abajo, izquierda, derecha), verifica si la celda vacía está cerca y si es posible intercambiar.

    // Verifica la celda arriba
    if (renglon > 1 && verificaFilaCeldaVacia(this, Number(renglon) - 1, columna)) return;

    // Verifica la celda abajo
    if (renglon < 4 && verificaFilaCeldaVacia(this, Number(renglon) + 1, columna)) return;

    // Verifica la celda izquierda
    if (columna > 1 && verificaColumnaCeldaVacia(this, renglon, Number(columna) - 1)) return;

    // Verifica la celda derecha
    if (columna < 4 && verificaColumnaCeldaVacia(this, renglon, Number(columna) + 1)) return;

    // Si no se puede mover, muestra una alerta
    alert("Pulsa un número a un lado de la celda vacía.");
}


function celdaVacia(celda) {
    var p = celda.firstChild;
    while (p.nodeName == "#text") { p = p.nextSibling; }
    if (p.innerHTML == "&nbsp;")
        return true;
    else
        return false;
}


function verificaFilaCeldaVacia(celda, renglonPrueba, columna) {
    var idCeldaPrueba = "celda" + renglonPrueba + columna;
    var celdaPrueba = document.getElementById(idCeldaPrueba);
    if (celdaVacia(celdaPrueba)) {
        intercambiaCeldas(celda, celdaPrueba);  // Intercambia las celdas si hay una vacía
        return true;  // Devuelve true si se intercambian las celdas
    }
    return false;  // Devuelve false si no se intercambian
}


function verificaColumnaCeldaVacia(celda, renglon, columnaPrueba) {
    var idCeldaPrueba = "celda" + renglon + columnaPrueba;
    var celdaPrueba = document.getElementById(idCeldaPrueba);
    if (celdaVacia(celdaPrueba)) {
        intercambiaCeldas(celda, celdaPrueba);
        return true;  // Devuelve true si se intercambian las celdas
    }
    return false;  // Devuelve false si no se intercambian
}


function intercambiaCeldas(celdaSel, celdaDes) {
    //celdasel = celda seleccionada
    //celdades = celda destino
    var numeroSel = celdaSel.firstChild;
    while (numeroSel.nodeName == "#text") {
        numeroSel = numeroSel.nextSibling;
    }
    var numeroDes = celdaDes.firstChild;
    while (numeroDes.nodeName == "#text") {
        numeroDes = numeroDes.nextSibling;
    }

    celdaSel.appendChild(numeroDes);
    celdaDes.appendChild(numeroSel);
}