//  *************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion11-juego-del-ahorcado  **********  
//  **********  /74-juego-del-ahorcado/js/juego-ahorcado.js  ****************************  
//  *************************************************************************************  


//  ----------  VARIABLES GLOBALES  ----------
const palabras = [
    "gato", "perro", "abeja", "perico", "tigre", "venado", "zorrillo", "ballena", "pantera", "oveja",
    "cocodrilo", "caballo", "dinosaurio", "escarabajo", "rinoceronte", "leopardo", "jirafa", "elefante",
    "hipopotamo", "unicornio", "serpiente", "gacela", "mapache", "chimpance", "gorila"
];

const game = { letras: 26, palabra: "", buenas: 0, malas: 0, limite: 5, widthBarra: 1, idReloj: "" };



//  ----------  al cargar el documento  --------
document.addEventListener("DOMContentLoaded", () => {

    //  -----  documento cargado  -----
    console.log("El documento ha sido completamente cargado.");

    //  -----  obtenemos una palabra aleatoriamente  -----
    game.palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();

    console.log(game.palabra);
    console.log(game);

    generarLetras();
    generarPalabra(game.palabra);

    //  -----  Activar la Barra de Progreso  -----
    game.idReloj = setInterval(cuadro, 1000);
});



//  -----  Generamos la barra de progreso  -----
const cuadro = () => {

    if (game.widthBarra >= 100) gameOver(false);
    else {
        game.widthBarra += 2;
        const barraProgreso = document.getElementById("barra");
        barraProgreso.style.width = game.widthBarra + "%";
     }
}



//  ----------  generamos las letras del teclado  ----------
const generarLetras = () => {

    for (var i = 65; i < game.letras + 65; i++) { //  65 = código ASCII de la A

        const boton = document.createElement("button");
        boton.innerText = String.fromCharCode(i);  // Convertir el código ASCII a letra

        const id = document.createAttribute("id");
        id.value = "boton" + i;  // Crear un id único para cada botón

        boton.setAttributeNode(id);
        boton.addEventListener("click", letra);  // Añadir el evento de clic al botón

        const contenedorLetras = document.getElementById("letras");  // Contenedor de las letras
        contenedorLetras.appendChild(boton);  // Agregar el botón al contenedor
    }
}



//  ----------  generamos las casillas de la palabra a acertar  ----------
const generarPalabra = (palabra) => {

    for (var i = 0; i < palabra.length; i++) {

        //  -----  creamos los input y los ponemos en disabled  -----
        const input = document.createElement("input");

        const atrDisabled = document.createAttribute("disabled");
        atrDisabled.value = "disabled";

        input.setAttributeNode(atrDisabled);

        //  -----  creamos el id  -----
        const id = document.createAttribute("id");
        id.value = "c" + i;
        input.setAttributeNode(id);
        //
        const palabra = document.getElementById("palabra");
        palabra.appendChild(input);
    }
}



//  ----------  dibujar la letra  ---------- 
const letra = (e) => {

    let acierto = false;
    
    //  -----  recuperamos el código ASCII que viene en el id del botón y lo convertimos en un entero  -----
    let codBoton = e.target.id.replace("boton", "");
    codBoton = parseInt(codBoton);

    //  -----  comparamos el código con cada una de las letras de nuestra palabra  -----
    for (let i = 0; i < game.palabra.length; i++) {

        //  -----  comparamos letra a letra y si coinciden...  -----
        if (codBoton == game.palabra[i].charCodeAt()) {
            document.getElementById("c" + i).value = game.palabra[i];
            game.buenas++;
            acierto = true;
        }
    }

    //  -----  ocultamos las letras pulsadas  -----
    e.target.style.display = 'none';

    // -----  Si No Acertó  -----
    if (!acierto) {
        game.malas++;
        const imagen = document.getElementById("imagen");
        imagen.innerHTML = "<img src='imagenes/ahorcado" + game.malas + ".png'/>";
    }

    //  -----  Verificar si Ha Ganado  -----
    if (game.buenas == game.palabra.length) gameOver(true);
    

    //  -----  Verificar si Ha Perdido  -----
    if (game.malas == game.limite) gameOver(false);
    
}



//  -----  Fin del Juego  -----
const gameOver = (acierto) => {

    //  -----  Detener el setInterval  -----
    clearInterval(game.idReloj);

    const resultado = document.getElementById("resultado");
    const btnVolver = document.getElementById("volver");
    const teclado = document.getElementById('letras');
    
    if (acierto){
        resultado.innerText = `La palabra es ${game.palabra}`;  
        alert(`Has Ganado 😊 - La Palabra es ${game.palabra}`);
    } 
    
    else {
        resultado.innerText = `La palabra es ${game.palabra}`;
        alert(`Has Perdido 😊 - La Palabra es ${game.palabra}`);
    } 

    //  -----  ocultamos el teclado  -----
    teclado.style.display = 'none';

    //  -----  activamos el botón de volver a jugar  -----
    btnVolver.style.display = 'block';

    btnVolver.addEventListener('click', (e) => {
        location.reload();
    });

    const barraProgreso = document.getElementById('progreso');
    barraProgreso.style.display = 'none';
    
}