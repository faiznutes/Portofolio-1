// Full working client-side portfolio manager with burger menu + admin login (localStorage)
// Save this file replacing the broken one.

const STORAGE_KEY = 'portfolio_projects_v1';
const ADMIN_KEY = 'portfolio_admin';
let projects = [];
let currentFilter = 'all';

function id(){ return 'p_' + Math.random().toString(36).slice(2,9); }

const SAMPLE = [
  { id: id(), title: 'Brand Identity', type: 'design', media: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200', description: 'Logo and visual identity for a startup.', tags: ['brand','logo'] },
  { id: id(), title: 'Short Film Teaser', type: 'video', media: 'https://www.youtube.com/embed/ScMzIvxBSi4', description: 'Teaser edit for a narrative short.', tags: ['editing','color'] },
];

function load(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try { projects = JSON.parse(raw) || []; }
    catch { projects = SAMPLE; save(); }
  } else {
    projects = SAMPLE.slice();
    save();
  }
}

function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); }

function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

function isYoutube(url){ return /youtube\.com|youtu\.be/.test(url); }
function isVimeo(url){ return /vimeo\.com/.test(url); }
function embedUrl(url){
  if(isYoutube(url)){
    const v = url.includes('v=') ? url.split('v=')[1].split('&')[0] : url.split('/').pop();
    return `https://www.youtube.com/embed/${v}`;
  }
  if(isVimeo(url)){ return `https://player.vimeo.com/video/${url.split('/').pop()}`; }
  return url;
}

function thumbMarkup(p){
  if(!p || !p.media) return `<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200" alt="${escapeHtml(p.title)}">`;
  if(isYoutube(p.media) || isVimeo(p.media)) return `<iframe src="${embedUrl(p.media)}" frameborder="0" allowfullscreen></iframe>`;
  if(p.media.match(/\.(mp4|webm|ogg)$/)) return `<video src="${p.media}" controls muted playsinline></video>`;
  return `<img src="${p.media}" alt="${escapeHtml(p.title)}">`;
}

function render(filter = 'all'){
  const list = document.getElementById('projectList');
  if(!list) return;
  list.innerHTML = '';
  const set = projects.filter(p => filter === 'all' ? true : p.type === filter);
  set.forEach(p => {
    const el = document.createElement('article');
    el.className = 'project';
    el.innerHTML = `
      <div class="thumb">${thumbMarkup(p)}</div>
      <div class="card-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description || '')}</p>
      </div>
      <div class="card-foot">
        <a href="#" data-id="${p.id}" class="project-link view">View</a>
        <div class="tags">${(p.tags||[]).slice(0,3).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join(' ')}</div>
      </div>
    `;
    list.appendChild(el);
  });
  attachViewHandlers();
}

function attachViewHandlers(){
  document.querySelectorAll('.project-link.view').forEach(a=>{
    a.onclick = (e)=>{
      e.preventDefault();
      openView(a.dataset.id);
    };
  });
}

function openView(id){
  const p = projects.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('viewTitle').textContent = p.title;
  document.getElementById('viewDesc').textContent = p.description || '';
  const tagsEl = document.getElementById('viewTags'); tagsEl.innerHTML = '';
  (p.tags||[]).forEach(t=>{
    const el = document.createElement('span'); el.className='tag'; el.textContent = t; tagsEl.appendChild(el);
  });
  document.getElementById('viewBody').innerHTML = thumbMarkup(p);
  const vm = document.getElementById('viewModal'); vm.classList.remove('hidden'); vm.setAttribute('aria-hidden','false');

  document.getElementById('deleteProject').onclick = ()=>{
    if(!isAdmin()){ alert('Admin only'); return; }
    if(confirm('Delete project?')){ projects = projects.filter(x=>x.id!==id); save(); render(currentFilter); closeView(); }
  };
  document.getElementById('editProject').onclick = ()=>{ openEdit(p); };
}

function closeView(){ const vm = document.getElementById('viewModal'); if(vm){ vm.classList.add('hidden'); vm.setAttribute('aria-hidden','true'); } }

function openEdit(p){
  if(!isAdmin()){ location.href = 'login.html'; return; }
  openAdd();
  const f = document.getElementById('addForm');
  f.title.value = p.title; f.type.value = p.type; f.media.value = p.media || ''; f.description.value = p.description || ''; f.tags.value = (p.tags||[]).join(',');
  f.onsubmit = (e)=>{
    e.preventDefault();
    p.title = f.title.value.trim();
    p.type = f.type.value;
    p.media = f.media.value.trim();
    p.description = f.description.value.trim();
    p.tags = f.tags.value.split(',').map(s=>s.trim()).filter(Boolean);
    save(); render(currentFilter); closeAdd();
    return false;
  };
}

/* Add modal */
const addModal = document.getElementById('addModal');
const addForm = document.getElementById('addForm');
const closeAddBtn = document.getElementById('closeAdd');
const clearAllBtn = document.getElementById('clearAll');

function openAdd(){
  if(!isAdmin()){ location.href = 'login.html'; return; }
  if(addModal){ addModal.classList.remove('hidden'); addModal.setAttribute('aria-hidden','false'); }
  if(addForm) addForm.onsubmit = handleAdd;
}
function closeAdd(){
  if(addModal){ addModal.classList.add('hidden'); addModal.setAttribute('aria-hidden','true'); }
  if(addForm){ addForm.reset(); addForm.onsubmit = null; }
}
function handleAdd(e){
  e.preventDefault();
  const fd = new FormData(addForm);
  const obj = {
    id: id(),
    title: (fd.get('title')||'').trim(),
    type: fd.get('type'),
    media: (fd.get('media')||'').trim(),
    description: (fd.get('description')||'').trim(),
    tags: (fd.get('tags')||'').split(',').map(s=>s.trim()).filter(Boolean)
  };
  projects.unshift(obj);
  save(); render(currentFilter); closeAdd();
  return false;
}

/* Menu & Auth */
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const openAddBtn = document.getElementById('openAdd');

function isAdmin(){ return localStorage.getItem(ADMIN_KEY) === '1'; }

function updateAuthUI(){
  if(loginBtn) loginBtn.classList.toggle('hidden', isAdmin());
  if(logoutBtn) logoutBtn.classList.toggle('hidden', !isAdmin());
  if(openAddBtn) openAddBtn.classList.toggle('hidden', !isAdmin());
}

if(menu){ menu.classList.add('hidden'); menu.setAttribute('aria-hidden','true'); }
if(menuBtn){ menuBtn.setAttribute('aria-expanded','false'); }

if(menuBtn){
  menuBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    const hidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !hidden);
    menu.setAttribute('aria-hidden', String(!hidden));
    menuBtn.setAttribute('aria-expanded', String(hidden));
  });
}
// close when clicking outside
document.addEventListener('click', (e)=>{
  if(!menu || !menuBtn) return;
  if(menu.classList.contains('hidden')) return;
  if(!menu.contains(e.target) && !menuBtn.contains(e.target)){
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden','true');
    menuBtn.setAttribute('aria-expanded','false');
  }
});

if(openAddBtn){
  openAddBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!isAdmin()){ location.href = 'login.html'; return; }
    openAdd();
    if(menu){ menu.classList.add('hidden'); menu.setAttribute('aria-hidden','true'); menuBtn.setAttribute('aria-expanded','false'); }
  });
}

if(closeAddBtn) closeAddBtn.addEventListener('click', closeAdd);
if(clearAllBtn) clearAllBtn.addEventListener('click', ()=>{
  if(!isAdmin()){ alert('Admin only'); return; }
  if(confirm('Clear all projects?')){ projects = []; save(); render(); closeAdd(); }
});

if(document.getElementById('closeView')) document.getElementById('closeView').addEventListener('click', closeView);

if(logoutBtn) logoutBtn.addEventListener('click', ()=>{
  localStorage.removeItem(ADMIN_KEY);
  updateAuthUI();
  if(menu){ menu.classList.add('hidden'); menu.setAttribute('aria-hidden','true'); menuBtn.setAttribute('aria-expanded','false'); }
  location.href = 'index.html';
});

/* Filters */
document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render(currentFilter);
  });
});

/* keyboard */
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){ closeAdd(); closeView(); }
});

/* init */
load();
updateAuthUI();
render();