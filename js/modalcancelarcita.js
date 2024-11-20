document.addEventListener('DOMContentLoaded', () => {
    const cancelButton = document.querySelector('.modal-footer .btn-form');
    const appointmentNumberInput = document.getElementById('appointmentNumber');
    const modal = document.getElementById('staticBackdrop');

    cancelButton.addEventListener('click', () => {
        const appointmentNumber = appointmentNumberInput.value.trim();

        const showError = (input, message) => {
            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
                const error = document.createElement('div');
                error.className = 'error-message text-danger mt-1';
                error.textContent = message;
                input.insertAdjacentElement('afterend', error);
                input.classList.add('is-invalid');
            }
        };

        const removeError = (input) => {
            const error = input.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
                input.classList.remove('is-invalid');
            }
        };

        if (!appointmentNumber) {
            showError(appointmentNumberInput, 'El número de cita es obligatorio.');
        } else {
            removeError(appointmentNumberInput);

            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();

            appointmentNumberInput.value = '';

            alert('¡Cita cancelada con éxito!');
        }
    });

    appointmentNumberInput.addEventListener('input', () => {
        removeError(appointmentNumberInput);
    });
    appointmentNumberInput.addEventListener('input', () => {
        appointmentNumberInput.value = appointmentNumberInput.value.replace(/[^0-9]/g, '');
    });
});
