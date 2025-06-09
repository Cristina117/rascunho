// script.js

document.addEventListener('DOMContentLoaded', () => {
  const infoBox = document.getElementById('infoBox');
  const activities = document.querySelectorAll('td.activity');

  activities.forEach(cell => {
    cell.addEventListener('click', () => {
      const info = cell.getAttribute('data-info');
      infoBox.textContent = info;
      infoBox.classList.remove('hidden');
      // Scroll para o infoBox para melhor visualização
      infoBox.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Opcional: clicar fora do infoBox para esconder
  document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('activity') && !infoBox.classList.contains('hidden')) {
      infoBox.classList.add('hidden');
    }
  });
});
