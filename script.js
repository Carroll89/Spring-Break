const tripStart = new Date('2026-04-01T15:00:00-04:00');
const countdownEl = document.getElementById('countdown');

function renderCountdown() {
  if (!countdownEl) return;

  const now = new Date();
  const diff = tripStart - now;

  if (diff <= 0) {
    countdownEl.textContent = 'Trip time!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
}

renderCountdown();
setInterval(renderCountdown, 60000);
