function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexão com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Tratando os dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Exibe dados na tela");
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(2222);
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log("Erro:", e);
  });

console.log("Isso será exibido antes do promisse");
console.log();
