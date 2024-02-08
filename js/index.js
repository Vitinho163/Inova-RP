document.addEventListener("DOMContentLoaded", function() {
  const footerText = document.querySelector('h1');
  let dotsCount = 0;

  function updateDots() {
      footerText.textContent = 'Em breve' + '.'.repeat(dotsCount);
      dotsCount = (dotsCount + 1) % 4;
  }

  setInterval(updateDots, 500); // Atualizar os pontos a cada 500 milissegundos (0,5 segundos)
});