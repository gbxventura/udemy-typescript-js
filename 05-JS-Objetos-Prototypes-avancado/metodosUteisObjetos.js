/*
// novos
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (Define várias propiedades)
Object.defineProperty (define uma propiedade)
*/

// criando produto
const produto = { nome: "caneca", preco: 1.8 };

// Copiando produto, com spread
const outraCoisa = { ...produto };

// Object.assign // Copia tudo que tem em produto para o prato, igual o spread
const prato = Object.assign({}, produto);

// Object.getOwnPropertyDescriptor
// Mostra a descrição completa das propiedades da chave nome no prato
console.log(Object.getOwnPropertyDescriptor(prato, "nome"));

// Object.values // mostra os valores da chave, diferente do keys que mostra as chaves
console.log(Object.values(prato));

// Object.entries // mostra o valor e a chave em array
console.log(Object.entries(prato));
