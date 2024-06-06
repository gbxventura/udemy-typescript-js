/*
&& -> Uma precisa ser falsa para ser falso
|| -> Vai retornar o valor verdadeiro

FALSY
false
0
`` '' "" 
null / undefined
NaN
*/

// console.log("Luiz Otávio" && 0 && "Maria");
// console.log("Luiz" && "Maria");

// function falaOi() {
//   return "Oi";
// }
// const vaiExecutar = false;
// console.log(vaiExecutar && falaOi()); // false
// console.log(vaiExecutar || falaOi()); // oi

// console.log(0 || false || null || "Luiz Otávio" || true);
// const corUsuario = "Vermelho";
// const corPadrao = corUsuario || "preto";
// console.log(corPadrao);

const a = 0;
const b = null;
const c = "false"; // <-------
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
