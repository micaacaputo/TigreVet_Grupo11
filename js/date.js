const dateInput = document.getElementById('fecha');
const timeInput = document.getElementById('hora');
const confirmationDate = document.getElementById('confirmation-date');
const confirmationTime = document.getElementById('confirmation-time');

dateInput.addEventListener('change', () => {
    const selectedDate = dateInput.value; 
    if (selectedDate) {
        const formattedDate = new Date(selectedDate + 'T00:00:00').toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        confirmationDate.textContent = formattedDate;
        confirmationDate.classList.remove('text-muted');
    } else {
        confirmationDate.textContent = 'Seleccione una fecha';
        confirmationDate.classList.add('text-muted');
    }
});

timeInput.addEventListener('change', () => {
    const selectedTime = timeInput.value; 
    if (selectedTime && selectedTime !== 'Hora') {
        confirmationTime.textContent = selectedTime;
        confirmationTime.classList.remove('text-muted');
    } else {
        confirmationTime.textContent = 'Seleccione una hora';
        confirmationTime.classList.add('text-muted');
    }
});