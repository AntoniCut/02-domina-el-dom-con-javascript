window.onload = function() {
  var tablero = document.getElementById("tablero"); 
  var celdas = tablero.getElementsByTagName("td");
  //Creamos los listenes en forma dinamica
  for (var i=0; i<celdas.length; i++) {
    celdas[i].onclick = pulsaCelda;
  }
}

function pulsaCelda() {
  if (celdaVacia(this)) {
    // Pulso la celda vacia
    alert("Pulsa un número.");
    return;
  }

  var renglon = this.id.charAt(5);
  var columna = this.id.charAt(6);

  // Verifica Arriba
  if (renglon > 1) {
    var renglonPrueba = Number(renglon) - 1;
    var idCeldaPrueba = "celda" + renglonPrueba + columna;
    var celdaPrueba = document.getElementById(idCeldaPrueba);
    if (celdaVacia(celdaPrueba)) {
      intercambiaCeldas(this, celdaPrueba);
      return;
    }
  }

  // Verifica Abajo
  if (renglon < 4) {
    var renglonPrueba = Number(renglon) + 1;
    var idCeldaPrueba = "celda" + renglonPrueba + columna;
    var celdaPrueba = document.getElementById(idCeldaPrueba);
    if (celdaVacia(celdaPrueba)) {
      intercambiaCeldas(this, celdaPrueba);
      return;
    }
  }

  // Verifica izquierda
  if (columna > 1) {
    var columnaPrueba = Number(columna) - 1;
    var idCeldaPrueba = "celda" + renglon + columnaPrueba;
    var celdaPrueba = document.getElementById(idCeldaPrueba);
    if (celdaVacia(celdaPrueba)) {
      intercambiaCeldas(this, celdaPrueba);
      return;
    }			
  }

  // Verifica derecha
  if (columna < 4) {
    var columnaPrueba = Number(columna) + 1;
    var idCeldaPrueba = "celda" + renglon + columnaPrueba;
    var celdaPrueba = document.getElementById(idCeldaPrueba);
    if (celdaVacia(celdaPrueba)) {
      intercambiaCeldas(this, celdaPrueba);
      return;
    }
  }
  //Error
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

function intercambiaCeldas(celdaSel, celdaDes) {
  //celdasel = celda seleccionada
  //celdades = celda destino
  numeroSel = celdaSel.firstChild;
  while (numeroSel.nodeName == "#text") {
    numeroSel = numeroSel.nextSibling;
  }
  numeroDes = celdaDes.firstChild;
  while (numeroDes.nodeName == "#text") {
    numeroDes = numeroDes.nextSibling;
  }

  celdaSel.appendChild(numeroDes);
  celdaDes.appendChild(numeroSel);
}