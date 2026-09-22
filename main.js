import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const cursor = { x: 0, y: 0 };
const smoothedCursor = { x: 0, y: 0 };

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let gateClosed = true;
let gateTransitioning = false;

const clock = new THREE.Clock();

const PARTICLE_COUNT_MAIN = 1500;
const PARTICLE_COUNT_GATE = 800;

const mainParticlesGeometry = new THREE.IcosahedronGeometry(1, 12);
const mainParticlesMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.02,
  transparent: true,
  opacity: 0.6,
  sizeAttenuation: true
});

const mainParticles = new THREE.Points(mainParticlesGeometry, mainParticlesMaterial);
scene.add(mainParticles);

const gateGeometry = new THREE.BufferGeometry();
const gatePositions = new Float32Array(PARTICLE_COUNT_GATE * 3);
const gateSpeeds = new Float32Array(PARTICLE_COUNT_GATE);
const gatePhases = new Float32Array(PARTICLE_COUNT_GATE);

for (let i = 0; i < PARTICLE_COUNT_GATE; i++) {
  const radius = 2 + Math.random() * 3;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  
  gatePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
  gatePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  gatePositions[i * 3 + 2] = radius * Math.cos(phi);
  
  gateSpeeds[i] = Math.random() * 0.5 + 0.2;
  gatePhases[i] = Math.random() * Math.PI * 2;
}

gateGeometry.setAttribute('position', new THREE.BufferAttribute(gatePositions, 3));

const gateMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.03,
  transparent: true,
  opacity: 0.4,
  sizeAttenuation: true
});

const gateParticles = new THREE.Points(gateGeometry, gateMaterial);
scene.add(gateParticles);

const centerGeometry = new THREE.IcosahedronGeometry(0.8, 2);
const centerMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
  transparent: true,
  opacity: 0.15
});
const centerMesh = new THREE.Mesh(centerGeometry, centerMaterial);
scene.add(centerMesh);

const pulseGeometry = new THREE.IcosahedronGeometry(0.6, 1);
const pulseMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
  transparent: true,
  opacity: 0.1
});
const pulseMesh = new THREE.Mesh(pulseGeometry, pulseMaterial);
scene.add(pulseMesh);

const counterGeometry = new THREE.OctahedronGeometry(1.5, 0);
const counterMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
  transparent: true,
  opacity: 0.05
});
const counterMesh = new THREE.Mesh(counterGeometry, counterMaterial);
scene.add(counterMesh);

const mainPositions = mainParticlesGeometry.attributes.position.array;
const mainSpeeds = new Float32Array(PARTICLE_COUNT_MAIN);
const mainPhases = new Float32Array(PARTICLE_COUNT_MAIN);

for (let i = 0; i < PARTICLE_COUNT_MAIN; i++) {
  mainSpeeds[i] = Math.random() * 0.02 + 0.005;
  mainPhases[i] = Math.random() * Math.PI * 2;
}

function animate() {
  requestAnimationFrame(animate);
  
  const elapsedTime = clock.getElapsedTime();

  if (gateClosed) {
    centerMesh.rotation.z = elapsedTime * 0.1;
    
    const gatePos = gateGeometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT_GATE; i++) {
      const idx = i * 3;
      gatePos[idx + 1] += Math.sin(elapsedTime * gateSpeeds[i]) * 0.002;
      gatePos[idx] += Math.cos(elapsedTime * gateSpeeds[i]) * 0.002;
    }
    gateGeometry.attributes.position.needsUpdate = true;
  }

  if (gateTransitioning && !gateClosed || document.hidden) {
    renderer.render(scene, camera);
    return;
  }

  smoothedCursor.x += (cursor.x - smoothedCursor.x) * 0.05;
  smoothedCursor.y += (cursor.y - smoothedCursor.y) * 0.05;

  centerMesh.rotation.y = elapsedTime * 0.2 + smoothedCursor.x * 0.5;
  centerMesh.rotation.x = smoothedCursor.y * 0.5;
  
  counterMesh.rotation.z = -elapsedTime * 0.5;
  
  pulseMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.05);

  for (let i = 0; i < PARTICLE_COUNT_MAIN; i++) {
    const idx = i * 3;
    const x = mainPositions[idx];
    const z = mainPositions[idx + 2];
    
    const radius = Math.sqrt(x * x + z * z);
    const theta = Math.atan2(z, x) + 0.01 * mainSpeeds[i];
    const newRadius = radius * 0.999 + Math.sin(elapsedTime + i) * 0.01;
    
    mainPositions[idx] = Math.cos(theta) * (newRadius < 2 ? 15 : newRadius);
    mainPositions[idx + 2] = Math.sin(theta) * (newRadius < 2 ? 15 : newRadius);
    mainPositions[idx + 1] += Math.sin(elapsedTime * mainSpeeds[i]) * 0.01;

    const cx = mainPositions[idx] - smoothedCursor.x * 10;
    const cy = mainPositions[idx + 1] - smoothedCursor.y * 10;
    const dist = Math.sqrt(cx * cx + cy * cy);
    
    if (dist < 3) {
      const force = (3 - dist) / 3;
      mainPositions[idx] += cx * force * 0.2;
      mainPositions[idx + 1] += cy * force * 0.2;
    }
  }
  mainParticlesGeometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();

document.addEventListener('mousemove', (e) => {
  cursor.x = (e.clientX / window.innerWidth) * 2 - 1;
  cursor.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
  if (cursorDot && cursorOutline) {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
  }
});

document.addEventListener('mousedown', () => {
  cursorDot?.classList.add('button-mode');
  cursorOutline?.classList.add('button-mode');
});

document.addEventListener('mouseup', () => {
  cursorDot?.classList.remove('button-mode');
  cursorOutline?.classList.remove('button-mode');
});

const gateOverlay = document.getElementById('gate-overlay');
const startBtn = document.getElementById('start-btn');
const app = document.getElementById('app');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const siteHeader = document.getElementById('site-header');

startBtn.addEventListener('click', () => {
  gateClosed = false;
  gateTransitioning = true;
  
  gsap.to(gateOverlay, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.inOut',
    onComplete: () => {
      gateOverlay.style.display = 'none';
      gateTransitioning = false;
      app.style.opacity = '1';
      app.style.pointerEvents = 'all';
      siteHeader.classList.add('visible');
      musicToggle.classList.add('visible');
      
      if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
      }
    }
  });
});

let musicPlaying = false;
musicToggle.addEventListener('click', () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicToggle.querySelector('.volume-up').style.display = 'block';
    musicToggle.querySelector('.volume-x').style.display = 'none';
  } else {
    bgMusic.play();
    musicToggle.querySelector('.volume-up').style.display = 'none';
    musicToggle.querySelector('.volume-x').style.display = 'block';
  }
  musicPlaying = !musicPlaying;
});

const sections = document.querySelectorAll('section');
const sectionContents = document.querySelectorAll('.content');

sections.forEach((section, i) => {
  const content = section.querySelector('.content');
  if (!content) return;
  
  ScrollTrigger.create({
    trigger: section,
    start: 'top 70%',
    end: 'bottom 30%',
    onEnter: () => content.classList.add('active'),
    onLeaveBack: () => content.classList.remove('active'),
    onLeave: () => content.classList.add('active'),
    onEnterBack: () => content.classList.add('active')
  });
  
  if (section.id === 'proof') {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      onEnter: () => animateStats()
    });
  }
});

function animateStats() {
  const statNums = document.querySelectorAll('.stat-num[data-live]');
  statNums.forEach(stat => {
    const target = stat.textContent;
    const num = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[\d+]/g, '');
    let current = 0;
    const increment = num / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        current = num;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current) + suffix;
    }, 30);
  });
}

const nextSectionBtn = document.querySelector('.next-section');
if (nextSectionBtn) {
  nextSectionBtn.addEventListener('click', () => {
    const proofSection = document.getElementById('proof');
    if (proofSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: proofSection, offsetY: 0 },
        ease: 'power4.inOut'
      });
    }
  });
}

const openJoinBtn = document.querySelector('.open-join');
const joinOverlay = document.getElementById('join-overlay');
const closeJoinBtn = document.getElementById('close-join-btn');
const joinForm = document.getElementById('join-form');

function openJoin() {
  joinOverlay.classList.add('active');
  closeJoinBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
  restoreDraft('join');
}

function closeJoin() {
  joinOverlay.classList.remove('active');
  closeJoinBtn.classList.remove('active');
  document.body.style.overflow = '';
}

openJoinBtn?.addEventListener('click', openJoin);
closeJoinBtn?.addEventListener('click', closeJoin);

const openIdeaBtn = document.getElementById('open-idea-btn');
const ideaOverlay = document.getElementById('idea-overlay');
const closeIdeaBtn = document.getElementById('close-idea-btn');
const ideaForm = document.getElementById('idea-form');

function openIdea() {
  ideaOverlay.classList.add('active');
  closeIdeaBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
  restoreDraft('idea');
}

function closeIdea() {
  ideaOverlay.classList.remove('active');
  closeIdeaBtn.classList.remove('active');
  document.body.style.overflow = '';
}

openIdeaBtn?.addEventListener('click', openIdea);
closeIdeaBtn?.addEventListener('click', closeIdea);

function saveDraft(formType, data) {
  localStorage.setItem(`foi_${formType}_draft`, JSON.stringify(data));
}

function restoreDraft(formType) {
  const draft = localStorage.getItem(`foi_${formType}_draft`);
  if (draft) {
    const data = JSON.parse(draft);
    const form = formType === 'join' ? joinForm : ideaForm;
    Object.keys(data).forEach(key => {
      const input = form?.querySelector(`[name="${key}"]`);
      if (input) input.value = data[key];
    });
  }
}

function clearDraft(formType) {
  localStorage.removeItem(`foi_${formType}_draft`);
}

joinForm?.addEventListener('input', () => {
  const formData = new FormData(joinForm);
  const data = Object.fromEntries(formData);
  saveDraft('join', data);
});

ideaForm?.addEventListener('input', () => {
  const formData = new FormData(ideaForm);
  const data = Object.fromEntries(formData);
  saveDraft('idea', data);
});

const JOIN_WEBHOOK = 'https://discord.com/api/webhooks/1472514532529279050/8qj5OlwKCq-exUhde0v-ilYp6zwX8yxXMfYWbG09FenJp9Qj4RzriTQ3zsirhP5YzerA';
const IDEA_WEBHOOK = 'https://discord.com/api/webhooks/1472514532529279050/8qj5OlwKCq-exUhde0v-ilYp6zwX8yxXMfYWbG09FenJp9Qj4RzriTQ3zsirhP5YzerA';
const DISCORD_INVITE = 'https://discord.gg/faceofinnovator';
const DISCORD_ROLE = '<@&1472350694118916247>';

async function submitJoinForm(e) {
  e.preventDefault();
  const submitBtn = joinForm.querySelector('.submit-btn');
  const closeBtn = document.querySelector('.close-join');
  submitBtn.textContent = 'SENDING...';
  submitBtn.disabled = true;
  if (closeBtn) closeBtn.disabled = true;
  
  const formData = new FormData(joinForm);
  const data = Object.fromEntries(formData);
  
  const payload = {
    thread_name: `Join: ${data.full_name}`,
    content: `${DISCORD_ROLE} ## 🎯 New Member Application: ${data.full_name}

**Contact Info**
> 📧 Email: ${data.email}
> 📱 Phone: ${data.phone}
> 🏛️ Branch: ${data.department || 'N/A'}

**Social & Craft**
> 💻 GitHub: ${data.github}
> 🔗 LinkedIn: ${data.linkedin || 'N/A'}
> ⚡ Coding Profile: ${data.coding || 'N/A'}
> 🎨 Portfolio: ${data.portfolio || 'N/A'}

**The Story**
**Q: Started but not finished?**
${data.finished_story}

**Q: 30-day vision with zero restrictions?**
${data.vision_story}

**Build Link:** ${data.build_link || 'None provided'}`
  };
  
  try {
    const response = await fetch(JOIN_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error('Discord response was not ok');
    
    const formScroll = joinForm.querySelector('.form-scroll');
    gsap.to(formScroll, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        formScroll.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 40vh; text-align: center;">
            <h1>JOINED.</h1>
            <p style="color: #fff; max-width: 100%; margin-bottom: 1rem;">Opening Discord community...</p>
            <p style="color: #888; max-width: 100%; margin-bottom: 2rem;">If it didn't open, <a href="${DISCORD_INVITE}" target="_blank" style="color: #fff;">click here to join</a>.</p>
            <button class="close-success-btn glass-button" style="background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2);">CLOSE</button>
          </div>
        `;
        window.open(DISCORD_INVITE, '_blank');
        formScroll.querySelector('.close-success-btn').addEventListener('click', closeJoin);
        gsap.to(formScroll, { opacity: 1, y: 0, duration: 0.5 });
        setTimeout(closeJoin, 3000);
        clearDraft('join');
      }
    });
  } catch (error) {
    console.error('Submission Error:', error);
    submitBtn.textContent = 'ERROR. TRY AGAIN.';
    submitBtn.disabled = false;
    if (closeBtn) closeBtn.disabled = false;
  }
}

async function submitIdeaForm(e) {
  e.preventDefault();
  const submitBtn = ideaForm.querySelector('.submit-btn');
  const closeBtn = document.querySelector('.close-idea');
  submitBtn.textContent = 'SENDING...';
  submitBtn.disabled = true;
  if (closeBtn) closeBtn.disabled = true;
  
  const formData = new FormData(ideaForm);
  const data = Object.fromEntries(formData);
  
  const payload = {
    thread_name: `Idea: ${data.idea_title}`,
    content: `${DISCORD_ROLE} ## 💡 New Project Concept: ${data.idea_title}

**Contact**
> 👤 From: ${data.contact_info}

**The Breakdown**
**Q: The Problem?**
${data.problem_story}

**Q: The Solution?**
${data.concept_story}

**⚡ Tech Stack:** ${data.tech_stack || 'None specified'}

**🔗 Proof of Craft/Link:** ${data.github_link || 'None provided'}`
  };
  
  try {
    const response = await fetch(IDEA_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error('Discord response was not ok');
    
    const formScroll = ideaForm.querySelector('.form-scroll');
    gsap.to(formScroll, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        formScroll.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 40vh; text-align: center;">
            <h1>SENT.</h1>
            <p style="color: #fff; max-width: 100%; margin-bottom: 1rem;">Opening Discord community...</p>
            <p style="color: #888; max-width: 100%; margin-bottom: 2rem;">If it didn't open, <a href="${DISCORD_INVITE}" target="_blank" style="color: #fff;">click here to join</a>.</p>
            <button class="close-success-btn glass-button" style="background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2);">CLOSE</button>
          </div>
        `;
        window.open(DISCORD_INVITE, '_blank');
        formScroll.querySelector('.close-success-btn').addEventListener('click', closeIdea);
        gsap.to(formScroll, { opacity: 1, y: 0, duration: 0.5 });
        setTimeout(closeIdea, 3000);
        clearDraft('idea');
      }
    });
  } catch (error) {
    console.error('Submission Error:', error);
    submitBtn.textContent = 'ERROR. TRY AGAIN.';
    submitBtn.disabled = false;
    if (closeBtn) closeBtn.disabled = false;
  }
}

joinForm?.addEventListener('submit', submitJoinForm);
ideaForm?.addEventListener('submit', submitIdeaForm);

document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 0 },
        ease: 'power4.inOut'
      });
    }
  });
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden && bgMusic && !bgMusic.paused) {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.querySelector('.volume-up').style.display = 'block';
    musicToggle.querySelector('.volume-x').style.display = 'none';
  }
});

const hoverElements = document.querySelectorAll('a, button, .project, .pill, .ghost-button, .glass-button, .close-overlay, .audio-control');

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorOutline?.classList.add('next-mode');
  });
  el.addEventListener('mouseleave', () => {
    cursorOutline?.classList.remove('next-mode');
  });
});