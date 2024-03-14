function createGrid(tilesPerRow = 16) {
    for (let i=1; i<tilesPerRow; i++) {
        let newTileRow = document.createElement("div");
        newTileRow.setAttribute("class", "grid-row");
        console.log(newTileRow);
        for (let i=1; i<tilesPerRow; i++) {
            let newTile = document.createElement("div");
            newTile.setAttribute("class", "tile");
            newTile.onmouseover = fillSquare;
            newTileRow.appendChild(newTile);
        }
        document.getElementById("gridContainer").appendChild(newTileRow);
    }
}

function resetGrid() {
    let gridSideLength = Number(prompt("How many tiles per row & column?", "20"));
    let usedGrid = document.getElementById("gridContainer");
    usedGrid.innerHTML = "";
    createGrid(gridSideLength);
}

function fillSquare() {
    this.style.backgroundColor = "black";
}


createGrid();