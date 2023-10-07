const btnRecurso = document.querySelectorAll(".button--contenido");
const divContenido = document.querySelectorAll(".recursos__contenido");

btnRecurso.forEach( (button, i) => {
    button.addEventListener("click", ()=> {

        btnRecurso.forEach( (btnActivo, j)=> btnActivo.classList.remove("button--contenido--activo"));

        divContenido.forEach( (contenedor) => contenedor.classList.remove("recursos__contenido--activo"));

        btnRecurso[i].classList.add("button--contenido--activo");

        divContenido[i].classList.add("recursos__contenido--activo");
    });
});