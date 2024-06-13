// Literal
const pessoa = {
  nome: "Gabriel",
  sobrenome: "Ventura",
  falar() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
  },
};
console.log(pessoa.nome, pessoa.sobrenome);

// New Object()
const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome.`;
};
console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
// Apagar uma chave
delete pessoa1.nome;
