(function () {
  var stored;
  try { stored = localStorage.getItem('ae-cookies'); } catch (e) {}
  if (stored) return;

  var onPrivacy = /\/privacy\.html$|^\/privacy\.html$/.test(location.pathname);
  var policyLink = onPrivacy
    ? 'Privacy Policy'
    : '<a href="privacy.html" target="_blank" style="color:#CB4A2F;border-bottom:1px solid rgba(203,74,47,0.4);">Privacy Policy<\/a>';

  var b = document.createElement('div');
  b.id = 'ae-cookie-banner';
  b.style.cssText = [
    'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:999',
    'background:#1B1714', 'border-top:1px solid rgba(242,238,230,0.12)',
    'padding:18px 64px', 'display:flex', 'align-items:center',
    'justify-content:space-between', 'gap:24px', 'flex-wrap:wrap'
  ].join(';');

  var msg = document.createElement('span');
  msg.style.cssText = [
    "font-family:'Space Mono',monospace", 'font-size:11px',
    'letter-spacing:0.08em', 'color:#9A948A', 'max-width:680px', 'line-height:1.6'
  ].join(';');
  msg.innerHTML = 'We use cookies to operate this site and understand how it’s used. By continuing, you agree to our ' + policyLink + '.';

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'ACCEPT';
  btn.className = 'cookie-btn';
  btn.style.cssText = [
    'flex-shrink:0', "font-family:'Space Mono',monospace", 'font-size:11px',
    'letter-spacing:0.14em', 'background:#CB4A2F', 'color:#F2EEE6',
    'border:none', 'border-radius:2px', 'padding:10px 18px',
    'cursor:pointer', 'transition:background .2s'
  ].join(';');
  btn.addEventListener('click', function () {
    try { localStorage.setItem('ae-cookies', '1'); } catch (e) {}
    b.remove();
  });

  b.appendChild(msg);
  b.appendChild(btn);
  document.body.appendChild(b);
})();
