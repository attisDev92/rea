function validarFormulario() {
    const mail = document.getElementById('mail-usuario').value;
    const pass = document.getElementById('pass').value;

    if (mail === '' || pass === '') {
        alert('Por favor, complete todos los campos');
        return false;
    }

    const mensajeAlertMail = document.getElementById('mensaje-alert-mail');
    if (!validarEmail(mail)) {
        mensajeAlertMail.style.display = 'block';
        return false;
    } else {
        mensajeAlertMail.style.display = 'none';
    }

    const mensajeAlertPass = document.getElementById('mensaje-alert-pass');
    if (!validarPass(pass)){
        mensajeAlertPass.style.display = 'block';
        return false;
    } else {
        mensajeAlertMail.style.display = 'none';
    }

    return true;

}

function validarEmail(email) {
    let regexMail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regexMail.test(email);
}

function validarPass(pass) {
    let regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regexPass.test(pass);
}
