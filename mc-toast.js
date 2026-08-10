/* ============================================================
   MC-TOAST.JS — toast "Accomplissement obtenu !" façon Minecraft
   Partagé par toutes les pages (index, chronologie, vitrine).
   ============================================================ */

function showAchievementToast(icon, top, bottom, delay = 0) {
  setTimeout(() => {
    let wrap = document.querySelector('.mc-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'mc-toast-wrap';
      wrap.innerHTML = '<div class="mc-toast" id="mc-toast"></div>';
      document.body.appendChild(wrap);
    }
    const toast = document.getElementById('mc-toast');
    toast.innerHTML = `
      <div class="mc-toast-icon">${icon}</div>
      <div class="mc-toast-text">
        <div class="mc-toast-top">${top}</div>
        <div class="mc-toast-bottom">${bottom}</div>
      </div>`;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3800);
  }, delay);
}
