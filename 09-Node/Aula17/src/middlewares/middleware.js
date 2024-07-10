exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('../views/includes/404.ejs');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
