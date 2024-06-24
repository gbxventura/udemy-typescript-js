function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("erro");
      return;
    }

    setTimeout(() => {
      resolve(msg);
      return;
    }, tempo);
  });
}

// Exemplos
const promises = [
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 50),
  esperaAi("Promise 3", 1000),
  //   esperaAi(1000),
  //   "Outro valor",
];
// Promise.all (passar array com promises)
Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });
// Promise.race (entrega a primeira que for resolvida, a mais rapida)
Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });
// Promise.resolve
// Promise.reject
