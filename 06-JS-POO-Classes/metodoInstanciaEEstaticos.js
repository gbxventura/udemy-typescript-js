class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 1;
    console.log(this.volume);
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    console.log("Ok, vou trocar.");
  }
  static soma(x, y) {
    return this;
  }
}
const controle1 = new ControleRemoto("LG");
const controle2 = new ControleRemoto("Samsung");
controle1.aumentarVolume();
controle1.aumentarVolume();
