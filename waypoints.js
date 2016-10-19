$(document).ready(function() {
// Nuevo waypoint
var waypoint = new Waypoint({
  // Elemento objetivo
  element: document.getElementById('tres'),
  // Función disparada
  handler: function(direction) {
    alert('¡Has llegado!');
  }
});
});
