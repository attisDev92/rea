const contenedorImagenes = document.querySelector('.contenedor__imagenes');
const puntosSlider = document.querySelectorAll('.puntos');

let slideIndex = 0;
let slideInterval;

mostrarSlide = (index) => {
  puntosSlider.forEach((punto) => punto.classList.remove('punto--activo'));
  puntosSlider[index].classList.add('punto--activo');
  const operation = index * -25;
  contenedorImagenes.style.transform = `translateX(${operation}%)`;
}

mostrarSiguienteSlide = () => {
  slideIndex++;
  if (slideIndex >= puntosSlider.length) {
	slideIndex = 0;
  }
  mostrarSlide(slideIndex);
}

puntosSlider.forEach((punto, i) => {
  punto.addEventListener('click', () => {
	clearInterval(slideInterval);
	slideIndex = i;
	mostrarSlide(slideIndex);
	slideInterval = setInterval(mostrarSiguienteSlide, 4500);
  });
});

slideInterval = setInterval(mostrarSiguienteSlide, 4500);