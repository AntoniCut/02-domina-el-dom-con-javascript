// DOM
//Recuperamos la referecia a todos los nodos con etiqueta li
//en un arreglo o nodeList
var misLI = document.getElementsByTagName("li");
document.write("El numero de elementos de lista son: "+misLI.length+"<br>");

//Recuperamos un nodo con el identificador o "id" específico
var miDOM = document.getElementById("dom");
document.write("El numero de nodos de lista son: "+miDOM.childNodes.length+"<br>");
//Obtenemos el contenido del nodo
document.write("El contenido del nodo es: "+miDOM.innerHTML+"<br>");
//Obtenemos el tipo de nodo
document.write("El tipo de nodo es: "+miDOM.nodeType+"<br>");