function createGrid(tilesPerRow = 16) {
    for (let i=1; i<tilesPerRow; i++) {
        let newTileWrapper = document.createElement("div");
        newTileWrapper.setAttribute("class", "row-wrapper");
        let newTileRow = document.createElement("div");
        newTileRow.setAttribute("class", "grid-row");
        console.log(newTileRow);
        for (let i=1; i<tilesPerRow; i++) {
            let newTile = document.createElement("div");
            newTile.setAttribute("class", "tile");
            newTile.onmouseover = fillSquare;
            newTileRow.appendChild(newTile);
        }
        newTileWrapper.appendChild(newTileRow);
        document.getElementById("gridContainer").appendChild(newTileWrapper);
    }
}

function resetGrid() {
    let gridSideLength = Number(prompt("How many tiles per row & column? (max is 60)", "20"));
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


createGrid();