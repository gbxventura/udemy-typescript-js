// DefineProperty -> Getter e Setters
// Get para receber o valor
// Set para definir o valor, setar o valor.
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    // value: estoque, // valor
    // writable: true, // pode alterar
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Valor invalido");
      }
      estoquePrivado = valor;
    },
  });
}
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}
const p2 = criaProduto("Camiseta");
console.log(p2.nome);

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 24;
console.log(p1.estoque);
