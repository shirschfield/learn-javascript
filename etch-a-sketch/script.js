const container = document.getElementById('container');
const gridSizeButton = document.getElementById('gridSizeButton');

function createGrid(squaresPerSide) {
    container.innerHTML = ''; // Clear the existing grid
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${squaresPerSide} - 2px)`; // Adjust size based on the number of squares
        square.style.height = `calc(960px / ${squaresPerSide} - 2px)`;
        container.appendChild(square);
    }
}

// Initial grid setup
createGrid(16);

// Change grid size
gridSizeButton.addEventListener('click', () => {
    const squaresPerSide = prompt("Enter the number of squares per side for the new grid (max 100):", "16");
    const validNumber = parseInt(squaresPerSide);

    if (!isNaN(validNumber) && validNumber <= 100) {
        createGrid(validNumber);
    } else {
        alert("Please enter a valid number up to 100.");
    }
});
