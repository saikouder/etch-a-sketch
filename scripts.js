function createGrid() {
    for (let i=0; i<15; i++) {
        let newTileRow = document.createElement("div");
        newTileRow.setAttribute("class", "grid-row");
        console.log(newTileRow);
        for (let i=0; i<15; i++) {
            let newTile = document.createElement("div");
            newTile.setAttribute("class", "tile");
            newTileRow.appendChild(newTile);
        }
        document.getElementById("gridContainer").appendChild(newTileRow);
    }
}

createGrid();