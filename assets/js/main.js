if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new WOW().init();
}

document.querySelectorAll('.email-link').forEach(function (el) {
  var email = el.dataset.user + '@' + el.dataset.domain;
  el.addEventListener('click', function () {
    window.location.href = 'mailto:' + email;
  });
});
