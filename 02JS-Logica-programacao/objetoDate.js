// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras);
// ano-mes-dia-hora-minuto-segundo-milesimos
// o mes começa no 0(janeiro)
const data = new Date(2019, 12, 2, 15, 14, 27);

// segundo formato, mais utilizado.
const data2 = new Date("2019-04-12 20:20:59");
console.log(data.toString(), data2.toString());

// Pegar informações
console.log("Dia:", data2.getDate());
console.log("Mês:", data2.getMonth()); // começa no zero
console.log("Ano:", data2.getFullYear());
console.log("Hora:", data2.getHours());
console.log("Minuto:", data2.getMinutes());
console.log("Segundo:", data2.getSeconds());
console.log("Ms:", data2.getMilliseconds());
// 0 - Domingo, 6 - Sábado
console.log("Dia semana:", data2.getDay());

// Data do marco 0 até o dia atual
console.log(Date.now());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`;
}

const data3 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
