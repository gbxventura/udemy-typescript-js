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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const port = process.env.PORT || 3333;
const { middlewareGlobal } = require('./src/middlewares/middleware');

// Middleware para analisar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());
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
