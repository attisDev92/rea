const btnsTipoRegistro = document.querySelectorAll('.btn--superior');
const btnAtras = document.getElementById('atras-btn');
const mainRegistro = document.getElementById('main-registro');
const formEspacios = document.getElementById('form-espacios');
const formUsuario = document.getElementById('form-usuarios');

const btnsPersoneria = document.querySelectorAll('.persona__tipo');

btnsTipoRegistro.forEach(btnRegistro => {

    btnRegistro.addEventListener('click', function(e){ 

        e.preventDefault();
        btnsTipoRegistro.forEach(btnRegistro => {
            btnRegistro.classList.add('btn--noselect');
        });

    const h2 = btnRegistro.querySelector('.btn--superior h2');
    const valorh2 = h2.textContent;
    
    if (valorh2 === 'Registro Espacio') {
        formEspacios.classList.remove('form__espacios--none');
        formEspacios.classList.add('form__espacios');
    } else if (valorh2 === 'Registro Usuario') {
        formUsuario.classList.remove('form__espacios--none');
        formUsuario.classList.add('form__espacios');
    }

    btnRegistro.classList.remove('btn--noselect');
    btnRegistro.classList.add('btn--select');

    mainRegistro.classList.add('main--select');

    btnAtras.classList.remove('btn--atras--none')
    btnAtras.classList.add('btn--atras');

    });
});

btnAtras.addEventListener('click',(e) => {
    const alertaAtras = confirm('Se perderá todo el progreso que hayas realizado. ¿Estás seguro/a de continuar?');

    if (alertaAtras) {
        location.reload();
    } else {
        e.preventDefault();
    }

});

//persona natural o juridica
btnsPersoneria.forEach(btnPersoneria => {

    btnPersoneria.addEventListener('click', function(e) {
        
        const alertaAtras = confirm('Se perderá todo el progreso que hayas realizado. ¿Estás seguro/a de continuar?');

        if (alertaAtras) {
            e.preventDefault();

            btnsPersoneria.forEach(btnPersoneria => {
                btnPersoneria.classList.remove('persona__tipo--active');
            });
            
            btnPersoneria.classList.add('persona__tipo--active');

        } else {
            e.preventDefault();
        }
    });
});

function espacioJuridico() {
    
}

