const programs = window.PORTFOLIO_PROGRAMS || [];
const colors = { basalt: "#65e7f3", agentproof: "#ad92ff", ccm: "#72e6bb", cyrisk: "#f2c978" };

function projectPath(slug) { return `projects/${slug}.html`; }

function renderIndex() {
  const target = document.querySelector("[data-program-cards]");
  if (!target) return;
  target.innerHTML = programs.map((program, index) => `
    <a class="program-card" style="--accent:${colors[program.slug]}" href="${projectPath(program.slug)}" aria-label="Explore ${program.name}">
      <div class="program-top"><span class="ordinal">0${index + 1} / 04</span><span class="status">${program.status}</span></div>
      <span class="label">${program.eyebrow}</span><h3>${program.name}</h3><p class="headline">${program.headline}</p>
      <p class="summary">${program.summary}</p><span class="details-link">Explore project</span>
    </a>`).join("");
}

function renderDetail() {
  const slug = document.body.dataset.project;
  const program = programs.find(item => item.slug === slug);
  const target = document.querySelector("[data-project-detail]");
  if (!program || !target) return;
  document.title = `${program.name} — Systems Portfolio`;
  target.innerHTML = `
    <nav class="detail-nav"><a href="../index.html">← Portfolio</a><a href="https://github.com/kingsokafor777-droid">GitHub ↗</a></nav>
    <section class="detail-hero"><div><p class="eyebrow">${program.eyebrow}</p><h1>${program.name}</h1><p class="summary">${program.summary}</p></div><span class="release-pill">${program.status}</span></section>
    <aside class="boundary"><strong>Scope boundary</strong>${program.boundary}</aside>
    <section class="table-shell" aria-labelledby="architecture-title"><div class="table-heading"><div><h2 id="architecture-title">Repository architecture</h2><span>Full component inventory and current status.</span></div><span>${program.rows.length} repositories</span></div><p class="mobile-hint">Scroll horizontally to view all repository columns.</p>
    <table><thead><tr><th>#</th><th>Repository</th><th>What it owns</th><th>Track</th><th>Current status</th></tr></thead><tbody>${program.rows.map(row => `<tr><td>${row.id}</td><td><a href="https://github.com/kingsokafor777-droid/${row.repository}" rel="noreferrer">${row.repository} ↗</a></td><td>${row.description}</td><td class="track">${row.track}</td><td><span class="repo-status">${row.status}</span></td></tr>`).join("")}</tbody></table></section>`;
}

async function mountThread() {
  const canvas = document.querySelector("#thread-canvas");
  if (!canvas) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  try {
    const THREE = await import("https://unpkg.com/three@0.180.0/build/three.module.js");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(48, 1, .1, 100); camera.position.z = 5.7;
    const group = new THREE.Group(); scene.add(group);
    const positions = Array.from({ length: 27 }, (_, index) => new THREE.Vector3(Math.sin(index * 1.57) * 1.75, Math.cos(index * 2.19) * 1.25, Math.sin(index * .93) * .85));
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xbffbff, transparent: true, opacity: .78 });
    const geometry = new THREE.SphereGeometry(.045, 12, 12);
    positions.forEach(position => { const node = new THREE.Mesh(geometry, nodeMaterial); node.position.copy(position); group.add(node); });
    const linePositions = []; positions.forEach((position, index) => { for (let offset = 1; offset < 4 && index + offset < positions.length; offset += 1) linePositions.push(position.x, position.y, position.z, positions[index + offset].x, positions[index + offset].y, positions[index + offset].z); });
    const lineGeometry = new THREE.BufferGeometry(); lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    group.add(new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({ color: 0x70dbe8, transparent: true, opacity: .3 })));
    function resize() { const box = canvas.getBoundingClientRect(); renderer.setSize(box.width, box.height, false); camera.aspect = box.width / box.height; camera.updateProjectionMatrix(); }
    let frame; function render(time = 0) { group.rotation.y = time * .00017; group.rotation.x = Math.sin(time * .0001) * .12; renderer.render(scene, camera); if (!reducedMotion.matches) frame = requestAnimationFrame(render); }
    new ResizeObserver(resize).observe(canvas); resize(); render();
    reducedMotion.addEventListener("change", () => { cancelAnimationFrame(frame); render(); });
  } catch { canvas.style.display = "none"; }
}

renderIndex(); renderDetail(); mountThread();
