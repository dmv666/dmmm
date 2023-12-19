//PERFIL
document.addEventListener('DOMContentLoaded', function() {
    const nombreCompletoElement = document.getElementById('nombreCompleto');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const correoInput = document.getElementById('correo');

    // Obtener los valores guardados en el localStorage y establecerlos en los campos si existen
    const storedNombre = localStorage.getItem('nombre');
    const storedApellido = localStorage.getItem('apellido');
    const storedCorreo = localStorage.getItem('correo');

    // Establecer valores predeterminados si no hay valores en el localStorage
    const defaultNombre = 'Juan'; // Valor predeterminado para el nombre
    const defaultApellido = 'Mendez'; // Valor predeterminado para el apellido

    if (storedNombre) {
        nombreInput.value = storedNombre;
    } else {
        nombreInput.value = defaultNombre;
    }

    if (storedApellido) {
        apellidoInput.value = storedApellido;
    } else {
        apellidoInput.value = defaultApellido;
    }

    if (storedCorreo) {
        correoInput.value = storedCorreo;
    }

    // Actualizar el nombre en el encabezado
    const nombreCompleto = `${nombreInput.value} ${apellidoInput.value}`;
    nombreCompletoElement.textContent = nombreCompleto;

    document.getElementById('guardar').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del botón de envío

        // Obtener los valores del formulario
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const correo = correoInput.value;

        // Actualizar el nombre en el encabezado
        const nombreCompleto = `${nombre} ${apellido}`;
        nombreCompletoElement.textContent = nombreCompleto;
        alert("Actualizado Correctamente")

        // Guardar los valores en el localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('apellido', apellido);
        localStorage.setItem('correo', correo);
    });
});


