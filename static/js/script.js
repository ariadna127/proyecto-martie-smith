document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if(header.classList.contains('header-testimonials')){
      const animatedDivs = document.querySelectorAll('.testimonio');
      const titleTestimonials = document.querySelector('.h2-testimonials');
      titleTestimonials.classList.add('active-animation');


      function onScroll() {
      animatedDivs.forEach(div => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          div.classList.add('active-animation');
        }
      });
  }
  
    // Detectar al cargar
      onScroll();
  
    // Detectar al hacer scroll
      window.addEventListener('scroll', onScroll);
    }
    
    
  });


const nav = document.querySelector('#nav');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');


openBtn.addEventListener('click', ()=>{
  nav.classList.add('visible');
})

closeBtn.addEventListener('click', ()=>{
  nav.classList.remove('visible');
})


// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
  // Verifica si el clic ocurrió fuera del menú y fuera del botón de apertura
  if(nav.classList.contains('visible')){
    if (!nav.contains(event.target) && event.target !== openBtn) {
      nav.classList.remove('visible');
  }
  }

});