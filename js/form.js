$('#date-form').on('submit', function (event) {
    event.preventDefault();

    const nombre = $('#nombre').val().trim();
    const raza = $('#raza').val().trim();
    const email = $('#email').val().trim();
    const fecha = $('#fecha').val().trim();
    const hora = $('#hora').val();
    const servicios = [];
    $('.service-checkbox:checked').each(function () {
        servicios.push($(this).attr('id'));
    });

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

    if (!nombre) {
        showError($('#nombre'), 'El nombre es obligatorio.');
        isValid = false;
    } else {
        removeError($('#nombre'));
    }

    if (!email) {
        showError($('#email'), 'El email es obligatorio.');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        removeError($('#email'));
        showError($('#email'), 'El formato del email no es válido.');
        isValid = false;
    } else {
        removeError($('#email'));
    }

    if (!fecha) {
        showError($('#fecha'), 'La fecha es obligatoria.');
        isValid = false;
    } else {
        removeError($('#fecha'));
    }

    if (hora === 'Hora') {
        showError($('#hora'), 'La hora es obligatoria.');
        isValid = false;
    } else {
        removeError($('#hora'));
    }

    if (servicios.length === 0) {
        if (!$('#services-summary .error-message').length) {
            $('#services-summary').append('<div class="error-message text-danger mt-1">Debe seleccionar al menos un servicio</div>');
        }
        isValid = false;
    } else {
        $('#services-summary .error-message').remove();
    }

    if (isValid) {
        alert('¡Cita enviada con éxito!');
        
        $('#main-form')[0].reset();
        $('.service-checkbox').prop('checked', false);
        $('#services-summary').html('<p id="service-placeholder" class="text-muted">No se seleccionaron servicios</p>');
        $('#total-summary').text('$0');
        $('#confirmation-date').text('Seleccione una fecha').addClass('text-muted');
        $('#confirmation-time').text('Seleccione una hora').addClass('text-muted');
    }
});
