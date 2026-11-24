/* Tema claro ou escuro: segue o sistema até a pessoa escolher; a escolha fica só neste navegador. */
(function () {
  var CHAVE = 'aulas-tema';
  var raiz = document.documentElement;
  var sistema = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function salvo() {
    try {
      var v = localStorage.getItem(CHAVE);
      return v === 'dark' || v === 'light' ? v : null;
    } catch (e) { return null; }
  }
  function atual() {
    return raiz.getAttribute('data-theme') || (sistema && sistema.matches ? 'dark' : 'light');
  }
  function mostrar(botao) {
    botao.setAttribute('aria-pressed', atual() === 'dark' ? 'true' : 'false');
  }

  var inicial = salvo();
  if (inicial) raiz.setAttribute('data-theme', inicial);

  document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('tema');
    if (!botao) return;
    mostrar(botao);
    botao.addEventListener('click', function () {
      var novo = atual() === 'dark' ? 'light' : 'dark';
      raiz.setAttribute('data-theme', novo);
      try { localStorage.setItem(CHAVE, novo); } catch (e) { /* sem armazenamento: vale só nesta visita */ }
      mostrar(botao);
    });
    if (sistema && sistema.addEventListener) sistema.addEventListener('change', function () { mostrar(botao); });
  });
})();
