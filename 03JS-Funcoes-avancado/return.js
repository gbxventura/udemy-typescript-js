// return -> retorna um valor, termina a função

// Função sem return
function soma2(a, b) {
  console.log(a, b);
}
soma(5, 2);

// Função com return
function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3));

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("Mundo!");
console.log(resto);

function criaMultiplicador(multiplicador) {
  // escopo
  return function (n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));
