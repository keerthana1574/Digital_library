document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/digilibtest');
        const data = await response.json();

        const dataContainer = document.getElementById('books');
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = JSON.stringify(item);
            dataContainer.appendChild(itemDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});