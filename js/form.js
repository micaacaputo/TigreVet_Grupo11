$('#date-form').on('submit', function (event) {
    event.preventDefault();

    const nombre = $('#nombre').val().trim();
    const raza = $('#raza').val().trim();
    const email = $('#email').val().trim();
    const fecha = $('#fecha').val().trim();
    const hora = $('#hora').val();
    const telefono = $('#tel').val().trim();
    const today = new Date().toISOString().split('T')[0];
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
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        showError($('#nombre'), 'El nombre solo puede contener letras.');
        isValid = false;
    } else {
        removeError($('#nombre'));
    }

    if (!email) {
        showError($('#email'), 'El email es obligatorio.');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError($('#email'), 'El formato del email no es válido.');
        isValid = false;
    } else {
        removeError($('#email'));
    }

    if (!telefono) {
        showError($('#tel'), 'El teléfono es obligatorio.');
        isValid = false;
    } else if (!/^\d+$/.test(telefono)) {
        showError($('#tel'), 'El teléfono solo puede contener números.');
        isValid = false;
    } else {
        removeError($('#tel'));
    }

    if (!fecha) {
        showError($('#fecha'), 'La fecha es obligatoria.');
        isValid = false;
    } else if (fecha < today) {
        showError($('#fecha'), 'La fecha no puede estar en el pasado.');
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
        alert('¡Cita creada con éxito!\nTu número de cita fue enviada a tu casilla de email');
        $('#date-form')[0].reset();
        $('.service-checkbox').prop('checked', false);
        $('#services-summary').html('<p id="service-placeholder" class="text-muted">No se seleccionaron servicios</p>');
        $('#total-summary').text('$0');
        $('#confirmation-date').text('Seleccione una fecha').addClass('text-muted');
        $('#confirmation-time').text('Seleccione una hora').addClass('text-muted');
    }
});

$('#tel').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

$('#nombre').on('input', function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
});

$('#raza').on('input', function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
});
