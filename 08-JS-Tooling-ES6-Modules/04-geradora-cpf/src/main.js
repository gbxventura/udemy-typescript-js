import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  const btn = document.querySelector('#btn-gera');

  btn.addEventListener('click', () => {
    const novoCPF = gera.geraNovoCPF();
    cpfGerado.textContent = novoCPF;
  });
})();
