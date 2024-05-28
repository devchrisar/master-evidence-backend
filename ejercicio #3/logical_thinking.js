// # ejercicio 3
// ## Title: Logical Thinking
// ## Author: Christopher Arias
// ## Description: En este ejercicio se debe escribir una funcion que tome un numero entero como entrada y devuelva un array con todos los numeros enteros impares desde 1 hasta el numero de entrada.

// ## solucion:
/**
 *
 * @param {number} limite - Número entero que define el límite superior de la lista de números impares.
 * @returns {number[]} Lista de números impares.
 * @throws {Error} Si `limite` es menor que 1.
 */
function obtenerNumerosImpares(limite) {
  if (limite < 1) {
    throw new Error("El número de entrada debe ser mayor o igual a 1.");
  }

  const numerosImpares = [];
  for (let numero = 1; numero <= limite; numero += 2) {
    numerosImpares.push(numero);
  }
  return numerosImpares;
}

// Ejemplo de uso
try {
  const resultado = obtenerNumerosImpares(9);
  console.log(resultado); // Salida esperada: [1, 3, 5, 7, 9]
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// ## explicacion:
// La función `obtenerNumerosImpares` recibe un número entero `limite` como argumento y devuelve un array con todos los números enteros impares desde 1 hasta el número de entrada.
// * Se valida que el número de entrada sea mayor o igual a 1, de lo contrario se lanza un error.
// * Luego se crea un array `numerosImpares` vacío para almacenar los números impares.
// * Se itera desde 1 hasta el número de entrada incrementando de 2 en 2, de esta forma se obtienen los números impares.
// * Cada número impar se agrega al array `numerosImpares`.
// * Finalmente, se retorna el array con los números impares.
