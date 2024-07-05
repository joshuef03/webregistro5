// Añade un listener que actuará en la etiqueta del formulario
document.getElementById('cliente-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtiene los valores escritos dentro del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    // Guardar los datos en localStorage con la fecha actual
    var clienteData = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        timestamp: new Date().getTime() // Guardar el tiempo actual en milisegundos
    };

    // Almacenar el clienteData en localStorage con una clave única
    var uniqueKey = 'cliente_' + clienteData.timestamp;
    localStorage.setItem(uniqueKey, JSON.stringify(clienteData));

    // Mostrar el mensaje con los datos ingresados
    mostrarDatosGuardados();
});

// Función para mostrar todos los datos almacenados
function mostrarDatosGuardados() {
    var mensaje = 'Datos guardados:<br>';
    var now = new Date().getTime();

    //Formato dia - hora - minuto * (segundo estatico, 1 1000)
    // 1 minuto en milisegundos
    var expirationTime = 1 * 60 * 1000; 

    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        if (clave.startsWith('cliente_')) { // Filtrar solo las claves que comienzan con 'cliente_'
            var storedData = localStorage.getItem(clave);
            var clienteObj = JSON.parse(storedData);

            // Verificar si los datos han expirado
            if (now - clienteObj.timestamp > expirationTime) {
                localStorage.removeItem(clave); // Eliminar datos expirados
            } else {
                mensaje += `<br>Nombre: ${clienteObj.nombre}<br>
                            Correo electrónico: ${clienteObj.email}<br>`;
                if (clienteObj.telefono) {
                    mensaje += `Teléfono: ${clienteObj.telefono}<br>`;
                }
                mensaje += '<br>';
            }
        }
    }

    document.getElementById('mensaje').innerHTML = mensaje;
}

// Recuperar y mostrar los datos almacenados al cargar la página
window.addEventListener('load', mostrarDatosGuardados);
