// Escreva umafunção chamada ePaisagem que
// receba dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a iagem no modo
// paisagem

const ePaisagem = (w, h) => (w > h ? true : false);

console.log(ePaisagem(1080, 1920));

// refatorando
// automaticamente ele entende true and false
const ePaisagem2 = (w, h) => w > h;

console.log(ePaisagem2(1080, 1920));
