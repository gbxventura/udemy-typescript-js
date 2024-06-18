class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já está ligado!");
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já está desligado!");
    }
    this.ligado = false;
  }
}
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}
class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
}
const s1 = new Smartphone("iPhone", "Preto");
const t1 = new Tablet("iPad", "tem");
console.log(t1);
s1.ligar();
console.log(s1);
