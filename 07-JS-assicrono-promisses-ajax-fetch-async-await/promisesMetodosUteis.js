function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all (passar array com promises)
const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 50),
  esperaAi("Promise 3", 1000),
  "Outro valor",
];
Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });
// Promise.race
// Promise.resolve
// Promise.reject
