function filtro() {
	var entrada, tabla, tr, td, i, txtValor;
	entrada = document.getElementById("entrada");
	filtro_txt = entrada.value.toUpperCase();
	tabla = document.getElementById("misLibros");
	tr = tabla.getElementsByTagName("tr");
	for (var i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if(td){
			txtValor = td.textContent || td.innerText;
			if (txtValor.toUpperCase().indexOf(filtro_txt) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}