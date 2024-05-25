const verdadeira = true;

// Let tem somente espoco de bloco
let nome = "Luiz";
// var só tem escopo de função
var nome2 = "Gabriel";

if (verdadeira) {
  let nome = "Otávio"; // Criando apenas dentro do bloco
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Outra coisa"; // criado novamente com mesmo nome de variável
    console.log(nome, nome2);
  }
}
