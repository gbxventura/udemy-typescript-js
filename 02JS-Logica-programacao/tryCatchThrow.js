// try {
//   console.log(naoExisto);
// } catch (error) {
//   //   alert("Variavel não existe");
//   console.log("Erro: " + error); // tratar o erro e não mostrar para o usuário.
// }

const soma = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números.");
  }
  return x + y;
};
try {
  console.log(soma(1, 2));
  console.log(soma("a", 2));
} catch (error) {
  //   console.log(error);
  console.log("Alguma coisa mais amigável para o usuário.");
}
