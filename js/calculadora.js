$(document).ready(function () {
    const $servicesContainer = $('#services-summary');
    const $totalElement = $('#total-summary');
    const $checkboxes = $('.service-checkbox');

    function updateSummary() {
        $servicesContainer.empty();
        let total = 0;

        $checkboxes.each(function () {
            if ($(this).is(':checked')) {
                const label = $(this).next('label').text();
                const serviceName = label.split(':')[0].trim();
                const servicePrice = parseInt($(this).data('price'));
                total += servicePrice;

                const $row = $('<div class="row mb-3"></div>');
                const $nameCol = $('<div class="col"></div>').text(serviceName);
                const $priceCol = $('<div class="col text-end"></div>').text(`$${servicePrice.toLocaleString('es-AR')}`);

                $row.append($nameCol, $priceCol);

                $servicesContainer.append($row);
            }
        });

        if ($servicesContainer.is(':empty')) {
            $servicesContainer.append('<p id="service-placeholder" class="text-muted">No se seleccionaron servicios</p>');
        }

        $totalElement.text(`$${total.toLocaleString('es-AR')}`);
    }

    $checkboxes.on('change', updateSummary);
});
