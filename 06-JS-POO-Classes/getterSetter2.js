class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.valor = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}
const p1 = new Pessoa("Gabriel", "Ventura");
p1.nomeCompleto = "Luiz Miranda da Silva";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
