const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const pessoas = [
  { nome: 'João' },
  { nome: 'Gabriel' },
  { nome: 'Rodrigo' },
  { nome: 'Maria' },
];
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  return dados;
}
const dadosArquivo = leArquivo(caminhoArquivo)
  .then(dados => console.log(dados))
  .catch(e => {
    console.log(e);
  });
