function retornaFUncao() {
  const nome = "Gabriel";
  return function () {
    return nome;
  };
}

const funcao = retornaFUncao();

