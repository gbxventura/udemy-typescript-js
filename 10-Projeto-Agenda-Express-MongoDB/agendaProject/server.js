require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const port = process.env.PORT || 3333;
const helmet = require('helmet');
const csrf = require('csurf');
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware');

// Conectar ao banco de dados
mongoose
  .connect(process.env.CONNECTIONSTRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    }
  )
  .then(() => {
    console.log('Conectei a base de dados');
    app.emit('pronto');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Configurar segurança
app.use(helmet());

// Middleware para análise de requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configuração de sessão
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

// Configuração de visualização
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Proteção contra CSRF
app.use(csrf());

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Rotas
app.use(routes);

// Iniciar o servidor quando pronto
app.on('pronto', () => {
  app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`http://localhost:${port}`);
  });
});
