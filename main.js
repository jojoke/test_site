document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  this.hidden = true;
  document.getElementById('form-feedback').hidden = false;
});
