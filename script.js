document.addEventListener('DOMContentLoaded', function () {
  const testoContainer = document.getElementById('testoContainer');

  testoContainer.addEventListener('click', function () {
    testoContainer.classList.toggle('espanso');
    adattaTesto();
  });

  window.addEventListener('resize', function () {
    adattaTesto();
  });

  function adattaTesto() {
    const testoRidotto = document.querySelector('.testo-ridotto');
    const testoCompleto = document.querySelector('.testo-completo');

    if (testoContainer.classList.contains('espanso')) {
      testoRidotto.style.display = 'none';
      testoCompleto.style.display = 'block';
    } else {
      testoRidotto.style.display = 'block';
      testoCompleto.style.display = 'none';
    }
  }
});
