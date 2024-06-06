const frutas = ["Laranja", "Maçã", "Pera", "Uva"];

contador;
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// ler itens da listas // index
// le os indices ou chaves do objeto

for (let i in frutas) {
  console.log(`${i} ${frutas[i]}`);
}

// ================================
// ================================

const pessoa = {
  nome: "Gabriel",
  sobrenome: "Ventura",
  idade: 21,
};

// percorrer valores
for (let i in pessoa) {
  console.log(pessoa[i]);
}

// formas de acessar
console.log(pessoa.nome);
console.log(pessoa["nome"]);
