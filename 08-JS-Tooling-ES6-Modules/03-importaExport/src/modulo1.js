export const nome = "Gabriel";
export const sobrenome = "Ventura";
export const idade = 30;
// não será exportado, pois nao tem export antes.
const cpf = 12430210412;

export default function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
