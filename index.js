// Select the container element where the content will be injected
const horseContainer = document.querySelector('.stat-grid-container');

// Function to fetch and generate the HTML structure
async function generateHorseData() {
    try {
        // Fetch the JSON data from the file
        const response = await fetch('horses_data.json'); // Adjust the path as per your setup
        const horses = await response.json();
        console.log(horses)
        // Loop through the horse data and generate the HTML structure
        horses.forEach(horse => {
            const divSaddle = document.createElement('div');
            divSaddle.className = 'stat-grid-regular stat-grid-items';
            divSaddle.textContent = horse.saddle;

            const divName = document.createElement('div')
            divName.className = 'stat-grid-regular stat-grid-items';
            divName.textContent = horse.name

            const divAge = document.createElement('div');
            divAge.className = 'stat-grid-regular stat-grid-items';
            divAge.textContent = horse.age;

            const divWeight = document.createElement('div');
            divWeight.className = 'stat-grid-regular stat-grid-items';
            divWeight.textContent = horse.weight;

            const divRPR = document.createElement('div');
            divRPR.className = 'stat-grid-regular stat-grid-items';
            divRPR.textContent = horse.RPR;

            const divOR = document.createElement('div');
            divOR.className = 'stat-grid-regular stat-grid-items';
            divOR.textContent = horse.OR;

            const divPrice = document.createElement('div');
            divPrice.className = 'stat-grid-regular stat-grid-items';
            divPrice.textContent = horse.price;

            const divMargin = document.createElement('div');
            divMargin.className = 'stat-grid-regular stat-grid-items';
            divMargin.textContent = horse.margin;

            const horseContainer = document.querySelector('.stat-grid-container');
            // Append all divs to the container
            horseContainer.appendChild(divSaddle);
            horseContainer.appendChild(divName)
            horseContainer.appendChild(divAge);
            horseContainer.appendChild(divWeight);
            horseContainer.appendChild(divRPR);
            horseContainer.appendChild(divOR);
            horseContainer.appendChild(divPrice);
            horseContainer.appendChild(divMargin);
        });
    } catch (error) {
        console.error('Error fetching horse data:', error);
    }
}

generateHorseData()