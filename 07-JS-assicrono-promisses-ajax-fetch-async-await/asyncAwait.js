function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

// esperaAi("Fase 1", rand())
//   .then((fase1) => {
//     console.log(fase1);
//     return esperaAi("Fase 2", rand());
//   })
//   .then((fase2) => {
//     console.log(fase2);
//     return esperaAi("Fase 3", rand());
//   })
//   .then((fase3) => {
//     console.log(fase3);
//     return fase3;
//   })
//   .then((fase3) => {
//     console.log("Terminamos na fase3:", fase3);
//   })
//   .catch((e) => {
//     console.log("Erro" + e);
//   });

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);
    const fase3 = await esperaAi(1000, rand());
    console.log(fase3);
    console.log("Terminamos na fase3:", fase3);
  } catch (e) {
    console.log("OCORREU UM ERRO EM: " + e);
  }
}

executa();
