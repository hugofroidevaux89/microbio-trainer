/* Tema claro / oscuro — compartido por todas las páginas */
(function () {
  const KEY = 'theme';

  function getTheme() {
    try { return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; }
    catch (e) { return 'dark'; }
  }

  function apply(theme) {
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem(KEY, theme); } catch (e) { }
    syncToggle(theme);
  }

  function syncToggle(theme) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const isLight = theme === 'light';
    btn.setAttribute('aria-pressed', String(isLight));
    btn.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
    const label = btn.querySelector('.theme-toggle-label');
    if (label) label.textContent = isLight ? 'Modo claro' : 'Modo oscuro';
  }

  function mount() {
    const top = document.querySelector('.top');
    if (!top || document.getElementById('themeToggle')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'themeToggle';
    btn.className = 'theme-toggle';
    btn.innerHTML =
      '<span class="theme-toggle-track" aria-hidden="true"><span class="theme-toggle-thumb"></span></span>' +
      '<span class="theme-toggle-label"></span>';
    btn.addEventListener('click', () => {
      apply(getTheme() === 'light' ? 'dark' : 'light');
    });

    const legend = document.getElementById('legend');
    if (legend) {
      let actions = top.querySelector('.top-actions');
      if (!actions) {
        actions = document.createElement('div');
        actions.className = 'top-actions';
        legend.replaceWith(actions);
        actions.appendChild(legend);
      }
      actions.appendChild(btn);
    } else {
      top.appendChild(btn);
    }
    syncToggle(getTheme());
  }

  apply(getTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
