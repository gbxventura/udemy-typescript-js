// eduardo[0], Maria[1], Joana[2]
const nomes = ["Eduardo", "Maria", "Joana"];

// Valor por referência, tudo que eu fizer em novo, vai refletir em nomes e vice-versa\.
const novo = nomes;

// fazendo a cópia do nomes, e não usando de referencia.
const novo2 = [...nomes];

// Trocar valor do indice
nomes[2] = "João";

// deletar indice, ficará <empty item
delete nomes[2];

console.log(novo);
console.log(novo2);

// deleter o ultimo indice,
//pode-se armazenar em uma variável e retornar para o usuario
// exemplo:
// const removido = nomes.pop();
// console.log(nomes, removido);
nomes.pop();

// Adicionar elemento no final do array **
nomes.push("João");
nomes.push("Roberto");

// deleter o primeiro indice e realoca os indices
nomes.shift();

// Adicionar no inicio do Array
nomes.unshift("Mariano");
nomes.unshift("Camila");
nomes.unshift("Rosana");
nomes.unshift("Wallace");

// Fatiar o array
// pegar do indice 1 até o 2
const novo3 = nomes.slice(1, 3);
console.log(novo3);
console.log(nomes);

// Transformar string em array
const nome = "Luiz Otávio Miranda";
const nomes2 = nome.split(" ");
console.log(nomes2);

// Transformar Array em String
const nomes3 = ["Luiz", "Otavio", "Miranda"];
const nome3 = nomes3.join(" ");
console.log(nome3);
