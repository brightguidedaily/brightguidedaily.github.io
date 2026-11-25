/* ================= SITE SETTINGS ================= */
var SITE = {
  betweenPostsEvery: 3   /* <-- numbering: har kitni posts ke baad between-posts ad aaye (3, 4 ya 5 kar sakte ho) */
};
/* =============== AD LOADER =======================
   Har ad position ki apni file hai ads/ folder mein.
   Us file mein apna ad code paste karo -> ad wahan show hoga.
   File khaali ho (sirf comment) -> slot gayab, koi khaali jagah nahi. */
function loadAd(slot){
  var file = slot.getAttribute('data-ad');
  if(!file) return;
  fetch(file).then(function(r){ return r.ok ? r.text() : ''; }).then(function(html){
    var clean = html.replace(/<!--[\s\S]*?-->/g,'').trim();
    if(!clean) return;               /* khaali file = koi space nahi */
    slot.innerHTML = '<span class="ad-label">Advertisement</span>' + clean;
    slot.classList.add('filled');
    /* ad code ke <script> tags ko chalane ke liye dobara banana padta hai */
    var scripts = slot.querySelectorAll('script');
    scripts.forEach(function(old){
      var s = document.createElement('script');
      for(var i=0;i<old.attributes.length;i++){ s.setAttribute(old.attributes[i].name, old.attributes[i].value); }
      s.text = old.text || old.textContent;
      old.parentNode.replaceChild(s, old);
    });
  }).catch(function(){});
}
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.ad-slot').forEach(loadAd);
  /* Mobile menu */
  var btn = document.querySelector('.menu-btn'), nav = document.querySelector('.main-nav');
  if(btn && nav){ btn.addEventListener('click', function(){ nav.classList.toggle('open'); }); }
  /* Between-posts numbering: home grid mein har N posts ke baad ad slot ghusao */
  var grid = document.querySelector('.post-grid');
  if(grid){
    var tpl = document.getElementById('between-ad-template');
    if(tpl){
      var cards = grid.querySelectorAll('.post-card'), n = SITE.betweenPostsEvery;
      for(var i = cards.length - 1; i >= 0; i--){
        if((i+1) % n === 0 && i !== cards.length - 1){
          var clone = tpl.content.cloneNode(true);
          grid.insertBefore(clone, cards[i].nextSibling);
        }
      }
      document.querySelectorAll('.ad-slot').forEach(loadAd);
    }
  }
  /* Search: home par cards filter */
  var form = document.querySelector('.search-in');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var q = form.querySelector('input').value.toLowerCase().trim();
      document.querySelectorAll('.post-card').forEach(function(c){
        c.style.display = (!q || c.textContent.toLowerCase().indexOf(q) > -1) ? '' : 'none';
      });
    });
  }
});
