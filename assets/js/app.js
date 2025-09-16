
document.querySelectorAll('nav.tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('nav.tabs button').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('section.panel').forEach(p=>p.classList.remove('show'));
    btn.classList.add('active');
    document.querySelector('#'+btn.dataset.target).classList.add('show');
    window.scrollTo({top:document.querySelector('nav.tabs').offsetTop-8,behavior:'smooth'});
  });
});

// simple hero slideshow
const slides = Array.from(document.querySelectorAll('.hero img'));
let i=0;
function tick(){
  slides.forEach((s,idx)=>s.classList.toggle('active', idx===i));
  i=(i+1)%slides.length;
}
if(slides.length){ tick(); setInterval(tick, 3500); }

// Open Google Maps quick links
window.openZone = (place)=>{
  const q = encodeURIComponent(place + ", Tenerife");
  window.open("https://www.google.com/maps/search/?api=1&query=" + q, "_blank");
};
