// # ejercicio 2
// ## Title: Nomenclature
// ## Author: Christopher Arias
// ## Description: En este ejercicio se debe cambiar el nombre de las variables a uno mas descriptivo

// ## codigo proporcionado:
function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

console.log(f(1, 2, 3));
// output: 0.4121184852417566

// ## solucion:
function calcularSenoDeUnProducto(sum1, sum2, multiplicador) {
  let suma = sum1 + sum2;
  let producto = suma * multiplicador;
  let Resultado = Math.sin(producto);
  return Resultado;
}

console.log(calcularSenoDeUnProducto(1, 2, 3));
// output: 0.4121184852417566

// ## explicacion:
// el nombre de la funcion ahora es mas descriptivo, se puede entender que la funcion calcula el seno de un producto
// las variables tambien se cambiaron a nombres mas descriptivos, ahora se entiende que la variable "suma" es la suma de dos numeros
// la variable "producto" es el producto de la suma y el multiplicador
// y la variable "Resultado" es el resultado de la operacion Math.sin(producto)
