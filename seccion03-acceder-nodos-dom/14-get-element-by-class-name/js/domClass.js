//EL evento onload me notifica cuando las etiquetas HTML han sido creadas
window.onload = function(){
	//Recuperamos en un arreglo los elementos o nodos que tienen la clase css "rojo"
	//DOM3
	var rojos = document.getElementsByClassName("rojo");
	console.log("Elementos que tienen la clase 'rojo' son: "+rojos.length);
	//Desplemaos e pantalla los contenidos de los elementos con la clase "rojo"
	for(i=0; i<rojos.length; i++){
		console.log("El contenido es :"+rojos[i].innerHTML);	
	}
}