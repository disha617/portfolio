// Mobile menu toggle
const header = document.querySelector('.site-header');
const burger  = document.querySelector('.hamburger');
const nav     = document.querySelector('.nav');

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Smooth scrolling + active link highlight (scroll spy)
const links = document.querySelectorAll('.nav-links a');
links.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('nav-open');
  });
});

// Scroll spy
const sections = Array.from(document.querySelectorAll('section[id]'));
const onScroll = () => {
  const y = window.scrollY + 110; // offset for sticky header
  let current = sections[0].id;
  sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
  links.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();
