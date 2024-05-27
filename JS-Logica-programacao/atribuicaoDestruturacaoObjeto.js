const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    logradouro: "Rua da felicidade",
    numero: 320,
  },
};
const { nome: nomeTeste, sobrenome, idade, endereco } = pessoa;
console.log(nomeTeste, sobrenome, idade, endereco);

const { endereco: endComp = { logradouro, numero } } = pessoa;
console.log(endComp);

const { nome, ...resto } = pessoa;
console.log(nome, resto);
