// Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Gabriel", "Ventura");
console.log(p1.nomeCompleto());

// Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome;
  this.sobrenome;
}
// palavra new cria um objeto vazio, Pega o this e atrela ao objeto. {} <- this

const p2 = new Pessoa("Ravier", "Silva");
