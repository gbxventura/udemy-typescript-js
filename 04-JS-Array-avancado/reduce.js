// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0   1   2  3  4  ..........
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
  // if (valor % 2 === 0) acumulador.push(valor);
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(total);
