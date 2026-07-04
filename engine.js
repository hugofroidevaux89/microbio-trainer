/* ============================================================
   engine.js — motor genérico de la app de flashcards
   Lo comparten todos los módulos (Bacterias, Hongos, Parásitos,
   Virus, Tablas). Cada módulo solo aporta su archivo data/*.js,
   que define window.MODULE = {title, source, storageKey,
   categoryColors, cards, mc}.
   ============================================================ */

/* ---------- Almacenamiento con respaldo ----------
   Si la app corre dentro de Claude.ai (como artifact) usa
   window.storage (persiste asociado a tu cuenta/chat).
   Si corre como archivo local en tu PC (doble clic, sin
   Claude.ai) usa localStorage del navegador como respaldo. */
const Store = {
  async get(key) {
    if (window.storage) {
      try { const r = await window.storage.get(key, false); return r ? r.value : null; }
      catch (e) { return null; }
    }
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  async set(key, value) {
    if (window.storage) {
      try { await window.storage.set(key, value, false); return; } catch (e) { }
    }
    try { localStorage.setItem(key, value); } catch (e) { }
  }
};

(function initModule() {
  const M = window.MODULE;
  if (!M) { document.body.innerHTML = '<p style="color:#e0568e;font-family:monospace;padding:40px;">Error: no se encontró window.MODULE. Verificá que el archivo data/*.js se cargó antes que engine.js.</p>'; return; }

  document.title = `Microbiología UNR · Repaso de ${M.title}`;
  document.getElementById('pageTitle').innerHTML = `Repaso de <i>${M.title}</i>`;
  document.getElementById('footerNote').textContent = `Fuente: ${M.source} (cátedra) · Progreso guardado automáticamente`;

  // Aplica los colores de categoría del módulo como variables CSS
  const catKeys = Object.keys(M.categoryColors);
  const root = document.documentElement.style;
  const letters = ['a', 'b', 'c', 'd', 'e'];
  catKeys.forEach((key, idx) => {
    const c = M.categoryColors[key];
    const letter = letters[idx] || `x${idx}`;
    root.setProperty(`--cat-${letter}`, c.color);
    root.setProperty(`--cat-${letter}-soft`, hexToSoft(c.color));
  });
  // mapa clave-de-dato -> letra (para lookups rápidos)
  const catLetter = {};
  catKeys.forEach((key, idx) => { catLetter[key] = letters[idx] || `x${idx}`; });

  function hexToSoft(hex) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16), g = parseInt(h.substring(2, 4), 16), b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r},${g},${b},0.14)`;
  }
  function colorVarFor(catKey) { return `var(--cat-${catLetter[catKey]})`; }
  function softVarFor(catKey) { return `var(--cat-${catLetter[catKey]}-soft)`; }

  // Legend dinámica
  const legendEl = document.getElementById('legend');
  legendEl.innerHTML = catKeys.map(key => {
    const c = M.categoryColors[key];
    return `<span><span class="dot" style="background:${c.color}"></span>${c.label}</span>`;
  }).join('') + `<span><span class="dot mc"></span>Opción múltiple</span>`;

  /* ======================== LÓGICA ======================== */
  const ALL = M.cards.concat(M.mc || []);
  const GROUPS = [...new Set(ALL.map(c => c.grupo))];
  let progress = {};
  let streakData = { lastDate: null, streak: 0 };
  let activeGroups = new Set(GROUPS);
  let includeOpen = true;
  let includeMC = true;
  let session = [];
  let sessionIdx = 0;
  let sessionCorrect = 0;
  let currentCard = null;
  let flipped = false;

  const DAY = 24 * 60 * 60 * 1000;
  const INTERVALS = [0, 1, 3, 7, 16];
  const PROGRESS_KEY = `${M.storageKey}_progress`;
  const STREAK_KEY = `${M.storageKey}_streak`;

  async function loadProgress() {
    const p = await Store.get(PROGRESS_KEY);
    progress = p ? JSON.parse(p) : {};
    const s = await Store.get(STREAK_KEY);
    streakData = s ? JSON.parse(s) : { lastDate: null, streak: 0 };
  }
  async function saveProgress() { await Store.set(PROGRESS_KEY, JSON.stringify(progress)); }
  async function saveStreak() { await Store.set(STREAK_KEY, JSON.stringify(streakData)); }
  function touchStreak() {
    const today = new Date().toDateString();
    if (streakData.lastDate === today) return;
    const yesterday = new Date(Date.now() - DAY).toDateString();
    streakData.streak = (streakData.lastDate === yesterday) ? streakData.streak + 1 : 1;
    streakData.lastDate = today;
    saveStreak();
  }
  function cardState(id) { return progress[id] || { box: 0, due: 0 }; }
  function isDue(id) { return cardState(id).due <= Date.now(); }
  function grade(id, level) {
    const st = cardState(id);
    let box = st.box;
    if (level === 0) box = 0;
    else if (level === 1) box = Math.max(0, box);
    else box = Math.min(INTERVALS.length - 1, box + 1);
    const days = level === 1 ? 0.5 : INTERVALS[box];
    progress[id] = { box, due: Date.now() + days * DAY };
    saveProgress();
  }

  function filteredCards() {
    const search = document.getElementById('searchBox').value.trim().toLowerCase();
    return ALL.filter(c => {
      if (!activeGroups.has(c.grupo)) return false;
      if (c.type === 'mc' && !includeMC) return false;
      if (c.type !== 'mc' && !includeOpen) return false;
      if (search && !(c.org.toLowerCase().includes(search) || c.grupo.toLowerCase().includes(search) || c.q.toLowerCase().includes(search))) return false;
      return true;
    });
  }

  function renderStats() {
    document.getElementById('statTotal').textContent = ALL.length;
    document.getElementById('statDue').textContent = ALL.filter(c => isDue(c.id)).length;
    document.getElementById('statMastered').textContent = ALL.filter(c => cardState(c.id).box >= 4).length;
    document.getElementById('statStreak').textContent = streakData.streak || 0;
  }

  function renderGroups() {
    const list = document.getElementById('groupList');
    list.innerHTML = '';
    GROUPS.forEach(g => {
      const cards = ALL.filter(c => c.grupo === g);
      const due = cards.filter(c => isDue(c.id)).length;
      const row = document.createElement('div');
      row.className = 'group-row' + (activeGroups.has(g) ? '' : ' off');
      const sampleColor = colorVarFor(cards[0].tincion);
      row.innerHTML = `<span class="group-name"><span class="dot" style="background:${sampleColor}"></span>${g}</span><span class="group-count">${cards.length} · ${due} hoy</span>`;
      row.onclick = () => {
        if (activeGroups.has(g)) activeGroups.delete(g); else activeGroups.add(g);
        renderGroups(); renderHomeCounts();
      };
      list.appendChild(row);
    });
  }

  function renderHomeCounts() {
    const fc = filteredCards();
    document.getElementById('dueCount').textContent = fc.filter(c => isDue(c.id)).length;
  }

  function startSession(mode) {
    const fc = filteredCards();
    let pool = mode === 'due' ? fc.filter(c => isDue(c.id)) : fc.slice();
    if (pool.length === 0) { pool = fc.slice(); }
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[pool[i], pool[j]] = [pool[j], pool[i]]; }
    session = pool; sessionIdx = 0; sessionCorrect = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('end').style.display = 'none';
    document.getElementById('study').style.display = 'block';
    document.getElementById('sessionLabel').textContent = mode === 'due' ? 'Repaso de pendientes' : 'Exploración';
    showCard();
  }

  function showCard() {
    if (sessionIdx >= session.length) { endSession(); return; }
    currentCard = session[sessionIdx];
    document.getElementById('sessionCount').textContent = `${sessionIdx + 1} / ${session.length}`;
    document.getElementById('progressFill').style.width = `${(sessionIdx / session.length) * 100}%`;
    if (currentCard.type === 'mc') {
      document.getElementById('openCardWrap').style.display = 'none';
      document.getElementById('mcCardWrap').style.display = 'block';
      showMCCard();
    } else {
      document.getElementById('mcCardWrap').style.display = 'none';
      document.getElementById('openCardWrap').style.display = 'block';
      showOpenCard();
    }
  }

  function tagsHtmlFor(c) {
    const colorVar = colorVarFor(c.tincion);
    let html = `<span class="tag grupo">${c.grupo}</span><span class="tag org" style="color:${colorVar}">${c.org}</span><span class="tag cat">${c.cat}</span>`;
    if (c.tipoDx) {
      const label = c.tipoDx === 'ambos' ? 'Dx directo + indirecto' : c.tipoDx === 'directo' ? 'Dx directo' : 'Dx indirecto';
      html += `<span class="tag dx">${label}</span>`;
    }
    return html;
  }

  function showOpenCard() {
    flipped = false;
    const card = document.getElementById('card');
    card.classList.remove('flipped');
    document.getElementById('gradeRow').classList.remove('show');
    const washVar = softVarFor(currentCard.tincion);
    const tagsHtml = tagsHtmlFor(currentCard);
    document.getElementById('tagsFront').innerHTML = tagsHtml;
    document.getElementById('tagsBack').innerHTML = tagsHtml;
    document.getElementById('qText').textContent = currentCard.q;
    document.getElementById('aText').textContent = currentCard.a;
    document.getElementById('washFront').style.background = `linear-gradient(135deg, ${washVar}, transparent 60%)`;
    document.getElementById('washBack').style.background = `linear-gradient(135deg, ${washVar}, transparent 60%)`;
  }

  function showMCCard() {
    document.getElementById('mcTags').innerHTML = tagsHtmlFor(currentCard);
    document.getElementById('mcQ').textContent = currentCard.q;
    const explainEl = document.getElementById('mcExplain');
    explainEl.classList.remove('show'); explainEl.textContent = '';
    document.getElementById('mcContinue').classList.remove('show');

    const optWrap = document.getElementById('mcOptions');
    optWrap.innerHTML = '';
    const order = currentCard.options.map((text, i) => ({ text, i }));
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[order[i], order[j]] = [order[j], order[i]]; }
    order.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'mc-option';
      btn.textContent = opt.text;
      btn.onclick = () => selectMCOption(opt.i, btn, optWrap);
      optWrap.appendChild(btn);
    });
  }

  function selectMCOption(chosenIndex, btnEl, optWrap) {
    const buttons = optWrap.querySelectorAll('.mc-option');
    const isCorrect = chosenIndex === currentCard.correct;
    buttons.forEach(b => { b.classList.add('locked'); b.onclick = null; });
    buttons.forEach(b => { if (b.textContent === currentCard.options[currentCard.correct]) b.classList.add('correct'); });
    if (!isCorrect) btnEl.classList.add('incorrect');
    const explainEl = document.getElementById('mcExplain');
    explainEl.textContent = currentCard.explain;
    explainEl.classList.add('show');
    grade(currentCard.id, isCorrect ? 2 : 0);
    if (isCorrect) sessionCorrect++;
    touchStreak();
    renderStats();
    const contBtn = document.getElementById('mcContinue');
    contBtn.classList.add('show');
    contBtn.onclick = () => { sessionIdx++; showCard(); };
  }

  function flipCard() {
    flipped = !flipped;
    document.getElementById('card').classList.toggle('flipped', flipped);
    if (flipped) document.getElementById('gradeRow').classList.add('show');
  }

  function answerAndNext(level) {
    grade(currentCard.id, level);
    if (level >= 1) sessionCorrect++;
    touchStreak();
    sessionIdx++;
    renderStats();
    showCard();
  }

  function endSession() {
    document.getElementById('study').style.display = 'none';
    document.getElementById('end').style.display = 'block';
    const pct = session.length ? Math.round((sessionCorrect / session.length) * 100) : 0;
    document.getElementById('endSummary').textContent = `Repasaste ${session.length} tarjetas · ${pct}% con acierto en el primer intento.`;
    renderStats(); renderGroups(); renderHomeCounts();
  }

  async function resetProgress() {
    if (!confirm('¿Seguro que querés borrar todo tu progreso de repaso de este módulo? Esta acción no se puede deshacer.')) return;
    progress = {}; streakData = { lastDate: null, streak: 0 };
    await saveProgress(); await saveStreak();
    renderStats(); renderGroups(); renderHomeCounts();
  }

  /* eventos */
  document.getElementById('card').addEventListener('click', flipCard);
  document.getElementById('gradeBad').addEventListener('click', (e) => { e.stopPropagation(); answerAndNext(0); });
  document.getElementById('gradeMid').addEventListener('click', (e) => { e.stopPropagation(); answerAndNext(1); });
  document.getElementById('gradeGood').addEventListener('click', (e) => { e.stopPropagation(); answerAndNext(2); });
  document.getElementById('btnStudyDue').addEventListener('click', () => startSession('due'));
  document.getElementById('btnStudyAll').addEventListener('click', () => startSession('all'));
  document.getElementById('btnExitStudy').addEventListener('click', () => {
    document.getElementById('study').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    renderStats(); renderGroups(); renderHomeCounts();
  });
  document.getElementById('btnBackHome').addEventListener('click', () => {
    document.getElementById('end').style.display = 'none';
    document.getElementById('home').style.display = 'block';
  });
  document.getElementById('btnSelectAll').addEventListener('click', () => { activeGroups = new Set(GROUPS); renderGroups(); renderHomeCounts(); });
  document.getElementById('btnSelectNone').addEventListener('click', () => { activeGroups = new Set(); renderGroups(); renderHomeCounts(); });
  document.getElementById('searchBox').addEventListener('input', renderHomeCounts);
  document.getElementById('toggleOpen').addEventListener('change', (e) => { includeOpen = e.target.checked; renderHomeCounts(); });
  document.getElementById('toggleMC').addEventListener('change', (e) => { includeMC = e.target.checked; renderHomeCounts(); });
  document.getElementById('btnReset').addEventListener('click', resetProgress);

  (async function init() {
    await loadProgress();
    renderStats(); renderGroups(); renderHomeCounts();
  })();
})();
