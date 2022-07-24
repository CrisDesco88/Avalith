// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
  return x > y ?
    x :
    y > x ?
      y :
      x
  // if(x > y) {
  //   return x
  // } else if(y > x){
  //   return y
  // } else {
  //   return y
  // }
}

export function mayoriaDeEdad(edad) {
  // Tu código:
  return edad >= 18 ? "Allowed" : "Not allowed"
}

export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:
  switch (status) {
    case 1:
      return 'Online';
    case 2:
      return 'Away';
    case 3:
      return 'Offline';
    default:
      return 'Offline';
  }
}

export function saludo(idioma) {
  switch (idioma) {
    case 'aleman':
      return 'Guten Tag!';
    case 'ingles':
      return 'Hello!';
    case 'mandarin':
      return 'Ni Hao!';
    default:
      return 'Hola!';
  }
}

export function colors(color) {
  switch (color) {
    case "blue":
      return 'This is blue';
    case "red":
      return 'This is red';
    case "green":
      return 'This is green';
    case "orange":
      return 'This is orange';
    default:
      return 'Color not found';
  }

}

export function esDiezOCinco(numero) {
  if (numero === 5 || numero === 10) {
    return true
  } else {
    return false
  }
}

export function estaEnRango(numero) {
  // Tu código:
  if (numero < 21 || numero > 49) {
    return false
  } else {
    return true
  }
}

export function esEntero(numero) {
  // if(Number.isInteger(numero)){
  //   return true
  // } else {
  //   return false
  // }
  return Number.isInteger(numero) ? true : false;
}

export function fizzBuzz(numero) {
  if (numero % 3 === 0) {
    if (numero % 5 === 0) {
      return "fizzbuzz"
    }
    return "fizz"
  } else if (numero % 5 === 0) {
    return "buzz"
  } else {
    return numero
  }
}


export function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error"
  } else if (Math.sign(num1) === -1 || Math.sign(num2) === -1 || Math.sign(num3) === -1) {
    return "Hay negativos"
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1
  } else if (Math.sign(num1) === 1 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo"
  } else {
    return false
  }
}

export function esPrimo(numero) {
  // if (numero<=1) return false;
  //   for (let i = 2; i <= numero-1; i++)
  //       if (numero % i === 0) return false;
  //   return true;
  // La complejidad temporal de esta solución es O(n).
  // La complejidad espacial de esta solución es O(1).

  if (numero <= 1) return false;
  for (var i = 2; i <= Math.sqrt(numero); i++)
    if (numero % i === 0) return false;
  return true;
  // La complejidad temporal de esta solución es sqrt(n).
  // La complejidad espacial de esta solución es O(1).
}

export function esVerdadero(valor) {
  return valor ? "Soy verdadero" : "Soy falso"
}

export function tablaDelSeis() {
  let multipliers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let multiplicand = 6
  return multipliers.map(num => num * multiplicand)
}

export function tieneTresDigitos(numero) {
  return numero.toString().length === 3 ? true : false
}

export function doWhile(numero) {
  let result = numero;
  let i = 0;

  do {
    i = i + 1;
    result = result + 5;
    
  } while (i < 8);
  return result
}