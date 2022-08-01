// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:
 
  return array.shift();
}


export function devolverUltimoElemento(array) {
  // Tu código:
 
  return array.pop();
}


export function obtenerLargoDelArray(array) {
  // Tu código:
 
  return array.length;
}


export function incrementarPorUno(array) {
  // Tu código:
 
  return array.map(elem => elem + 1);
}


export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
 
  // return [...array, elemento]
  array.push(elemento);
  return array
}


export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:
 
  array.unshift(elemento);
  return array 
}


export function dePalabrasAFrase(palabras) {
  // Tu código:
 
  return palabras.join(' ');
}


export function arrayContiene(array, elemento) {
  // Tu código:
 
  return array.includes(elemento);
}


export function agregarNumeros(numeros) {
  // Tu código:
 
  return numeros.reduce(
    (acc, curr)=> acc + curr, 0
    )
}


export function promedioResultadosTest(resultadosTest) {
  // Tu código:
 
  return (resultadosTest.reduce((acc, curr) => acc + curr ,0)) 
    / resultadosTest.length;
}


export function numeroMasGrande(numeros) {
 // Tu código:
 
  return Math.max(...numeros);
}


export function multiplicarArgumentos() {
  // Tu código:
 
  return;
}


export function cuentoElementos(arreglo){
 // Tu código:
 
 return;
}


export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
 

  return;
} 


export function empiezaConNueve(n) {
 // Tu código:
    
  return;  
}


export function todosIguales(arreglo) {
 // Tu código:
 
  return;
} 


export function mesesDelAño(array) {  
  // Tu código:
 
  return;
}


export function mayorACien(array) {
  // Tu código:

  return;
}


export function breakStatement(numero) {
  // Tu código:

  return;
}


export function continueStatement(numero) {
  // Tu código:

  return;
}

