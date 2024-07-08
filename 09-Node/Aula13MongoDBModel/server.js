require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectei a base de dados');
    app.emit('pronto');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

const port = process.env.PORT || 3333;
const { middlewareGlobal } = require('./src/middlewares/middleware');

// Middleware para analisar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurações de visualização
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);

// Rotas
app.use(routes);

app.on('pronto', () => {
  // Iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`http://localhost:${port}`);
  });
});
