// const { nome, sobrenome, falaNome } = require('./mod1.js');
// console.log(`Meu nome é ${nome} ${sobrenome}`);
const { Pessoa } = require('./mod1');
const axios = require('axios');

const p1 = new Pessoa('Gabriel');
console.log(p1);
