function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Criando metodo fora do objeto

//Acréssimo
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

//Desconto
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
p1.aumento(100); // 100% de aumento
// p1.desconto(100); // 100% de desconto
console.log(p1);

// Literal
const p2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);
