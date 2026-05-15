// ── Menú móvil ──
const menuBtn = document.getElementById('menuBtn');
const menuMovil = document.getElementById('menuMovil');

function cerrarMenu() {
  menuMovil.classList.remove('activo');
}

menuBtn.addEventListener('click', () => {
  menuMovil.classList.toggle('activo');
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !menuMovil.contains(e.target)) {
    cerrarMenu();
  }
});

// ── Nav activo según sección ──
const secciones = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('activo');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('activo');
        }
      });
    }
  });
}, { threshold: 0.4 });

secciones.forEach(seccion => observer.observe(seccion));

// ── Animación de entrada ──
const animados = document.querySelectorAll('section');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

animados.forEach(el => fadeObserver.observe(el));