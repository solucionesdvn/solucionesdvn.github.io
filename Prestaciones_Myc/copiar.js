function copiar(id) {
    // Obtener el texto del elemento por su ID
    var texto = document.getElementById(id).innerText;

    // Usar la Clipboard API para copiar el texto al portapapeles
    navigator.clipboard.writeText(texto).then(function() {
        // Cambiar el fondo del modal a verde
        var modalContent = document.querySelector('#myModal .modal-content');
        modalContent.classList.add('modal-success');

        // Establecer un retraso antes de cerrar el modal
        setTimeout(function() {
            var modal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
            modal.hide();
            
            // Eliminar la clase de éxito después de cerrar el modal
            setTimeout(function() {
                modalContent.classList.remove('modal-success');
            }, 200); // Tiempo para el efecto de fondo verde
        }, 200); // Tiempo antes de cerrar el modal

    }).catch(function(error) {
        // Mostrar un mensaje de error si algo sale mal
        console.error("Error al copiar el texto: ", error);
        alert("No se pudo copiar el texto. Inténtalo de nuevo.");
    });
}
