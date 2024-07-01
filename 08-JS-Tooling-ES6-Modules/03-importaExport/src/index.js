import { nome, sobrenome, idade, Pessoa } from "./modulo1";
import qualquerNome from "./modulo1";
// ou
import * as ModuloInteiro from "./modulo1";

console.log(`Olá, meu nome é ${nome} ${sobrenome}, tenho ${idade} anos`);
console.log("A soma de 4 + 2 = " + qualquerNome(4, 2));

const p1 = new Pessoa("Gabriel", "Ventura");
console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(qualquerNome(4, 2));
