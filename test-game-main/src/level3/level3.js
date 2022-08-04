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
 const graters = arreglo.filter(elemento => elemento > 18)
 return graters.length;
}


export function diaDeLaSemana(numeroDeDia) {
  if(numeroDeDia > 7) return;
  if(numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana"
  }else{
    return 'Es dia Laboral'
  }
} 


export function empiezaConNueve(n) {
  const numberArr = Array.from(String(n))
 if(numberArr[0] === "9") {
   return true
 }else { 
  return false
 } 
}


export function todosIguales(arreglo) {
  const firstItem = arreglo[0];
  function checkEquality(item) {
    if(item === firstItem) {
      return true
    } else {
      return false
    }
  }
  return arreglo.every(checkEquality)
} 


export function mesesDelAño(array) {  
  const mesesOk = ["Marzo", "Noviembre", "Enero"];
  const auxArray = [...new Set(array.filter(mesDelArray => mesesOk.includes(mesDelArray)))] 
  return auxArray.length === 3 ? auxArray : "No se encontraron los meses pedidos"
}


export function mayorACien(array) {

  return array.filter(numero => numero > 100);
  
}


export function breakStatement(numero) { 
  const array = [];
  for(let i=0; i < 10; i++) {
    numero+=2
    array.push(numero)
    if(i === numero) return 'Se interrumpió la ejecución'
  }
  return array 
}


export function continueStatement(numero) {
  const array = [];
  for(let i=0; i < 9; i++) {
    numero+=2
    array.push(numero)
    if(i === 5) {continue};
  }
  return array 
}

