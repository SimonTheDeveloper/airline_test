async function fetchFlights() {
    const response = await fetch('http://localhost:8000/flights');
    const flights = await response.json();
    const flightListDiv = document.getElementById('flight-list');
    const moreFlightsDiv = document.getElementById('more-flights');
    const flightTemplate = document.getElementById('flight-template').innerHTML;

    // Clear previous content
    flightListDiv.innerHTML = '';
    moreFlightsDiv.innerHTML = '';

    // Display the first five flights
    flights.slice(0, 5).forEach(flight => {
        const flightHTML = flightTemplate
            .replace('{{flight_id}}', flight.flight_id)
            .replace('{{source}}', flight.source)
            .replace('{{sink}}', flight.sink)
            .replace('{{airline}}', flight.airline)
            .replace('{{departure_dt}}', flight.departure_dt)
            .replace('{{arrival_dt}}', flight.arrival_dt)
            .replace('{{number_of_stops}}', flight.number_of_stops)
            .replace('{{emissions}}', flight.emissions)
            .replace('{{price}}', flight.price)
            .replace('{{airline_logo}}', getAirlineLogo(flight.airline));

        flightListDiv.insertAdjacentHTML('beforeend', flightHTML);
    });

    // Display the remaining flights
    flights.slice(5).forEach(flight => {
        const flightHTML = flightTemplate
            .replace('{{flight_id}}', flight.flight_id)
            .replace('{{source}}', flight.source)
            .replace('{{sink}}', flight.sink)
            .replace('{{airline}}', flight.airline)
            .replace('{{departure_dt}}', flight.departure_dt)
            .replace('{{arrival_dt}}', flight.arrival_dt)
            .replace('{{number_of_stops}}', flight.number_of_stops)
            .replace('{{emissions}}', flight.emissions)
            .replace('{{price}}', flight.price)
            .replace('{{airline_logo}}', getAirlineLogo(flight.airline));

        moreFlightsDiv.insertAdjacentHTML('beforeend', flightHTML);
    });
}

fetchFlights();
function getAirlineLogo(airline) {
    const logos = {
        'EASYJET': '/frontend/static/icons/easyjet.png',
        'British Airways': '/frontend/static/icons/british_airways.png',
        'WIZZ AIR': '/frontend/static/icons/wizzair.png',
        'KLM': '/frontend/static/icons/klm.png'
    };
    const logoPath = logos[airline] || '/frontend/static/icons/default.png';

    // Check if the file exists
    fetch(logoPath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                console.log(`File found: ${logoPath}`);
            } else {
                console.log(`File not found: ${logoPath}`);
            }
        })
        .catch(error => {
            console.log(`Error checking file: ${logoPath}`, error);
        });

    return logoPath;
}
fetchFlights();