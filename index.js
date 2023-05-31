/**
 * Node.
 * NO hay DOM.
 * No hay BOM.
 * 
 * Hay procesos.
 */

 console.log("Hola mundo!");

 /**
  * Construir una funcion que separe nombres largos de cortos.
  * Nombres largos son de 4 caracteres en adelante.
  * > 4
  * 
  * largos = ["Andres", ...]
  * cortos = ["Dan"]
  * Regresar, Imprimir
  */
 
//  const nombres = [
//    "Andres", // accumulador = 'Andres' + 
//    "Andres de Anda", // acumulador = "Andres Andres de Anda Christian, Damian"
//    "Christian",
//    "Damian",
//    "Dani",
//    "Diego",
//    "Dan",
//    "Gustavo",
//    "Ignacio",
//    "Jorge",
//    "Karla",
//    "Lau",
//    "Luis",
//    "Mara",
//    "Max",
//    "Pao",
//    "Roberto",
//    "Samantha"
//  ]
 
 /**
  * 
  * {
  *  "Andres": 6,
  *  "Andres de Anda": 10,
  *  "Christian": 6
  * }
  */
 
 /**
  * Metodos de arreglo.
  * Foreach
  * Filter
  * Reduce
  * For
  */
 
 // Spread operator.
 const nombresEstructurados = nombres.reduce((accumuladorActual, current, idx) => {
   return {
     ...accumuladorActual,
     [current]: current.length
   }
 }, {})
