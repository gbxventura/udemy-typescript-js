/*
  Javascript é baseado em protótipos para passar propiedades e métodos
  de um objeto para outro.

  Definição de protótipo:
  Protótipo é o termo usado para se referir ao que foi criado pela
  primeira vez, servindo de modelo ou molde para futuras produções.

  Todos os objetos tem uma referência interna para que um protótipo (__proto__)
  que vem da propiedade prototype da função construtora que foi usada para criá-lo.
  Quando tentamos encontrar este membro no própio objeto e depois a cadeia
  de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

const p1 = new Pessoa("Gabriel", "V.");
const data = new Date(); // <-- Date = Função construtora

console.dir(p1);
console.dir(data);
