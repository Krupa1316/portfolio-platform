async function loadProjects() {
  const el = document.getElementById('projects');
  el.innerHTML = '<p>Loading projects…</p>';
  try {
    const res = await fetch('/api/projects');
    const projects = await res.json();
    if (!projects.length) el.innerHTML = '<p>No projects yet.</p>';
    else el.innerHTML = projects.map(p => projectCard(p)).join('\n');
  } catch (e) {
    el.innerHTML = '<p>Failed to load projects.</p>';
  }
}

function projectCard(p) {
  return `
    <article class="card">
      <img src="${p.image || '/placeholder.png'}" alt="${escapeHtml(p.title)}" />
      <div class="card-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <p class="meta">Tech: ${escapeHtml(p.tech.join(', '))}</p>
        <p><a href="${p.url}" target="_blank">Live</a> • <a href="${p.repo}" target="_blank">Repo</a></p>
      </div>
    </article>
  `;
}

function escapeHtml(s){
  if(!s) return '';
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

window.addEventListener('DOMContentLoaded', loadProjects);
