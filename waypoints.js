$(document).ready(function() {
  // Nuevo waypoint
  var waypoint = new Waypoint({
    // Elemento objetivo
    element: document.getElementById('tres'),
    // Función disparada
handler: function(direction) {
      console.log('¡Has pasado por aquí!');
      if (direction == 'down') {
        console.log('¡Hacia abajo!');
this.destroy(); // Sólo lo detectará una vez
    }
  });
});
