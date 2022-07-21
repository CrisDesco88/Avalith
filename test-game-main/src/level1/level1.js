
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:
  return str.toString();
}

export function suma(x, y) {
  // Tu código:

  return x + y;
}

export function resta(x, y) {
  // Tu código:
  let resta = x - y;
  return resta;
}

export function multiplica(x, y) {
  // Tu código:


  return x * y;
}

export function divide(x, y) {
  // Tu código:
  if (y <= 0) return 'Error'

  return x / y;
}

export function sonIguales(x, y) {
  // Tu código:

  return x === y;
}

export function tienenMismaLongitud(str1, str2) {
  // Tu código:
  return str1.length === str2.length;
}

export function menosQueNoventa(num) {
  // Tu código:
  return num < 90;
}

export function mayorQueCincuenta(num) {
  // Tu código:
  return num > 50;
}

export function obtenerResto(x, y) {
  // Tu código:
  return x % y;
}

export function esPar(num) {
  // Tu código:
  return num % 2 === 0;
}

export function esImpar(num) {
  // Tu código:
  return num % 2 === 1;
}

export function elevarAlCuadrado(num) {
  // Tu código:
  return num * num;
}

export function elevarAlCubo(num) {
  // Tu código:
  return num*num*num
}

export function elevar(x,y) {
  // Tu código:
  return Math.pow(x, y)
}

export function redondearNumero(num) {
  // Tu código:
  return Math.round(num);
}

export function redondearHaciaArriba(num) {
  // Tu código:
  return Math.ceil(num);
}

export function numeroRandom(num) {
  // Tu código:
  return Math.random(num);
}

export function esPositivo(num) {
  // Tu código: 
  return num > 0 ? 'Es positivo' : num < 0 ? 'Es negativo' : false ;
}

export function agregarSimboloExclamacion(str) {
  // Tu código:
  return str.concat("!");
}

export function combinarNombres(firstName, lastName) {
  // Tu código:
  return firstName + ' ' + lastName;
}

export function obtenerSaludo(name) {
  // Tu código:
  return `Hola ${name}!`;
}

export function obtenerAreaRectangulo(alto, ancho) {
  // Tu código:
  return alto*ancho;
}


export function retornarPerimetro(lado) {
  // Tu código:

  return lado*4;
}


export function areaDelTriangulo(base, altura) {
  // Tu código:

  return base * altura / 2;
}


export function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro*1.2;
}


export function esVocal(letra) {
  // Tu código:
  let vocales = ["a" ,"e" ,"i" ,"o" , "u"];
  if(vocales.includes(letra)) {
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }
  
}
