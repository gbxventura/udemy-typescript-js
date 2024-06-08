// função construtora --> objetos
//// Construtora --> Sempre Letramaiuscula === (new) Pessoa
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.saudacao = () => {
    const msg = console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`);
    return msg;
  };
}
// Criando novos objetos, com o new.
const p1 = new Pessoa("Gabriel", "Ventura");
const p2 = new Pessoa("Roberto", "Dos Santos");
p1.saudacao();
p2.saudacao();

// Função fabrica --> Objetos
