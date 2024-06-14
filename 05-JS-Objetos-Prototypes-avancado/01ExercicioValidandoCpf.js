function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (!this.cpfLimpo || this.cpfLimpo.length !== 11 || this.isSequencia()) {
    return false;
  }

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

document.getElementById("cpfForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const cpfInput = document.getElementById("cpf").value;
  const cpf = new ValidaCPF(cpfInput);
  const resultado = document.getElementById("resultado");

  if (cpf.valida()) {
    resultado.textContent = "CPF válido!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "CPF inválido!";
    resultado.style.color = "red";
  }
});
