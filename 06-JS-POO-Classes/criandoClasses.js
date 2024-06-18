class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando!`);
  }

  comer() {
    console.log(`${this.nome} está comendo!`);
  }

  beber() {
    console.log(`${this.nome} está bebendo!`);
  }
}

const p1 = new Pessoa("Gabriel", "Ventura");
const p2 = new Pessoa("Joao", "Ventura");
const p3 = new Pessoa("Roberto", "Ventura");
const p4 = new Pessoa("Mirela", "Ventura");
// console.log(p1.nome, p1.sobrenome);
p1.falar();
p2.comer();
p3.beber();
