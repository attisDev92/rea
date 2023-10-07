const tituloRequisito = document.querySelectorAll(".requisitos__subtitulo");
const contenidoRequisito = document.querySelectorAll(".requisitos__lista");

tituloRequisito.forEach((cadaTitulo, i) => {
  cadaTitulo.addEventListener("click", () => {

    contenidoRequisito.forEach((cadaContenido, j) => {
      cadaContenido.classList.remove("requisitos__lista--active");
    })

    contenidoRequisito[i].classList.add("requisitos__lista--active");
  })
});