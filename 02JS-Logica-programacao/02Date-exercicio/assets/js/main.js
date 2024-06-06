// const h1 = document.querySelector(".container h1");
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//       break;
//     case 1:
//       diaSemanaTexto = "Segunda";
//       return diaSemanaTexto;
//       break;
//     case 2:
//       diaSemanaTexto = "terça";
//       return diaSemanaTexto;
//       break;
//     case 3:
//       diaSemanaTexto = "Quarta";
//       return diaSemanaTexto;
//       break;
//     case 4:
//       diaSemanaTexto = "Quinta";
//       return diaSemanaTexto;
//       break;
//     case 5:
//       diaSemanaTexto = "Sexta";
//       return diaSemanaTexto;
//       break;
//     case 6:
//       diaSemanaTexto = "Sábado";
//       return diaSemanaTexto;
//       break;
//     default:
//       diaSemanaTexto = "NaN";
//       return diaSemanaTexto;
//       break;
//   }
// }

// function getNomeMes(numeroMes) {
//   let nomeMes;

//   switch (numeroMes) {
//     case 0:
//       nomeMes = "Janeiro";
//       return nomeMes;
//     case 1:
//       nomeMes = "Fevereiro";
//       return nomeMes;
//     case 2:
//       nomeMes = "Março";
//       return nomeMes;
//     case 3:
//       nomeMes = "Abril";
//       return nomeMes;
//     case 4:
//       nomeMes = "Maio";
//       return nomeMes;
//     case 5:
//       nomeMes = "Junho";
//       return nomeMes;
//     case 6:
//       nomeMes = "Julho";
//       return nomeMes;
//     case 7:
//       nomeMes = "Agosto";
//       return nomeMes;
//     case 8:
//       nomeMes = "Setembro";
//       return nomeMes;
//     case 9:
//       nomeMes = "Outubro";
//       return nomeMes;
//     case 10:
//       nomeMes = "Novembro";
//       return nomeMes;
//     case 11:
//       nomeMes = "Dezembro";
//       return nomeMes;
//   }
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();
//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);
//   return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
// }
// h1.innerHTML = criaData(data);

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
});
