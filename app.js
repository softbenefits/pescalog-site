const viewButtons = document.querySelectorAll('[data-view]');
const views = document.querySelectorAll('.prototype-view');

function showView(id) {
  views.forEach(view => view.classList.toggle('is-active', view.id === id));
  viewButtons.forEach(button => button.classList.toggle('is-active', button.dataset.view === id));
  const url = new URL(window.location.href);
  url.searchParams.set('view', id);
  window.history.replaceState({}, '', url);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

viewButtons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));

document.querySelectorAll('.menu-toggle').forEach(button => {
  button.addEventListener('click', () => button.closest('.app-frame').classList.toggle('menu-open'));
});

const initialView = new URLSearchParams(window.location.search).get('view');
if (['public', 'auth', 'dashboard', 'journey', 'history', 'detail', 'admin'].includes(initialView)) {
  showView(initialView);
}

const captureList = document.querySelector('.capture-list');
const captureEmpty = document.querySelector('.capture-empty');
let captureCount = 0;

function addCapture(shouldScroll = true) {
  captureCount += 1;
  captureEmpty.hidden = true;
  const capture = document.createElement('article');
  capture.className = 'capture-editor panel';
  capture.innerHTML = `
    <div class="capture-editor-head"><div><span class="capture-index">${String(captureCount).padStart(2, '0')}</span><div><small>REGISTO DE CAPTURA</small><h3>Captura ${captureCount}</h3></div></div><button type="button" class="remove-capture">Remover</button></div>
    <div class="capture-form-grid">
      <label class="field field-species"><span>Espécie <b>*</b></span><select><option>Choco</option><option>Lula</option><option>Polvo</option><option>Robalo</option><option>Dourada</option><option>Besugo</option></select><small><i class="suggested-dot"></i> Sugerida pelo tipo de pesca.</small></label>
      <label class="field"><span>Quantidade <b>*</b></span><div class="quantity-control"><button type="button">−</button><input type="number" value="1" min="1"><button type="button">＋</button></div></label>
      <label class="field"><span>Peso</span><div class="unit-input"><input type="number" step="0.01" placeholder="0,00"><strong>kg</strong></div></label>
      <label class="field"><span>Medida</span><div class="unit-input"><input type="number" step="0.1" placeholder="0,0"><strong>cm</strong></div></label>
      <label class="field field-wide"><span>Observações da Captura</span><textarea rows="2" placeholder="Nota específica sobre esta espécie ou exemplar…"></textarea></label>
    </div>`;
  captureList.appendChild(capture);
  capture.querySelector('.remove-capture').addEventListener('click', () => {
    capture.remove();
    if (!captureList.children.length) captureEmpty.hidden = false;
  });
  capture.querySelectorAll('.quantity-control button').forEach((button, index) => button.addEventListener('click', () => {
    const input = button.parentElement.querySelector('input');
    input.value = Math.max(1, Number(input.value) + (index === 0 ? -1 : 1));
  }));
  if (shouldScroll === true) capture.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

document.querySelectorAll('.add-capture').forEach(button => button.addEventListener('click', () => addCapture(true)));
document.querySelector('.new-location')?.addEventListener('click', () => document.querySelector('.location-drawer').classList.add('is-open'));
document.querySelectorAll('.close-location').forEach(button => button.addEventListener('click', () => document.querySelector('.location-drawer').classList.remove('is-open')));
document.querySelectorAll('.save-journey').forEach(button => button.addEventListener('click', () => {
  const toast = document.querySelector('.save-toast');
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
}));

document.addEventListener('keydown', event => {
  if (event.ctrlKey && event.key === 'Enter' && document.querySelector('#journey.is-active')) {
    document.querySelector('.save-journey').click();
  }
});

function showAuthState(id) {
  document.querySelectorAll('.access-state').forEach(state => state.classList.toggle('is-active', state.dataset.authState === id));
  document.querySelectorAll('[data-auth-target]').forEach(button => button.classList.toggle('is-active', button.dataset.authTarget === id && button.closest('.auth-state-switcher')));
}

document.querySelectorAll('[data-auth-target]').forEach(button => button.addEventListener('click', () => showAuthState(button.dataset.authTarget)));

const initialAuthState = new URLSearchParams(window.location.search).get('authState');
if (['login', 'magic', 'sent', 'invite', 'expired'].includes(initialAuthState)) {
  showAuthState(initialAuthState);
}

if (new URLSearchParams(window.location.search).get('capture') === '1') {
  addCapture(false);
}

