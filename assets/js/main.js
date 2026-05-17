if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new WOW().init();
}

document.querySelectorAll('.email-link').forEach(function (el) {
  var email = el.dataset.user + '@' + el.dataset.domain;
  el.addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = 'mailto:' + email;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});
