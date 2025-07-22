ScrollReveal().reveal('section', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200,
  reset: false // set to true if you want the animation to repeat on scroll
});

ScrollReveal().reveal('.project-item', {
  distance: '40px',
  duration: 900,
  origin: 'bottom',
  interval: 300, // Stagger each item by 300ms
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.projects img', {
  scale: 0.85,
  duration: 1200,
  easing: 'ease',
  origin: 'bottom'
});

ScrollReveal().reveal('.hero h1, .hero p', {
  origin: 'top',
  distance: '30px',
  duration: 1000,
  interval: 200
});
