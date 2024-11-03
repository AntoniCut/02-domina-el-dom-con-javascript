//  *************************************************************************************  
//  **********  /02-domina-el-dom-con-javascript/seccion11-juego-del-ahorcado  **********  
//  **********  /75-juego-sopa-de-letras/js/juego-sopa-letras.js  ***********************  
//  *************************************************************************************  



//  ******************************  
//  ****  VARIABLES GLOBALES  ****  
//  ******************************  

//  -----  Lista de palabras posibles para el juego  -----
const palabras = [
    "tortuga", "gato", "perro", "abeja", "perico", "tigre", "venado", "zorrillo",
    "ballena", "pantera", "oveja", "cocodrilo", "caballo", "dinosaurio", "escarabajo",
    "rinoceronte", "leopardo", "jirafa", "elefante", "hipopotamo", "unicornio", "serpiente",
    "gacela", "mapache", "chimpance", "gorila", "burro", "zebra", "leon", "hormiga",
    "manati", "orangutan", "mosquito", "gallina", "conejo", "koala", "tecolote"
];

//  -----  Objeto que contiene la configuración del juego  -----
const game = { columnas: 15, filas: 15, letras: [], numPalabras: 25, palabras: [], seleccionadas: [], widthBarra: 1, idReloj: "" };



//  **************************  
//  ****  INICIALIZACIÓN  ****  
//  **************************  

//  -----  Al cargar el documento, ejecuta el código del juego  -----
document.addEventListener("DOMContentLoaded", () => {

    console.log("El documento ha sido completamente cargado."); // Confirma carga en consola

    // Llama a funciones para construir el juego
    crearTablero();
    anexarPalabras();
    completarTablero();
    listarPalabras();
    encabezado();

    //  -----  Activar la Barra de Progreso  -----
    game.idReloj = setInterval(cuadro, 1000);
});



//  *****************************  
//  ****  BARRA DE PROGRESO  ****  
//  *****************************  

//  -----  Generamos la barra de progreso que nos da la duracioón del juego  -----
const cuadro = () => {

    if (game.widthBarra >= 100) gameOver(false);
    else {
        game.widthBarra += 1;
        const barraProgreso = document.getElementById("barra");
        barraProgreso.style.width = game.widthBarra + "%";
    }
}


//  ********************************  
//  ****  CREACIÓN DEL TABLERO  ****  
//  ********************************  


// Función que construye el tablero de juego
const crearTablero = () => {

    let consecutivo = 0; // Lleva el conteo de celdas creadas

    //  -----  Itera por cada fila del tablero  -----
    for (let filas = 0; filas < game.filas; filas++) {

        //  -----  Itera por cada columna de la fila  -----
        for (let columnas = 0; columnas < game.columnas; columnas++) {

            //  -----  Crea una celda y establece sus propiedades  -----
            const celda = document.createElement("div");
            celda.innerText = "*";                      // Coloca un asterisco como contenido inicial
            celda.id = `celda-${columnas}-${filas}`;    // Asigna un ID único a la celda
            celda.classList.add("celda");               // Añade la clase "celda" para estilos

            //  -----  Añade un evento click a la celda para identificar letras  -----
            celda.addEventListener("click", (e) => {

                const [_, col, fila] = e.target.id.split("-").map(Number);  // Obtiene posición
                const idx = fila * game.columnas + col;                     // Calcula índice de la celda en el array de letras
                const verifica = { ok: 0, palabra: "" };                    // Inicializa verificación de palabra

                game.seleccionadas[idx] = true;             // Marca la celda como seleccionada

                game.palabras.forEach(w => {                // Revisa cada palabra para ver si contiene la celda

                    if (w.posicion.includes(idx)) {
                        verifica.ok++;
                        verifica.palabra = w.palabra;
                    }
                });

                //  -----  Cambia el color según si la celda pertenece a una palabra  -----
                e.target.style.backgroundColor = verifica.ok ? "yellow" : "pink";

                verificarPalabras();
            });

            //  -----  Agrega la celda al DOM y al array de letras  -----
            document.getElementById("tablero").appendChild(celda);
            game.letras.push({ filas, columnas, consecutivo, letra: "*" });
            consecutivo++;
        }
    }

    console.log(game.letras); // Muestra las celdas en consola para verificación
}



//  ****  VERIFICAR PALABRAS  ****  

//  ----------  Verificamos las palabras si han sido encontradas  ----------
const verificarPalabras = () => {

    game.palabras.forEach(w => {

        //  -----  Verifica si todas las celdas de la palabra han sido seleccionadas  -----
        const encontrada = w.posicion.every(idx => game.seleccionadas[idx]);

        //  -----  Solo marca si aún no está encontrada  -----
        if (encontrada && !w.encontrada) {
            const palabraElem = document.getElementById(w.palabra);

            //  -----  Cambia el estilo del listado de palabras  -----
            palabraElem.style.color = "red";
            palabraElem.style.textDecoration = "line-through";

            //  -----  Tacha las letras de la palabra en el tablero  -----
            w.posicion.forEach(idx => {

                const { columnas, filas } = game.letras[idx];
                const celda = document.getElementById(`celda-${columnas}-${filas}`);
                celda.style.color = "yellow";                      // Cambia el color para destacar la celda
                //celda.style.textDecoration = "line-through";    // Tacha la letra en el tablero
                celda.style.backgroundColor = 'green';
            });

            //  -----  Establece la palabra como encontrada  -----
            w.encontrada = true;

            //  -----  Esconde la palabra del listado después de un tiempo  -----
            setTimeout(() => {
                palabraElem.style.display = 'none';
            }, 2000);
        }
    });
    encabezado();
}



//  **************************************  
//  ****  ANEXAR PALABRAS AL TABLERO  ****  
//  **************************************  

//  -----  Función para añadir palabras aleatorias al tablero  -----
const anexarPalabras = () => {

    const palabrasAleatorias = palabras.sort(() => Math.random() - 0.5);    // Aleatoriza el array

    //  -----  Añade palabras según el número de palabras permitido en el juego  -----
    for (let i = 0; i < game.numPalabras; i++) {

        const palabra = palabrasAleatorias[i].toUpperCase();    // Convierte a mayúsculas
        const posicion = anadirPalabra(palabra);                // Intenta añadir la palabra al tablero

        //  -----  Si la palabra fue añadida exitosamente, se guarda en el array  -----
        if (posicion) game.palabras.push({ palabra, posicion, encontrada: false });

    }

    console.log(game.palabras); // Muestra las palabras seleccionadas en consola
}



//  ****  FUNCIÓN PARA AÑADIR PALABRA EN X O Y  ****  

//  -----  Función que intenta añadir una palabra en el tablero  -----
const anadirPalabra = (palabra) => {

    let palabraArray = palabra.split("");                                           // Divide la palabra en un array de letras
    palabraArray = Math.random() > 0.5 ? palabraArray : palabraArray.reverse();     // La invierte aleatoriamente

    let ok = false;     // Indica si la palabra fue colocada exitosamente
    let tope = 300;     // Límite de intentos para colocar la palabra

    while (!ok && tope > 0) {

        tope--;
        const pos = { col: 0, row: 0 };         // Objeto de posición inicial
        const dir = Math.random() > 0.5;        // Escoge dirección aleatoria (horizontal o vertical)

        if (dir && palabraArray.length <= game.columnas) {

            //  -----  Intenta colocar palabra horizontalmente  -----
            pos.col = coordenada(palabraArray.length, game.columnas);
            pos.row = Math.floor(Math.random() * game.filas);
            ok = verificaPalabraX(pos, palabraArray);

        } else if (!dir && palabraArray.length <= game.filas) {

            //  -----  Intenta colocar palabra verticalmente  -----
            pos.row = coordenada(palabraArray.length, game.filas);
            pos.col = Math.floor(Math.random() * game.columnas);
            ok = verificaPalabraY(pos, palabraArray);
        }
    }
    return ok;
}



//  ****  COORDENADA PARA COLOCAR PALABRA  ****  

//  -----  Genera una coordenada aleatoria válida para la longitud de la palabra  -----
const coordenada = (longitudPalabra, c) => Math.floor(Math.random() * (c - longitudPalabra + 1));




//  ****  VERIFICAR POSICIÓN HORIZONTAL  ****  

const verificaPalabraX = (pos, palabraArray) => {

    const inicio = pos.row * game.columnas + pos.col;   // Índice de inicio en la matriz
    const posicionArray = [];                           // Array para almacenar la posición de cada letra

    //  -----  Verifica si el espacio está disponible  -----
    const esEspacioLibre = palabraArray.every((_, i) => game.letras[inicio + i].letra === "*");

    if (esEspacioLibre) {

        //  -----  Coloca cada letra  -----
        palabraArray.forEach((letra, i) => {

            const idx = inicio + i;
            const celda = game.letras[idx];
            celda.letra = letra;
            document.getElementById(`celda-${celda.columnas}-${celda.filas}`).innerText = letra;
            posicionArray.push(idx);

        });

        return posicionArray;   //  -----  Devuelve posiciones ocupadas  -----
    }

    return false;
}



//  ****  VERIFICAR POSICIÓN VERTICAL  ****  

const verificaPalabraY = (pos, palabraArray) => {

    const inicio = pos.row * game.columnas + pos.col;   // Índice de inicio en la matriz
    const posicionArray = [];                           // Array para almacenar la posición de cada letra

    //  -----  Verifica si el espacio está disponible  -----
    const esEspacioLibre = palabraArray.every((_, i) => game.letras[inicio + i * game.columnas].letra === "*");

    if (esEspacioLibre) {

        //  -----  Coloca cada letra  -----
        palabraArray.forEach((letra, i) => {

            const idx = inicio + i * game.columnas;
            const celda = game.letras[idx];
            celda.letra = letra;
            document.getElementById(`celda-${celda.columnas}-${celda.filas}`).innerText = letra;
            posicionArray.push(idx);

        });
        return posicionArray;   //  -----  Devuelve posiciones ocupadas  -----
    }

    return false;
}



//  ********************************  
//  ****  COMPLETAR EL TABLERO  ****  
//  ********************************  

//  -----  Completa las celdas vacías con letras aleatorias  -----
const completarTablero = () => {

    game.letras.forEach((celda) => {

        //  -----  Si la celda está vacía, genera una letra  -----
        if (celda.letra === "*") {
            celda.letra = letraAleatoria();
            document.getElementById(`celda-${celda.columnas}-${celda.filas}`).innerText = celda.letra;
        }
    })
}



//  ****  LETRA ALEATORIA  ****  

//  -----  Genera una letra aleatoria (A-Z) usando el código ASCII  -----
const letraAleatoria = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));



//  ***************************************  
//  ****  LISTAR PALABRAS PARA BUSCAR  ****  
//  ***************************************  

//  -----  Lista en el DOM las palabras que el usuario debe encontrar  -----

const listarPalabras = () => {

    game.palabras.forEach(palabra => {

        const d = document.createElement("div");                // Crea un div para cada palabra
        d.innerText = palabra.palabra;                          // Muestra la palabra en el div
        d.id = palabra.palabra;                                 // Asigna un id único con el nombre de la palabra
        d.classList.add("palabra");                             // Añade la clase 'palabra' para aplicar estilos
        document.getElementById("palabras").appendChild(d);     // Añade el div al contenedor de palabras
    });
}



//  ********************************  
//  ****  ENCABEZADO DEL JUEGO  ****  
//  ********************************  

const encabezado = () => {
    
    //  -----  Calcula las palabras encontradas  -----
    game.aciertos = game.palabras.filter(w => w.encontrada).length;
    
    const faltan = game.palabras.length - game.aciertos;

    //  -----  Si no quedan palabras faltantes, muestra mensaje de victoria  -----
    if (faltan === 0) {
        
        document.getElementById("mensaje").innerText = "¡Felicidades, Has Ganado!";
        alert("¡Felicidades, Has Ganado!");
        gameOver(true);  // Llama a gameOver con una indicación de que el jugador ganó
    } else {
        document.getElementById("mensaje").innerText = `Encuentra las siguientes ${faltan} palabras`;
    }
}



//  ****  FIN DEL JUEGO  ****  

const gameOver = (ganado) => {
    // Detiene el setInterval si está en uso (temporizador, etc.)
    clearInterval(game.idReloj);

    // Muestra un mensaje final según el estado del juego
    if (ganado) {
        document.getElementById("mensaje").innerText = "¡Victoria! Has encontrado todas las palabras.";
    } else {
        alert("Has Perdido");
    }

    // Reinicia la partida después de unos segundos
    setTimeout(() => {
        location.reload();
    }, 2000); // Puedes ajustar el tiempo de espera
}
