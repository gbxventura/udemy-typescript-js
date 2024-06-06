function criaHoraSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const relogio = document.querySelector("#relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
const toggleMode = document.querySelector(".toggle-mode");
let segundos = 0;
let timer;

const iniciaRelogio = () => {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraSegundos(segundos);
  }, 1000);
};

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }
  if (el.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  }
  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciaRelogio();
  }
  if (el.classList.contains("toggle-mode")) {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  }
});
