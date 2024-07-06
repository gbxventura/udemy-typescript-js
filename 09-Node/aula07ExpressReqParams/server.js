const express = require('express');
const app = express();
const port = 3333;

app.use(express.urlencoded({ extended: true }));

//             dns        perfil  parm   querysting    &      querystring
// http://meusite.com.br/profiles/1?campanha=googleads&nome_campanha=seila

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // req.params -> é o que vem nas rotas da url
  console.log(req.params);
  res.send(req.params);
});

app.post('/', (req, res) => {
  // req.body ->
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(port, () => {
  console.log('Servidor executando na porta 3333');
});
