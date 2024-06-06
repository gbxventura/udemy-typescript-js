const pessoa = {
  nome: "Gabriel",
  sobrenome: "Ventura",
  idade: 21,
  nacionalidade: "Brasileiro",
  endereco: {
    logradouro: "Rua da felicidade",
    numero: "70",
    bairro: "Interlagos",
    cidade: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil",
  },
};

console.log(`Olá ${pessoa.nome}, Seja bem vindo ao Portal.`);
console.log("Escolha uma opção:");

const escolha = 1;

switch (escolha) {
  case 0:
    console.log();
  case 1:
    console.log("(1) - Ver notas");
    break;
  case 2:
    console.log("(2) - Ver matérias");
    break;
  case 3:
    console.log("(3) - Teste");
}
