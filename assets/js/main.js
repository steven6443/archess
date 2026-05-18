if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new WOW().init();
}

document.querySelectorAll('.email-link').forEach(function (el) {
  el.href = 'mailto:' + el.dataset.user + '@' + el.dataset.domain;
});
