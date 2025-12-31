
function buscarMinMax(array) {
  if (array.length === 0) {
    return null;
  }

  let min = array[0];
  let max = array[0];
  let indiceMin = 0;
  let indiceMax = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      indiceMin = i;
    }
    if (array[i] > max) {
      max = array[i];
      indiceMax = i;
    }
  }

  return { min, max, indiceMin, indiceMax };
}


const array100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);

console.log("Array gerado:", array100);
console.log("\n--- Resultado da Busca Min-Max ---");

const resultado = buscarMinMax(array100);

console.log(`Valor Mínimo: ${resultado.min} (índice ${resultado.indiceMin})`);
console.log(`Valor Máximo: ${resultado.max} (índice ${resultado.indiceMax})`);

