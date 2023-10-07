//modulo formulario contactos
const buttonFormulario = document.querySelector(".button--contacto");
const formulario =  document.querySelector(".contacto--formulario");
const buttonCerrarFormulario = document.getElementById("cerrar-formulario");

buttonFormulario.addEventListener("click", (e) => {
    e.preventDefault();
    formulario.classList.add("formulario--active");
});

buttonCerrarFormulario.addEventListener("click", (e) => {
    e.preventDefault();
    formulario.classList.remove("formulario--active");
});
