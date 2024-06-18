// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia; // Agência do banco
  this.conta = conta; // Número da conta
  this.saldo = saldo; // Saldo inicial
}

// Método para sacar dinheiro
Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente!`);
    this.verSaldo();
    return;
  }
  this.saldo -= valor; // Subtrai o valor do saldo
  this.verSaldo(); // Exibe o saldo atualizado
};

// Método para depositar dinheiro
Conta.prototype.depositar = function (valor) {
  this.saldo += valor; // Adiciona o valor ao saldo
  this.verSaldo(); // Exibe o saldo atualizado
};

// Método para exibir o saldo
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`
  );
};

// Subclasse para Conta Corrente
function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo); // Chama o construtor da superclass
  this.limite = limite; // Limite do cheque especial
}
CC.prototype = Object.create(Conta.prototype); // Herança
CC.prototype.constructor = CC;

// Sobrescreve o método sacar para considerar o limite
CC.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente!`);
    this.verSaldo();
    return;
  }
  this.saldo -= valor; // Subtrai o valor do saldo
  this.verSaldo(); // Exibe o saldo atualizado
};

// Subclasse para Conta Poupança
function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo); // Chama o construtor da superclass
}
CP.prototype = Object.create(Conta.prototype); // Herança
CP.prototype.constructor = CP;

// Testes
const cc = new CC(11, 22, 0, 100); // Cria uma conta corrente com limite de 100
cc.depositar(10); // Deposita 10
cc.sacar(110); // Saca 110 (permitido pelo limite)
cc.sacar(11); // Tenta sacar 11 (saldo insuficiente)

const cp = new CP(12, 33, 0); // Cria uma conta poupança
cp.depositar(10); // Deposita 10
cp.sacar(110); // Tenta sacar 110 (saldo insuficiente)
cp.sacar(11); // Tenta sacar 11 (saldo insuficiente)
console.log(cp); // Exibe detalhes da conta poupança
