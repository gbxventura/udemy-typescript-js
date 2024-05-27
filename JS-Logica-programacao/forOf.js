//            0123456
const nome = "Gabriel Ventura";
const nomes = ["Gabriel Ventura", "Romulo ventura", "Joao"];
// iteração com for comum da string
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
// iteração com for in da string
for (let i in nome) {
  console.log(nome[i]);
}

// iteração com for of da string
for (let valor of nome) {
  console.log(valor);
}
for (let valor of nomes) {
  console.log(valor);
}
