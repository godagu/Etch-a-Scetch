const container = document.getElementById('container');
const resize = document.getElementById('resize')


function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function createGrid(size) {
    clearGrid() 

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; ++i) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square); 

        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = randomColor()
        });
    }
}

function resizeGrid(){
    let tilesPerSide = prompt("Set the number of squares per side: ")

    if(tilesPerSide != null){
        if(tilesPerSide > 0 && tilesPerSide < 100){
            tilesPerSide = parseInt(tilesPerSide)
            createGrid(tilesPerSide)
        }
        else{
            alert("Please enter a valid number between 1 and a 100")
        }
        
    }
    else{
        alert("Null")
    }
}


function randomColor(){
    const r = Math.floor(Math.random() * 256);  // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256);  // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256);  // Random value for blue (0-255)
    
    return `rgb(${r}, ${g}, ${b})`;  // Return the random RGB color as a string

}


resize.addEventListener('click', resizeGrid)
createGrid(16)




