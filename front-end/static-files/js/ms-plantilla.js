/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Plantilla = {};

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}


/**
 * Función que descarga la info MS Plantilla al llamar a una de sus rutas
 * @param {string} ruta Ruta a descargar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.descargarRuta = async function (ruta, callBackFn) {
    let response = null

    // Intento conectar con el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + ruta
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro la info que se han descargado
    let datosDescargados = null
    if (response) {
        datosDescargados = await response.json()
        callBackFn(datosDescargados)
    }
}


/**
 * Función principal para mostrar los datos enviados por la ruta "home" de MS Plantilla
 */
Plantilla.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Home", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS Plantilla
 */
Plantilla.mostrarAcercaDe = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene los campos mensaje, autor, o email
    if (typeof datosDescargados.mensaje === "undefined" ||
        typeof datosDescargados.autor === "undefined" ||
        typeof datosDescargados.email === "undefined" ||
        typeof datosDescargados.fecha === "undefined"
    ) datosDescargados = this.datosDescargadosNulos

    const mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    Frontend.Article.actualizar("Plantilla Acerca de", mensajeAMostrar)
}


/**
 * Crea la cabecera para mostrar la info como tabla
 * @returns Cabecera de la tabla
 */
Plantilla.cabeceraTable = function () {
    return `<table class="listado">
        <thead>
        <th>Nombre</th>
        </thead>
        <tbody>
    `;
}

Plantilla.cabeceraTableTodos = function () {
    return `<table class="listado">
        <thead>
        <th>Nombre</th><th>Apellido</th><th>Equipo</th><th>Fecha de Nacimiento</th><th>Partidos Jugados</th><th>A&ntildeos participaciones JJOO</th>
        </thead>
        <tbody>
    `;
}

/**
 * Muestra la información de cada proyecto en un elemento TR con sus correspondientes TD
 * @param {proyecto} p Datos del proyecto a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el proyecto.
 */
Plantilla.cuerpoTr = function (p) {
    const d = p.data

    return `<tr title="${p.ref['@ref'].id}">
    <td>${d.nombre}</td>
    </tr>
    `;
}

Plantilla.cuerpoTodosDatosTr = function (p) {
    const d = p.data
    const fechaN = d.f_nacimiento;
    let msj = Plantilla.cabeceraTableTodos();

    msj += `<tr title="${p.ref['@ref'].id}">
    <td>${d.nombre}</td>
    <td>${d.apellido}</td>
    <td>${d.equipo}</td>
    <td>${fechaN.dia}/${fechaN.mes}/${fechaN.anio}</td>
    <td>${d.partidos_jugados}</td>
    <td>`
		for (var i = 0; i < d.anios_participaciones_jjoo.length; i++) {
			msj += '<li>'+d.anios_participaciones_jjoo[i]+'</li>';
		}
    msj += `</td></tr>
    `;
    msj += Plantilla.pieTable();
    return msj;
}

/**
 * Pie de la tabla en la que se muestran las personas
 * @returns Cadena con el pie de la tabla
 */
Plantilla.pieTable = function () {
    return `</tbody></table>`;
}

/**
 * Muestra un listado del nombre de los jugadores
 * @param {*} datosDescargados 
 */
Plantilla.mostrarJugadoresEquipos = function (datosDescargados) {   
    let msj = "";
    msj += Plantilla.cabeceraTable();
    datosDescargados.data.forEach(e => msj += Plantilla.cuerpoTr(e))
    msj += Plantilla.pieTable();

    Frontend.Article.actualizar("Plantilla Lista Jugadores/equipos", msj)
}

/**
 * Muestra todos los datos de los jugadores
 * @param {*} datosDescargados 
 */
Plantilla.mostrarJugadoresDatos = function (datosDescargados) {   
    let msj = "";
    datosDescargados.data.forEach(e => msj += Plantilla.cuerpoTodosDatosTr(e))

    Frontend.Article.actualizar("Plantilla Lista Datos Jugadores", msj)
}

/**
 * 
 * @param {*} datosDescargados 
 */
Plantilla.mostrarJugadoresAlfabetica = function (datosDescargados) {
    var datosOrdenados = sortNombre(datosDescargados.data);
    let msj = "";
    msj += Plantilla.cabeceraTable();
    datosOrdenados.forEach(e => msj += Plantilla.cuerpoTr(e))
    msj += Plantilla.pieTable();
    
    Frontend.Article.actualizar("Plantilla ordenar jugador alfab&eacuteticamente", msj)
}

let campo = 'nombre';

/**
 * 
 * @param {*} datosDescargados 
 */
Plantilla.mostrarJugadoresPorCampo = function (datosDescargados) {
    let msj = "";
    msj += `<select id="opcionCampo" name="Campo" onchange="cambiarOpcionCampo()">
    <option>-Seleccione campo-</option>
    <option value="nombre">Nombre</option>
    <option value="apellido">Apellido</option>
    <option value="equipo">Equipo</option>
    <option value="f_nacimiento">Fecha de Nacimiento</option>
    <option value="partidos_jugados">Partidos Jugados</option>
    <option value="anios_participaciones_jjoo">A&ntildeos participaciones JJOO</option>
    </select>`
    var datosOrdenados = sortNombre(datosDescargados.data);
    if(campo === 'nombre'){
        var datosOrdenados = sortNombre(datosDescargados.data);
    }
    if(campo === 'apellido'){
        var datosOrdenados = sortApellido(datosDescargados.data);
    }
    if(campo === 'equipo'){
        var datosOrdenados = sortEquipo(datosDescargados.data);
    }
    if(campo === 'partidos_jugados'){
        var datosOrdenados = sortPartidos(datosDescargados.data);
    }
    if(campo === 'f_nacimiento'){
        var datosOrdenados = sortNacimiento(datosDescargados.data);
    }
    if(campo === 'anios_participaciones_jjoo'){
        var datosOrdenados = sortJJOO(datosDescargados.data);
    }
    
    datosOrdenados.forEach(e => msj += Plantilla.cuerpoTodosDatosTr(e))
    Frontend.Article.actualizar("Plantilla mostrar datos por campo", msj)
}

function cambiarOpcionCampo(){
    campo = document.getElementById("opcionCampo").value;
    Plantilla.procesarJugadoresPorCampo();
}

function sortNombre(data) {
    return data.sort(function(a, b) {
  
        var nameA = a.data.nombre.toUpperCase();
        var nameB = b.data.nombre.toUpperCase();
        
        if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      
      });
}

function sortApellido(data) {
    return data.sort(function(a, b) {
  
        var nameA = a.data.apellido.toUpperCase();
        var nameB = b.data.apellido.toUpperCase();
        
        if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      
      });
}

function sortEquipo(data) {
    return data.sort(function(a, b) {
  
        var nameA = a.data.equipo.toUpperCase();
        var nameB = b.data.equipo.toUpperCase();
        
        if (nameA < nameB) {     return -1;   }      if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      
      });
}

function sortPartidos(data) {
    return data.sort(function(a, b) {

        return b.data.partidos_jugados - a.data.partidos_jugados;
      
      });
}

function sortNacimiento(data) {
    return data.sort(function(a, b) {

        if(a.data.f_nacimiento.anio < b.data.f_nacimiento.anio){
            return -1;
        }
        if(a.data.f_nacimiento.anio > b.data.f_nacimiento.anio){
            return 1;
        }
        if(a.data.f_nacimiento.mes < b.data.f_nacimiento.mes){
            return -1;
        }
        if(a.data.f_nacimiento.mes > b.data.f_nacimiento.mes){
            return 1;
        }
        if(a.data.f_nacimiento.dia < b.data.f_nacimiento.dia){
            return -1;
        }
        if(a.data.f_nacimiento.dia > b.data.f_nacimiento.dia){
            return 1;
        }
        return 0;
      
      });
}

function sortJJOO(data) {
    return data.sort(function(a, b) {
  
        return b.data.anios_participaciones_jjoo.length - a.data.anios_participaciones_jjoo.length;
      
      });
}

Plantilla.mostrarJugadoresDatosUno = function (datosDescargados) {   
    let msj = "";
    msj += `<select id="opcionNombre" name="Nombre" onchange="cambiarOpcionNombre()">
    <option>-Seleccione Jugador-</option>
    <option value="david">David</option>
    <option value="alejandro">Alejandro</option>
    <option value="jose">Jose</option>
    <option value="marc">Marc</option>
    <option value="quico">Quico</option>
    <option value="miquel">Miquel</option>
    <option value="enrique">Enrique</option>
    <option value="alvaro">&Aacutelvaro</option>
    <option value="xavi">Xavi</option>
    <option value="roc">Roc</option>
    </select>`
    var i = 0;
    if(campo === 'david'){
        i = 0;
    }
    if(campo === 'alejandro'){
        i = 1;
    }
    if(campo === 'jose'){
        i = 2;
    }
    if(campo === 'marc'){
        i = 3;
    }
    if(campo === 'quico'){
        i = 4;
    }
    if(campo === 'miquel'){
        i = 5;
    }
    if(campo === 'enrique'){
        i = 6;
    }
    if(campo === 'alvaro'){
        i = 7;
    }
    if(campo === 'xavi'){
        i = 8;
    }
    if(campo === 'roc'){
        i = 9;
    }
    msj += Plantilla.cuerpoTodosDatosTr(datosDescargados.data[i])
    Frontend.Article.actualizar("Plantilla Lista Datos Jugador", msj)
}

function cambiarOpcionNombre(){
    campo = document.getElementById("opcionNombre").value;
    Plantilla.procesarJugadoresDatosUno();
}

let valor = 0;
Plantilla.mostrarJugadoresDatosClick = function (datosDescargados) {   
    let msj = "";
    msj += `<button id="previo" onclick="anterior()">&laquo; Anterior</button>
    <button id="siguiente" onclick="siguiente()">Siguiente &raquo;</button>
    `
    msj += Plantilla.cuerpoTodosDatosTr(datosDescargados.data[valor])
    Frontend.Article.actualizar("Plantilla Lista Datos Jugador con un click", msj)
}

function siguiente(){
    if(valor != 9){
        valor = valor+1;
    }
    Plantilla.procesarJugadoresDatosClick();
}

function anterior(){
    if(valor != 0){
        valor = valor-1;
    }
    Plantilla.procesarJugadoresDatosClick();
}

/**
 * Función principal para responder al evento de elegir la opción "Home"
 */
Plantilla.procesarHome = function () {
    this.descargarRuta("/plantilla/", this.mostrarHome);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
Plantilla.procesarAcercaDe = function () {
    this.descargarRuta("/plantilla/acercade", this.mostrarAcercaDe);
}

/**
 * Función principal para responder al evento de elegir la opción "Listar nombres Jugadores/Equipos"
 */
Plantilla.procesarlistaJugadoresEquipos = function () {
    this.descargarRuta("/plantilla/listaJugadoresEquipos", this.mostrarJugadoresEquipos);
}

/**
 * Función principal para responder al evento de elegir la opción "Listar datos Jugadores/Equipos"
 */
Plantilla.procesarlistaDatosJugadores = function () {
    this.descargarRuta("/plantilla/listaJugadoresEquiposTodos", this.mostrarJugadoresDatos);
}

/**
 * 
 */
Plantilla.procesarJugadoresAlfabetica = function () {
    this.descargarRuta("/plantilla/listaJugadoresAlfabetica", this.mostrarJugadoresAlfabetica);
}

Plantilla.procesarJugadoresPorCampo = function () {
    this.descargarRuta("/plantilla/listaJugadoresPorCampo", this.mostrarJugadoresPorCampo);
}

Plantilla.procesarJugadoresDatosUno = function () {
    this.descargarRuta("/plantilla/listaJugadoresDatosUno", this.mostrarJugadoresDatosUno);
}

Plantilla.procesarJugadoresDatosClick = function () {
    this.descargarRuta("/plantilla/listaJugadoresDatosClick", this.mostrarJugadoresDatosClick);
}