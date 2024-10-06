/************
 * Variables
 * **********/
var palabras = ["gato","perro", "abeja", "perico", "tigre", "venado", "zorrillo", "ballena", "pantera", "oveja","cocodrilo","caballo","dinosaurio","escarabajo","rinoceronte","leopardo","jirafa","elefante","hipopotamo","unicornio","serpiente","gacela","mapache","chimpance","gorila"];
var game = {letras:26, p:"", buenas:0, malas:0, limite:5, w:1, id:""};
/************
 * Inicio
 * **********/
 window.onload = function() {
 	game.p = palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
 	generarLetras();
 	generarPalabra(game.p);
 	//
 }
 /************
 * Funciones
 * **********/
 function generarLetras() {
 	var b, a;
 	for (var i = 65; i < game.letras+65; i++) {
 		b = document.createElement("button");
 		b.innerText = String.fromCharCode(i);
 		a = document.createAttribute("id");
 		a.value = "b"+i;
 		b.setAttributeNode(a);
 		b.addEventListener("click",letra,false);
 		document.getElementById("letras").appendChild(b);
 	}
 }
 function generarPalabra(palabra) {
 	var b, a;
 	for (var i = 0; i < palabra.length; i++) {
 		b = document.createElement("input");
 		a = document.createAttribute("disabled");
 		a.value = "disabled";
 		b.setAttributeNode(a);
        //
        a = document.createAttribute("id");
        a.value = "c"+i;
        b.setAttributeNode(a);
        //
 		document.getElementById("palabra").appendChild(b);
 	}
 }
function letra(e) {
    var acierto = false;
    var n = this.id.replace("b","");
    n = parseInt(n);
    for (var i = 0; i < game.p.length; i++) {
        if (n==game.p[i].charCodeAt()) {
            document.getElementById("c"+i).value = game.p[i];
            game.buenas++;
            acierto=true;
        }
    }
    //Desactivar la letra
    this.setAttribute("disabled",false);
    //
    if (acierto==false) {
        game.malas++;
        document.getElementById("imagen").innerHTML = "<img src='imagenes/ahorcado"+game.malas+".png'/>";
    }
    if(game.buenas==game.p.length){
        gameOver(true);
    }
    if(game.malas==game.limite){
        gameOver(false);
    }
 }
 function gameOver(resultado) {
     // body...
 }