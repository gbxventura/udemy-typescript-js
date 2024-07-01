// Exportando recursos individuais
const nome = "Gabriel";
const sobrenome = "Ventura";
const idade = 30;

export { nome, sobrenome, idade };
export { nome as outroNome, sobrenome as outroSobrenome };

export function teste() {
  console.log("teste");
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// Exportações default
export default (a, b) => a + b;

// export default function () {} // também class, function*
// export default function funcao() {} // também class,. function*
// export {name1 as default};
