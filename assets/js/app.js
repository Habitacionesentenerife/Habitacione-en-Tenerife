// Navegación por pestañas (en caso de usar tabs)
document.querySelectorAll('nav.tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('nav.tabs button').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('section.panel').forEach(p=>p.classList.remove('show'));
    btn.classList.add('active');
    document.querySelector('#'+btn.dataset.target).classList.add('show');
    window.scrollTo({top:document.querySelector('nav.tabs').offsetTop-8,behavior:'smooth'});
  });
});

// Reproductor de hero (slideshow)
const slides = Array.from(document.querySelectorAll('.hero img'));
let i=0;
function tick(){
  slides.forEach((s,idx)=>s.classList.toggle('active', idx===i));
  i=(i+1)%slides.length;
}
if(slides.length){
  tick();
  setInterval(tick, 3500);
}

// Abrir zonas en Google Maps (utilizado en otras páginas)
window.openZone = (place)=>{
  const q = encodeURIComponent(place + ", Tenerife");
  window.open("https://www.google.com/maps/search/?api=1&query=" + q, "_blank");
};

// Buscador de zonas: muestra un mensaje cuando se selecciona un municipio
document.addEventListener('DOMContentLoaded', ()=>{
  const municipioSelect = document.getElementById('municipioSelect');
  if(municipioSelect){
    municipioSelect.addEventListener('change', function(){
      const resultado = document.getElementById('zonasResultado');
      const selected = this.options[this.selectedIndex];
      if(this.value){
        resultado.textContent = `Actualmente ofrecemos habitaciones en ${selected.text}. Contacta para disponibilidad.`;
      } else {
        resultado.textContent = '';
      }
    });
  }
});