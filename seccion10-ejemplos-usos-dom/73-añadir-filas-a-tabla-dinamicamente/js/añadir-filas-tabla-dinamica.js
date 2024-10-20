//  ************************************************************************************************ 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********************** 
//  **********  /73-añadir-filas-a-tabla-dinamicamente/js/añadir-filas-tabla-dinamica.js  **********
//  ************************************************************************************************  


//  ----------  VARIABLES GLOBALES  ----------

let arrDatosRegistro = [];

//  -----  funcion de conversión de moneda  -----
const formato = new Intl.NumberFormat('es-mx', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
});


//  ----------  al cargar el documento  --------
document.addEventListener("DOMContentLoaded", () => {

    //  -----  documento cargado  -----
    console.log("El documento ha sido completamente cargado.");

    //  -----  Recuperar datos almacenados en localStorage  -----
    const datosGuardados = localStorage.getItem('registros');
    if (datosGuardados) {
        arrDatosRegistro = JSON.parse(datosGuardados); // Convertimos la cadena JSON en un objeto
        console.log("Datos cargados desde localStorage: ", arrDatosRegistro); // Verifica si los datos se están cargando
    }

    añadirFilasDinamicamente();
    añadirFilasDinamicamenteFormulario();
});



//  ----------  Añadir filas a una tabla dinamicamente  ----------
const añadirFilasDinamicamente = () => {

    const arrAlumnos = [
        { id: 1, nombre: 'Antonio Cutillas', calif: 10 },
        { id: 2, nombre: 'Manuel Benito', calif: 8 },
        { id: 3, nombre: 'Iker Carrion', calif: 7 },
        { id: 4, nombre: 'Juan Garcia', calif: 5 },
        { id: 5, nombre: 'Pedro Martinez', calif: 2 },
    ];

    const tabla = document.getElementById('alumnos');
    const registros = document.createElement('tbody');

    arrAlumnos.forEach(alumno => {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerText = alumno.id;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = alumno.nombre;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = alumno.calif;
        tr.appendChild(td);

        registros.appendChild(tr);
    });

    tabla.appendChild(registros);
};



//  ----------  Añadir filas a una tabla dinámicamente mediante un formulario  ----------
const añadirFilasDinamicamenteFormulario = () => {

    // Llamar a la función para mostrar los registros existentes  -----
    añadirRegistro(arrDatosRegistro);

    const btnAnnadir = document.getElementById('annadir');

    btnAnnadir.addEventListener('click', () => {

        //  -----  obtenemos los valores de los campos del formulario  -----
        const id = document.getElementById('id').value;
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;

        // Verificar que todos los campos tengan valores
        if (id && producto && cantidad && precio) {
            const registro = { id, producto, cantidad, precio };

            //  -----  Añadir el objeto al arreglo  -----
            arrDatosRegistro.push(registro);

            //  -----  Guardar en localStorage  -----
            localStorage.setItem('registros', JSON.stringify(arrDatosRegistro));

            //  -----  Actualizar la tabla con los nuevos datos  -----
            añadirRegistro(arrDatosRegistro);

            //  -----  Vaciar los campos del formulario  -----
            document.getElementById('id').value = '';
            document.getElementById('producto').value = '';
            document.getElementById('cantidad').value = '';
            document.getElementById('precio').value = '';

        } else alert("Por favor, completa todos los campos antes de añadir.");
                
    });
};



//  ----------  Añadir Registro de los arrDatosRegistro del formulario  ----------
const añadirRegistro = (arrDatosRegistro) => {

    const tabla = document.getElementById('salida');

    //  -----  Limpiar tabla previa, pero solo después de la fila de encabezados  -----
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }

    //  -----  variables de calculos  -----
    let totalCantidad = 0;
    let totalTotal = 0;
    let i = 0;


    //  -----  llenamos la tabla  -----
    arrDatosRegistro.forEach(fila => {

        const cantidad = parseInt(fila.cantidad);
        const precio = parseInt(fila.precio);
        const total = cantidad * precio;

        //  -----  fila  -----
        const registro = document.createElement('tr');

        //  -----  columna id  -----
        let tdId = document.createElement('td');
        tdId.innerText = fila.id;
        registro.appendChild(tdId);

        //  -----  columna producto  -----
        let tdProducto = document.createElement('td');
        tdProducto.innerText = fila.producto;
        registro.appendChild(tdProducto);

        //  -----  columna cantidad  -----
        let tdCantidad = document.createElement('td');
        tdCantidad.innerText = fila.cantidad;
        tdCantidad.style.textAlign = 'center';
        registro.appendChild(tdCantidad);

        //  -----  columna precio  -----
        let tdPrecio = document.createElement('td');
        tdPrecio.innerText = formato.format(fila.precio);
        tdPrecio.style.textAlign = 'right';
        registro.appendChild(tdPrecio);

        //  -----  columna total  -----
        let tdTotal = document.createElement('td');
        tdTotal.innerText = total;
        tdTotal.style.textAlign = 'right';
        registro.appendChild(tdTotal);


        //  -----  añadimos botón de eliminar  -----
        const btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = "Borrar";
        btnEliminar.setAttribute("id", i);

        //  -----  Evento del botón de eliminar  -----
        btnEliminar.addEventListener('click', (event) => {
            borrarRegistro(event.target.id); // Usar event.target.id para obtener el ID correcto
        });

        //  -----  columna botón eliminar  -----
        let tdBoton = document.createElement('td');
        tdBoton.appendChild(btnEliminar);
        registro.appendChild(tdBoton);


        tabla.appendChild(registro);

        //  -----  calculos
        totalCantidad += cantidad;
        totalTotal += total;
        i++;
    });


    
    //  -----  Crear fila de totales  -----
    const totalRow = document.createElement('tr');

    let tdEmpty = document.createElement('td');
    tdEmpty.colSpan = 2; // Para que ocupe las primeras dos columnas
    tdEmpty.innerText = 'Total Cantidades:';
    totalRow.appendChild(tdEmpty);

    let tdTotalCantidad = document.createElement('td');
    tdTotalCantidad.innerText = totalCantidad;
    totalRow.appendChild(tdTotalCantidad);

    let tdEmpty2 = document.createElement('td');
    totalRow.appendChild(tdEmpty2);

    let tdTotalTotal = document.createElement('td');
    tdTotalTotal.innerText = totalTotal;
    totalRow.appendChild(tdTotalTotal);

    tabla.appendChild(totalRow);

    //  -----  Vaciar campos  -----
    document.getElementById('id').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
}



//  ----------  eliminar registro  ----------
function borrarRegistro(id) {

    const mensaje = `¿ Desea borrar el producto ${arrDatosRegistro[id].producto} ?`;

    if (confirm(mensaje)) {
        
        //  -----  Eliminar el registro del array  -----
        arrDatosRegistro.splice(id, 1);

        //  -----  Actualizar localStorage  -----
        localStorage.setItem('registros', JSON.stringify(arrDatosRegistro));

        //  -----  Actualizar la tabla  -----
        añadirRegistro(arrDatosRegistro);
    }

}