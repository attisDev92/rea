//modulo galeria
const enlaces = document.querySelectorAll(".beneficios--link");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const titulo = document.querySelector(".lightbox h2");
const parrafo = document.querySelector(".lightbox p");

const buttonCerrar = document.querySelector(".lightbox--cerrar");

enlaces.forEach ( (cadaEnlace, i) => {
    enlaces[i].addEventListener ("click", (e)=> {
        e.preventDefault();
        let rutaImg = cadaEnlace.querySelector(".contenedor__image--img").src;
        let contenidoTitulo = cadaEnlace.querySelector("h2").textContent;
        let contenidoParrafo = cadaEnlace.querySelector("p").textContent;

        lightbox.classList.add("lightbox--active");
        lightboxImg.setAttribute("src", rutaImg);
        titulo.innerHTML=contenidoTitulo;
        parrafo.innerHTML=contenidoParrafo;
    })
})

buttonCerrar.addEventListener("click", () => {
    lightbox.classList.remove("lightbox--active");
})