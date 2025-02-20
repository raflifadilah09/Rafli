
document.getElementById('co2-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    const fuelType = document.getElementById('fuel-type').value;

    let co2PerLiter;
    if (fuelType === 'petrol') {
        co2PerLiter = 2.31; // kg CO2 per liter for petrol
    } else if (fuelType === 'diesel') {
        co2PerLiter = 2.68; // kg CO2 per liter for diesel
    }

    const litersUsed = distance / fuelEfficiency;
    const co2Emissions = litersUsed * co2PerLiter;

    document.getElementById('co2-output').textContent = `${co2Emissions.toFixed(2)} kg CO2`;
    document.getElementById('result').classList.remove('hidden');
});
