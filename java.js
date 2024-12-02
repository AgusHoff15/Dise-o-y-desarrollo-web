const boton = document.querySelector(".switch_background");

if (localStorage.getItem('modoNocturno') === 'activo') {
    document.body.classList.add('active');
    boton.classList.add('active');
}

boton.addEventListener("click", () => {
    boton.classList.toggle("active");
    document.body.classList.toggle("active");

    if (document.body.classList.contains('active')) {
        localStorage.setItem('modoNocturno', 'activo');
    } else {
        localStorage.setItem('modoNocturno', 'inactivo');
    }
});

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

