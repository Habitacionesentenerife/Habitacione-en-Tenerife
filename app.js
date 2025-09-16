
// simple carousel autoplay
(function(){
  const track=document.querySelector('.carousel-track');
  if(!track) return;
  let i=0;
  const slides=track.children.length;
  setInterval(()=>{
    i=(i+1)%slides;
    track.style.transform = `translateX(-${i*100}%)`;
  }, 3800);
})();

// lightbox for images
(function(){
  const lb=document.querySelector('.lightbox');
  if(!lb) return;
  const img=lb.querySelector('img');
  document.querySelectorAll('[data-lightbox] img').forEach(el=>{
    el.addEventListener('click',()=>{
      img.src = el.src;
      lb.classList.add('show');
    });
  });
  lb.addEventListener('click',()=>lb.classList.remove('show'));
})();
