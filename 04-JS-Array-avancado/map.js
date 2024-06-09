// Dobre os números
//               0   1   2  3  4  ..........
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numsDobro = numeros.map((nums) => nums * 2);
console.log(numeros);
console.log(numsDobro);

// Para cada elemento:

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosada", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);
// Remova apenas a chave 'nome' do objeto
const idade = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idade);
// Adicione uma chave id em cada objeto
const idPessoas = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});
console.log(idPessoas);
console.log(pessoas);
