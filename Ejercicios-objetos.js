/*Crea un archivo llamado objetos.js que contenga las siguientes líneas
*/

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {

    Nombre: "Juan",
    Apellido: "Garcia",
    edad: 33,
    altura: 1.80,
    eresDev: true
  };

//- Una variable que obtenga tu edad a partir del objeto anterior.

const obtenEdad= datosPersonales.edad;
console.log(obtenEdad);
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s.
const datos=[

    {Nombre:"Emanuel ", Apellido:"Benitez Baez", Edad:30,Altura:1.80, dev:true},
    {Nombre:"Teo ", Apellido:"Benitez Baez", Edad:33,Altura:1.70, dev:false},
    {Nombre:"Peter ", Apellido:"Benitez Baez", Edad:32,Altura:1.80, dev:false},
    
 ];
 console.log(datos);
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor.

const listaPorEdad= datos.sort((a,b)=>b.Edad -a.Edad);
console.log(listaPorEdad)