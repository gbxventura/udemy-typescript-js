// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// POdemos usar condições sem else if, utilizando apenas if e else

const hora = 16;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora > 12 && hora <= 17) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

const tenhaGrana = NaN;
if (tenhaGrana) {
  console.log("Vou sair de casa");
} else {
  console.log("Não vou sair de casa");
}
