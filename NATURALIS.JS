document.addEventListener('DOMContentLoaded', () => {
    const elementosCarrusel = document.querySelectorAll('.carrusel');
    M.Carrusel.init(elementosCarrusel, {
        duration: 150
    });
});