if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new WOW().init();
}

document.querySelectorAll('.email-link').forEach(function (link) {
  var email = link.dataset.user + '@' + link.dataset.domain;
  link.href = 'mailto:' + email;
});
