function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.realizaConta();
        }
      });
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        // Validação básica da conta usando expressão regular
        if (!/^[\d+\-*/(). ]+$/.test(conta)) {
          throw new Error("Conta inválida.");
        }

        // Calculando a expressão de forma segura usando Function constructor
        conta = Function('"use strict";return (' + conta + ")")();

        if (conta === undefined || conta === null) {
          throw new Error("Conta inválida.");
        }

        this.display.value = String(conta);
      } catch (e) {
        this.mostraErro("Conta inválida.");
      }
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    clearDisplay() {
      this.display.value = "";
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.adicionaAoDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    adicionaAoDisplay(valor) {
      this.display.value += valor;
    },

    mostraErro(mensagem) {
      alert(mensagem);
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
