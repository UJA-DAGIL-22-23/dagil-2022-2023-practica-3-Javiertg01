[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hneiFYl3)
# *Plantilla Práctica Microservicios*: Práctica 3

## Datos personales
* Javier Torres Gálvez
* jtg00023@red.ujaen.es

## URL Tablero Trello
https://trello.com/b/R17z9WeZ/desarrollo-%C3%A1gil-pr%C3%A1ctica-3

## Fauna
![Home](./assets/img/fauna_home.png)
*Pantalla home de la base de datos* &#8593;
![Base](./assets/img/fauna_base.png)
*Pantalla de inicio de la base de datos* &#8593;
![Coleccion](./assets/img/fauna_coleccion.png)
*Pantalla de la colección de la base de datos* &#8593;

## Documentos de la base de datos
1.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359074367807685209"),
  "ts": 1678724160980000,
  "data": {
    "nombre": "David",
    "apellido": "Alegre",
    "equipo": "Real club de polo",
    "anios_participaciones_jjoo": [
      2020,
      2016,
      2012
    ],
    "partidos_jugados": 281,
    "f_nacimiento": {
      "dia": 16,
      "mes": 7,
      "anio": 1994
    }
  }
}
```
2.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359074595171467866"),
  "ts": 1678725629470000,
  "data": {
    "nombre": "Alejandro",
    "apellido": "Alonso",
    "equipo": "RS Tenis",
    "anios_participaciones_jjoo": [
      2020
    ],
    "partidos_jugados": 9,
    "f_nacimiento": {
      "dia": 9,
      "mes": 11,
      "anio": 2001
    }
  }
}
```
3.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359099268900848218"),
  "ts": 1678725685950000,
  "data": {
    "nombre": "Jose",
    "apellido": "Basterra",
    "equipo": "Club de campo",
    "anios_participaciones_jjoo": [
      2020
    ],
    "partidos_jugados": 8,
    "f_nacimiento": {
      "dia": 7,
      "mes": 1,
      "anio": 1999
    }
  }
}
```
4.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359099351233987162"),
  "ts": 1678725718930000,
  "data": {
    "nombre": "Marc",
    "apellido": "Bolto",
    "equipo": "Atletic De Terrassa",
    "anios_participaciones_jjoo": [
      2020,
      2016
    ],
    "partidos_jugados": 80,
    "f_nacimiento": {
      "dia": 28,
      "mes": 10,
      "anio": 1990
    }
  }
}
```
5.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359100075879694937"),
  "ts": 1678725739242000,
  "data": {
    "nombre": "Quico",
    "apellido": "Cortés",
    "equipo": "Club de Egara",
    "anios_participaciones_jjoo": [
      2020,
      2016,
      2012,
      2008
    ],
    "partidos_jugados": 310,
    "f_nacimiento": {
      "dia": 11,
      "mes": 12,
      "anio": 1987
    }
  }
}
```
6.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359100284364915289"),
  "ts": 1678725800740000,
  "data": {
    "nombre": "Miquel",
    "apellido": "Delas",
    "equipo": "FC Barcelona",
    "anios_participaciones_jjoo": [
      2020,
      2016,
      2012
    ],
    "partidos_jugados": 264,
    "f_nacimiento": {
      "dia": 3,
      "mes": 4,
      "anio": 1993
    }
  }
}
```
7.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359100406457959002"),
  "ts": 1678725820980000,
  "data": {
    "nombre": "Enrique",
    "apellido": "González de Castejon",
    "equipo": "Club de campo",
    "anios_participaciones_jjoo": [
      2020,
      2016
    ],
    "partidos_jugados": 119,
    "f_nacimiento": {
      "dia": 30,
      "mes": 5,
      "anio": 1997
    }
  }
}
```
8.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359100472573821530"),
  "ts": 1678725951070000,
  "data": {
    "nombre": "Alvaro",
    "apellido": "Iglesias",
    "equipo": "Club de campo",
    "anios_participaciones_jjoo": [
      2020,
      2016
    ],
    "partidos_jugados": 147,
    "f_nacimiento": {
      "dia": 25,
      "mes": 1,
      "anio": 1991
    }
  }
}
```
9.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359100563789447770"),
  "ts": 1678726134180000,
  "data": {
    "nombre": "Xavi",
    "apellido": "Lleonart",
    "equipo": "Real club de Polo",
    "anios_participaciones_jjoo": [
      2020,
      2016,
      2012
    ],
    "partidos_jugados": 208,
    "f_nacimiento": {
      "dia": 20,
      "mes": 2,
      "anio": 1992
    }
  }
}
```
10.
```
{
  "ref": Ref(Collection("Hockey_sobre_hierba"), "359100875731370585"),
  "ts": 1678726151320000,
  "data": {
    "nombre": "Roc",
    "apellido": "Oliva",
    "equipo": "Real club de Polo",
    "anios_participaciones_jjoo": [
      2020,
      2016
    ],
    "partidos_jugados": 175,
    "f_nacimiento": {
      "dia": 2,
      "mes": 11,
      "anio": 1995
    }
  }
}
```
## Incremento 1
Funcionalidades a implementar:<br />
**Inicio:**
![Incremento1Inicio](./assets/img/Trello_inicio_incremento1.png)
**Final:**
![Incremento1Final](./assets/img/Trello_fin_incremento1.png)
- **Boton "Acerca De":** Al pulsar el botón de "Acerca de" se desplegará la información del autor de la aplicación
![AcercaDe](./assets/img/Acerca_de.png)
- **Listado de nombres de jugadores:** Al pulsar el botón de "Listar nombres jugadores" se desplegará una lista con solo los nombres de los jugadores
![ListaNombres](./assets/img/Lista_nombres.png)
- **Listado de datos de jugadores:** Al pulsar el botón de "Listar datos jugadores" se desplegará una lista con todos los datos de los jugadores (nombre, apellido, equipo, años de participación en los JJOO, fecha de nacimiento y partidos jugados en la selección)
![ListaDatos](./assets/img/Lista_datos.png)

## Incremento 2
Funcionalidades a implementar:<br />
**Inicio:**
![Incremento2Inicio](./assets/img/Trello_inicio_incremento2.png)
**Final:**
![Incremento2Final](./assets/img/Trello_fin_incremento2.png)
- **Listado de nombres de jugadores alfabéticamente:** Al pulsar el botón de "Listar nombres jugadores alfabéticamente" se desplegará una lista con solo los nombres de los jugadores ordenados alfabéticamente
![ListaNombresAlfabeticamente](./assets/img/Alfabeticamente.png)
- **Listado de datos de jugadores ordenados por campo:** Al pulsar el botón de "Listar datos por campo" se desplegará una lista con los datos de todos los jugadores, que podremos ordenar por cualquiera de los campos mediante un selector
![ListaDatosPorCampo](./assets/img/por_campo.png)
- **Listado de datos de un jugador determinado:** Al pulsar el botón de "Listar datos de un jugador" se desplegará una tabla con los datos de el jugador que seleccionemos
![ListaDatosJugador](./assets/img/Datos_jugador.png)
- **Listado de datos de un jugador determinado con un solo click:** Al pulsar el botón de "Listar datos de un jugador con un click" se desplegará una tabla con los datos de el jugador que seleccionemos, pudiendo clickar en _siguiente_ o _anterior_ para cambiar de jugador
![ListaDatosJugadorClick](./assets/img/Datos_un_click.png)

## Incremento 3
Funcionalidades a implementar:<br />
**Inicio:**
![Incremento3Inicio](./assets/img/Trello_inicio_incremento3.png)
**Final:**
![Incremento3Final](./assets/img/Trello_fin_incremento3.png)
- **Listado de datos de jugadores filtrados por el nombre:** Al pulsar el botón de "Listar datos con filtro" se desplegará una lista con los datos de los jugadores, y una caja de texto en la que podemos meter una cadena de palabras, que al pulsar el botón _Filtrar Nombre_ se aplicará
![ListaNombresAlfabeticamente](./assets/img/filtroNombre.png)
- **Listado de datos de jugadores filtrados por 3 campos diferentes al nombre:** Al pulsar el botón de "Listar datos con filtro diferentes campos" se desplegará una lista con los datos de los jugadores, y 3 cajas de texto que nos permitirán filtrar por Apellido, equipo y fecha de nacimiento (mayores a la fecha introducida)
![ListaDatosPorCampo](./assets/img/filtroCampos.png)