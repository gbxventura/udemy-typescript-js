function teste() {
  console.log("Este é meu teste.");
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
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
ControleRemoto.trocaPilha();

console.log(ControleRemoto.soma(2, 4));
