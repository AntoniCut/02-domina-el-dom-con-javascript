window.onload = function(){
	//Obtener el modal
	var modal = document.getElementById("miModal");
	var modalImg = document.getElementById("img01");
	var modalTexto = document.getElementById("caption");
	var img = document.getElementById('miImg');
	var span = document.getElementsByClassName("close")[0];

	//Detectamos el click
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		modalTexto = this.alt;
	}

	span.onclick = function(){
		modal.style.display = "none";
	}

}