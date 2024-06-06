// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    fala(assunto) {
      return `${this.nome} está falando ${assunto}`;
    },

    altura,
    peso,

    // getter para obter o valor da função e transformar ela em um atributo.
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
// Criando pessoa
const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);

// Pessoa falando
p1.nomeCompleto = "Maria Oliveira Silva";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala("aaa"));
