// Cierra el menú móvil cuando se elige una sección.
//
// Bootstrap abre y cierra el menú con el botón ☰, pero los enlaces del menú
// son anclas normales (#proyectos, #contacto…): al tocarlos, la página baja a
// la sección y el menú se queda abierto, tapando el contenido. Bootstrap no
// lo cierra solo porque no sabe que esos enlaces deberían cerrarlo.

const menu = document.getElementById('menu');

menu.querySelectorAll('.nav-link').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    // Solo actúa si el menú está abierto (en celular). En escritorio no hace nada.
    if (menu.classList.contains('show')) {
      // { toggle: false } evita que Bootstrap lo abra al crear la instancia.
      bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    }
  });
});
