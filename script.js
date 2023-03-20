

// setup the page
const gridContainer = document.querySelector('#container');
resetGrid();

//setup button
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetGrid);

// function to create and style a box
function createBox() { 
    const box = document.createElement('div');
    box.className = "cell";
    box.addEventListener('mouseover', ()=> {
        box.classList.add('painted');
    })
    return box
}

function resetGrid() {
    squaresPerSide = getUserInput();
    gridContainer.replaceChildren();

    gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide},1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide},1fr)`;
    
    let numBoxes = squaresPerSide*squaresPerSide;
    for (let i=0; i<numBoxes; i++) {
        box = createBox();
        gridContainer.appendChild(box);
    }
}

function getUserInput() {
    let squaresPerSide = prompt("Enter number of squares per grid size:")
    if (squaresPerSide>100) {
        alert("Changing to max value 100");
        squaresPerSide = 100;
    } else if (squaresPerSide<4) {
        alert("Chaning to min value 4");
        squaresPerSide = 4;
    }
    return squaresPerSide;
}