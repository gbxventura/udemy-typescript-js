const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3333;
const { middlewareGlobal } = require('./src/middlewares/middleware');

// Middleware para analisar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurações de visualização
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos própios middlewares
app.use(middlewareGlobal);

// Rotas
app.use(routes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
