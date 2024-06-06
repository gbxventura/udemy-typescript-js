/*
Operadores lógicos
&& -> AND -> E ----- Obrigatóriamente todas devem ser verdadeiras
|| -> OR -> OU ----- Opcionalmente uma ou mais deve ser verdadeiras para ser verdadeira
! -> NOT -> NÃO ----- Ele inverte os valores dados
*/

const expEnd = true && true && true;
const expEnd2 = true && false && true;
console.log(expEnd); // true
console.log(expEnd2); // false

const expOr = true || false || true;
console.log(expOr); // true

const usuario = "Luiz";
const senha = "123456";

const vaiLogar = usuario === "Luiz" && senha === "123456";
console.log(vaiLogar);
