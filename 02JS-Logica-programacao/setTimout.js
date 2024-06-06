function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

function funcaDoInterval() {
  console.log(mostraHora());
}

// continua executando a cada 1 segundo
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

// settimeout so executa um vez
setTimeout(function () {
  clearInterval(timer);
}, 5000);

setInterval(function () {
  console.log("Parei em 5 segundos o timer. E vou continuar as mensagens.");
}, 5000);
