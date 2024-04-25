// Añade un listener que actuara en la etiqueta del formulario
document.getElementById('cliente-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtiene los valores escritos dentro del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    // Genera un mensaje con los datos ingresados
    var mensaje = `Cliente registrado:<br>
                   <br>Nombre: ${nombre}<br>
                   Correo electrónico: ${email}<br>`;
    if (telefono) {
        mensaje += `Teléfono: ${telefono}`;
    }

    // Mostrar el mensaje mediante el contenedor div de mensaje
    document.getElementById('mensaje').innerHTML = mensaje;
});
