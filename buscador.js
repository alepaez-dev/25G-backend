// @ts-ignore

const nombre = process.argv[2];
const nombres = [
  "Andres", 
  "Andres de Anda", 
  "Christian",
  "Damian",
  "Dani",
  "Diego",
  "Dan",
  "Gustavo",
  "Ignacio",
  "Jorge",
  "Karla",
  "Lau",
  "Luis",
  "Mara",
  "Max",
  "Pao",
  "Roberto",
  "Samantha"
]
/**
 * Pasarle un nombre a nuestro proceso de node(recibir parametros desde consola), 
 * y verificar si ese nombre existe en nuestro arreglo de Nombres.
 * Si existe imprimir `Bienvenido nombre`. Sino, imprimir `Fuera de aqui`.
 * 
 * Esto tiene que estar en una funcion.
 */

/**
 * Find -> si encuentra te lo trae
 * Filters -> trae arreglo con los filtrados
 * Includes -> te regresa un boolea si lo encuentra, te regresa true or false
 */

const findName = (nombre) => {
  console.log("Estamos en la funcion findName con el nombnre =>", nombre);
  const existe = nombres.includes(nombre)
  if(existe) {
    console.log("Bienvenido")
    return
  } 
  console.log("Fuera de aqui")
}

findName(nombre)