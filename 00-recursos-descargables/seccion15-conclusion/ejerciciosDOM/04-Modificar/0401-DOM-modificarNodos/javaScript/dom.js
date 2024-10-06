// DOM
//Genera un arreglo o nodelist
var misLI = document.getElementsByTagName("li");
document.write("El numero de elementos de lista son: "+misLI.length+"<br>");

//Creamos todo el elemento de las UL
var miDOM = document.getElementById("dom");
document.write("El numero de nodos de lista son: "+miDOM.childNodes.length+"<br>");
document.write("El contenido del nodo es: "+miDOM.innerHTML+"<br>");
document.write("El tipo de nodo es: "+miDOM.nodeType+"<br>");

//Con el método setAttribute asignamos una clase a un nodo
miDOM.setAttribute("class","rojo");