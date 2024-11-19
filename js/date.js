const dateInput = document.getElementById('fecha');
const confirmationDate = document.getElementById('confirmation-date');

dateInput.addEventListener('change', () => {
    const selectedDate = dateInput.value;
    const today = new Date().setHours(0, 0, 0, 0);
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-message text-danger mt-1';

    const existingError = document.querySelector('#fecha + .error-message');
    if (existingError) existingError.remove();

    if (selectedDate) {
        const selectedDateObj = new Date(selectedDate + 'T00:00:00');
        if (selectedDateObj >= today) {
            confirmationDate.textContent = new Date(selectedDateObj).toLocaleDateString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            confirmationDate.classList.remove('text-muted', 'text-danger');
        } else {
            confirmationDate.textContent = 'Seleccione una fecha';
            confirmationDate.classList.add('text-muted');

            errorContainer.textContent = 'La fecha no puede estar en el pasado.';
            dateInput.insertAdjacentElement('afterend', errorContainer);
        }
    } else {
        confirmationDate.textContent = 'Seleccione una fecha';
        confirmationDate.classList.add('text-muted');
    }
});
