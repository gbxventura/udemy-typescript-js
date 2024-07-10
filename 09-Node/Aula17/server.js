require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
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
const routes = require('./routes');
const path = require('path');
const port = process.env.PORT || 3333;
const helmt = require('helmet');
const csrf = require('csurf');
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware');

// Proteção Helmt
app.use(helmt());
// Middleware para analisar o corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qvqwfqwerqwerqewrasdasdasda a6()',
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

// Previnir ataques de Cross-Site Scripting => (xss)
app.use(csrf());

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Rotas
app.use(routes);

app.on('pronto', () => {
  // Iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`http://localhost:${port}`);
  });
});
