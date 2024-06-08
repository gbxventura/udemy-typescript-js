// Criando função construtora
function Calculadora() {
  this.display = document.querySelector(".display");

  // Capturar os clicks
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };
  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
      this.realizaConta();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta inválida!");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
  // Capturar Botões numéricos
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  // Capturar Botão CLEAR
  this.clear = () => (this.display.value = " ");
  // Capturar Botão de Apagar
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}
// Instanciando a calculadora e iniciando-a.
const calculadora = new Calculadora();
calculadora.inicia();
