
let tilesPerRow = 16;
let tileSize = 0;


function createGrid(tilesPerRow) {
    
    tileSize = 640 / tilesPerRow;

    for (let i=0; i<tilesPerRow; i++) {
        let newTileWrapper = document.createElement("div");
        newTileWrapper.setAttribute("class", "row-wrapper");
        let newTileRow = document.createElement("div");
        newTileRow.setAttribute("class", "grid-row");
        
        for (let i=0; i<tilesPerRow; i++) {
            let newTile = document.createElement("div");
            newTile.setAttribute("class", "tile");
            newTile.style.width = `${tileSize}px`;
            newTile.style.height = `${tileSize}px`;
            newTile.onmouseover = fillSquare;
            newTileRow.appendChild(newTile);
        }
        newTileWrapper.appendChild(newTileRow);
        document.getElementById("gridContainer").appendChild(newTileWrapper);
    }
}

function resetGrid() {
    let gridSideLength = Number(prompt("How many tiles per row & column? (max is 64)", "20"));
    if (gridSideLength > 64) {
        gridSideLength = 64;
    }
    let usedGrid = document.getElementById("gridContainer");
    usedGrid.innerHTML = "";
    createGrid(gridSideLength);
}
function fillSquare() {
    this.style.backgroundColor = "black";
}

// function fillSquare(rv = 0, gv = 0, bv = 0) {
//     this.style.backgroundColor = `rgb(${rv}, ${gv}, ${bv})`;
// }

createGrid(tilesPerRow);