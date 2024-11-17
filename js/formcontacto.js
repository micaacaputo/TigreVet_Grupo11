$(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        const nombre = $('#nombre-contacto');
        const email = $('#email-contacto');
        const mensaje = $('#message');
        let isValid = true;

        const showError = (input, message) => {
            if (!input.next('.error-message').length) {
                input.addClass('is-invalid');
                input.after(`<div class="error-message text-danger mt-1">${message}</div>`);
            }
        };

        const removeError = (input) => {
            input.next('.error-message').remove();
            input.removeClass('is-invalid');
        };

        if (!nombre.val().trim()) {
            showError(nombre, 'El nombre es obligatorio');
            isValid = false;
        } else {
            removeError(nombre);
        }

        if (!email.val().trim()) {
            showError(email, 'El email es obligatorio');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.val())) {
            removeError(email);
            showError(email, 'El formato del email no es válido');
            isValid = false;
        } else {
            removeError(email);
        }

        if (!mensaje.val().trim()) {
            showError(mensaje, 'El mensaje es obligatorio');
            isValid = false;
        } else {
            removeError(mensaje);
        }

        if (isValid) {
            alert('¡Mensaje enviado con éxito!');
            nombre.val('');
            email.val('');
            mensaje.val('');
            $('.error-message').remove();
            $('.is-invalid').removeClass('is-invalid');
        }
    });

    $('#nombre-contacto').on('input', function () {
        $(this).val($(this).val().replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''));
    });
});