// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  //   this.estoque = estoque;

  // não vai ser mais visivel com enumerable false
  // writable nao pode ser alterado
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave com true
    value: estoque, // valor da chave
    writable: true, // pode-se alterar o valor com true
    configurable: true, // pode-se apagar, reconfigurar, editar com true
  });
  // varias propiedades ao mesmo tempo
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
    },
    estoque: {
      configurable: false,
    },
  });
}
const p1 = new Produto("Camiseta", 20, 3);

// Mostra as chaves enumerables
console.log(Object.keys(p1));
