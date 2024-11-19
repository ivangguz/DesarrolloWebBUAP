var numeroWhatsApp = "2221208255";
var mensajeWhatsApp = encodeURIComponent("Buen dia, quisiera obtener mas informacion");

function llamar(){
    window.location.href="tel:"+numeroWhatsApp;
}

function abrirChatWhatsApp() {
    var url = 'https://api.whatsapp.com/send?phone=' + numeroWhatsApp + '&text=' + mensajeWhatsApp;
    window.open(url, '_blank');
}

function enviarCorreo(){
    window.location.href = 'mailto:ivangguz@gmail.com';
}
  
function enviarCorreo2(){
    window.location.href = 'mailto:boot@company.com';
}
function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var especialidad = document.getElementById('especialidad').value;
    var descripcion = document.getElementById('descripcion').value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !apellido || !especialidad || !descripcion) {
        // Establecer el mensaje del modal
        document.getElementById('customAlertMessage').innerHTML = 'Por favor, completa <strong>todos los campos</strong> antes de enviar el mensaje.';

        // Mostrar el modal (requiere Bootstrap JS)
        var myModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
        myModal.show();
        return; // Detener la ejecución si algún campo está vacío
    }

    // Crear el mensaje a enviar
    var mensaje = `Hola, soy ${nombre} ${apellido}. Estoy interesado en ${especialidad}. Descripción: ${descripcion}.`;

    // Codificar el mensaje
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Crear la URL para WhatsApp con el número de teléfono
    var url = `https://wa.me/2211031410?text=${mensajeCodificado}`;

    // Abrir la URL en una nueva ventana
    window.open(url, '_blank');
}

document.getElementById('popoverButton').addEventListener('click', function () {
    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('customAlertModal'));
    myModal.show();
});
