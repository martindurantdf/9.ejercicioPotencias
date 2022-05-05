/*
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.

Si el exponente es 0 -> resultado es 1
Si el exponente es 1 -> resultado = base
Si el exponente > 1 -> calcular
No se permiten exponentes negativos
*/
let baseIngresada: number = Number(prompt("Ingrese número de base: "));
let exponenteIngresado: number = Number(prompt("Ingrese exponente: "));

function calcularPotencia(base: number, exponente: number): number {
  let potencia: number = 0;
  switch (exponente) {
    case 0:
      potencia = 1;
      break;
    case 1:
      potencia = base;
      break;
    default:
      potencia = base;
      for (let i: number = 2; i <= exponente; i++) {
        potencia *= base;
      }
      break;
  }
  return potencia;
}

if (exponenteIngresado < 0) {
  while (exponenteIngresado < 0) {
    console.log("El exponente debe ser mayor a 0");
    exponenteIngresado = Number(prompt("Ingrese exponente: "));
  }
}

console.log(
  "El resultado es: ",
  calcularPotencia(baseIngresada, exponenteIngresado)
);
