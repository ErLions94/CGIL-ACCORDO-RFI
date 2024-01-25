document.addEventListener('DOMContentLoaded', function () {
  const testoContainer = document.getElementById('testoContainer');

  testoContainer.addEventListener('click', function () {
    testoContainer.classList.toggle('espanso');
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 480) {
      testoContainer.classList.remove('espanso');
    }
  });
});
