const pontuacaoUsuario = 999;
const nivelUsuario =
  // condição ? 'Valor para verdadeiro' : 'Valor para falso'
  pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario Normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);
