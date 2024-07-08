exports.paginaInicial = (req, res) => {
  console.log('Respondendo ao cliente!');
  res.render('index');
};

exports.trataPost = (req, res) => {
  console.log('Tratando POST');
  res.send(req.body);
};
