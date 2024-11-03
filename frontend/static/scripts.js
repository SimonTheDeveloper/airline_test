async function fetchFlights() {
    const response = await fetch('http://localhost:8000/flights');
    const flights = await response.json();
    const flightListDiv = document.getElementById('flight-list');
    const flightTemplate = document.getElementById('flight-template').innerHTML;

    flights.forEach(flight => {
        const flightHTML = flightTemplate
            .replace('{{flight_id}}', flight.flight_id)
            .replace('{{source}}', flight.source)
            .replace('{{sink}}', flight.sink)
            .replace('{{airline}}', flight.airline)
            .replace('{{departure_dt}}', flight.departure_dt)
            .replace('{{arrival_dt}}', flight.arrival_dt)
            .replace('{{number_of_stops}}', flight.number_of_stops)
            .replace('{{emissions}}', flight.emissions)
            .replace('{{price}}', flight.price);

        flightListDiv.insertAdjacentHTML('beforeend', flightHTML);
    });
}

fetchFlights();