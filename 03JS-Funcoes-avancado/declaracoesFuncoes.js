// declaração de função literal (Function hoisting) =
function falaOi() {
  console.log("Oie");
}
falaOi();

// First-class Objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};

function executaFuncao(funcao) {
  funcao();
}
executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
  falar2() {
    console.log("Estou falando...");
  },
};
obj.falar();
