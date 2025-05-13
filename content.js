// content.js
(function() {
  const body = document.body;
  if (!body) return;
  const computedBg = window.getComputedStyle(body).backgroundColor;
  // Check for transparent or unset backgrounds
  if (!computedBg || computedBg === 'rgba(0, 0, 0, 0)' || computedBg === 'transparent') {
    body.style.backgroundColor = '#f9f9f9'; // near-white
  }
})();
