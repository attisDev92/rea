function validarFormulario() {
    
    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('password').value;

    if (user == '') {
        alert("Debes ingresar un correo electrónico y una contraseña valida");
        return false;
    }

    if (pass === '') {
        alert("Debes ingresar una contraseña.");
        return false;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('content-type', 'application/x-ww-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let respuesta = xhr.responseText;

            if (respuesta === 'existe') {
                document.getElementById('mensaje-alert-usuario').style.display = "block";
            } else if (respuesta === 'incorrecta') {
                document.getElementById('mensaje-alert-pass').style.display = "block";
            } else if (respuesta === 'correcta') {
                window.location.href = 'perfil.html';
            }
        }
    };

    xhr.send('usuario =' + encodeURIComponent(user) + '& password=' + encodeURIComponent(pass));

    return false;
    
}
 