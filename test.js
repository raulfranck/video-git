console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World"); 

/**
 * Busca Binária em um array ordenado
 * @param {number[]} array - Array ordenado com 100 posições
 * @param {number} alvo - Valor a ser buscado
 * @returns {number} - Índice do elemento encontrado ou -1 se não encontrado
 */
function buscaBinaria(array, alvo) {
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);

    if (array[meio] === alvo) {
      return meio; 
    }

    if (array[meio] < alvo) {
      esquerda = meio + 1; 
    } else {
      direita = meio - 1; 
    }
  }

  return -1; 
}


const array100 = Array.from({ length: 100 }, (_, i) => i + 1); 


console.log("Hello World");console.log("Hello World");console.log("Hello World");

console.log("Buscando 42:", buscaBinaria(array100, 42));   
console.log("Buscando 1:", buscaBinaria(array100, 1));     
console.log("Buscando 100:", buscaBinaria(array100, 100));
console.log("Buscando 150:", buscaBinaria(array100, 150)); 

