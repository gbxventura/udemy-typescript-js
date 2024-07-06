const express = require('express');
const app = express();
const port = 3333;

// CRUD -> CREATE   READ   UPDATE  DELETE
//          POST     GET     PUT   DELETE
// https://meusite.com/ <- GET -> Entregue a rota /
// https://meusite.com/contat <- GET -> Entregue a rota /contato

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});
app.post('/', (req, res) => {
  res.send('REcebi o formulário');
});
app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato conosco.');
});

app.listen(port, () => {
  console.log('Servidor executando na porta 3333');
});
