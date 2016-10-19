// Opción 1: Inicializar cookieBar (genérico, en inglés)
$(document).ready(function() {
  $.cookieBar();
});

// Opción 2: Personalizar mensaje (indicar clase)
$(document).ready(function() {
  $('.cookie-message').cookieBar({
    closeButton: '.close'
  });
});
