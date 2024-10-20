//  ************************************************************************************************ 
//  **********  /02-domina-el-dom-con-javascript/seccion10-ejemplos-usos-dom  ********************** 
//  **********  /73-añadir-filas-a-tabla-dinamicamente/js/añadir-filas-tabla-dinamica.js  **********
//  ************************************************************************************************  



//  ----------  al cargar el documento  --------
document.addEventListener("DOMContentLoaded", () => {

    console.log("El documento ha sido completamente cargado.");

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
    let td;

    //  -----  recorremos el arreglo y creamos los registros de la tabla  -----
    arrAlumnos.forEach(alumno => {

        const tr = document.createElement('tr');        //  creamos un tr

        td = document.createElement('td');              //  creamos un td
        td.innerText = alumno.id;                       //  añadimos el id del alumno al td
        tr.append(td);                                  //  añadimos el td al tr

        td = document.createElement('td');              //  creamos un td
        td.innerText = alumno.nombre;                   //  añadimos el id del alumno al td
        tr.append(td);                                  //  añadimos el td al tr

        td = document.createElement('td');              //  creamos un td
        td.innerText = alumno.calif;                    //  añadimos el id del alumno al td
        tr.append(td);                                  //  añadimos el td al tr

        registros.append(tr);
    });

    tabla.append(registros);

}



//  ----------  Añadir filas a una tabla dinámicamente mediante un formulario  ----------
const añadirFilasDinamicamenteFormulario = () => {

    const btnAnnadir = document.getElementById('annadir');
    const datos = [];

    btnAnnadir.addEventListener('click', () => {

        // Obtener los valores de los campos del formulario
        const id = document.getElementById('id').value;
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;
        const precio = document.getElementById('precio').value;

        //  -----  guardamos los datos en un objeto  -----
        const registroDatos = {
            id: id,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        };

        //  -----  añadimos el objeto a un arreglo  -----
        datos.push(registroDatos);

        // Llamar a la función para añadir el registro
        añadirRegistro(datos);
    });
}



//  ----------  Añadir Registro de los datos del formulario  ----------
const añadirRegistro = (datos) => {

    const tabla = document.getElementById('salida');
    const registro = document.createElement('tr');

    //  -----  numero de filas de la tabla  -----
    let numRegistros = tabla.getElementsByTagName('tr');


    //  -----  variables de calculos  -----
    let totalCantidad = 0;
    let totalTotal = 0;

    
    //  -----  vaciamos o limpiamos la tabla  -----
    for (let x = numRegistros - 1; x > 0; x--) {
        tabla.removeChild(registro[x]);
    }


    //  -----  llenar tabla  -----
    datos.forEach( fila => {

        const cantidad = parseInt(fila.cantidad);
        const precio = parseInt(fila.precio);
        const total = cantidad * precio;


        //  -----  Crear celdas y añadir valores a cada una  -----
        const tdId = document.createElement('td');
        tdId.innerText = fila.id;
        registro.append(tdId);

        const tdProducto = document.createElement('td');
        tdProducto.innerText = fila.producto;
        registro.append(tdProducto);

        const tdCantidad = document.createElement('td');
        tdCantidad.innerText = fila.cantidad;
        registro.append(tdCantidad);

        const tdPrecio = document.createElement('td');
        tdPrecio.innerText = fila.precio;
        registro.append(tdPrecio);

        const tdTotal = document.createElement('td');
        tdTotal.innerText = total;
        registro.append(tdTotal);

        // Añadir la fila a la tabla
        tabla.append(registro);

        totalCantidad += cantidad;
        totalTotal += total;


    });


    //  -----  Crear celdas y añadir valores a cada una  -----
    const tdId = document.createElement('td');
    tdId.innerText = "";
    registro.append(tdId);

    const tdTotal = document.createElement('td');
    tdTotal.innerText = "Total Cantidades: ";
    registro.append(tdTotal);

    const tdTotalCantidad = document.createElement('td');
    tdTotalCantidad.innerText = totalCantidad;
    registro.append(tdTotalCantidad);

    const tdTotalPrecio = document.createElement('td');
    tdTotalPrecio.innerText = "";
    registro.append(tdTotalPrecio);

    const tdTotalTotal = document.createElement('td');
    tdTotalTotal.innerText = totalTotal;
    registro.append(tdTotalTotal);
   

    // Añadir la fila a la tabla
    tabla.append(registro);

    //  -----  Vaciar campos  -----
    document.getElementById('id').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
}





