const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  // flag w - irá apagar tudo que estiver no arquivo se ele ja existe.
  // flag a - irá escrever na frente, usando /n irá para proxima linha
  fs.writeFile(caminho, dados, { flag: 'w' });
};
