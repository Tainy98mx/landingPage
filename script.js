gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-texto h1', { opacity: 0, y: 40, duration: 1 });
gsap.from('.hero-texto p', { opacity: 0, y: 40, duration: 1, delay: 0.3 });
gsap.from('.hero-texto a', { opacity: 0, y: 40, duration: 1, delay: 0.6 });

gsap.from('.card-gusto', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: { trigger: '.gustos', start: 'top 80%' },
});

gsap.from('.skill', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: { trigger: '.skills', start: 'top 80%' },
});
