for (let i = 1; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "ímpar";
  console.log(i, par);
}

const frutas = ["Maçã", "Pêra", "Uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`indice: ${i} - ${frutas[i]}`);
}
