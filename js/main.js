const GRIDSIZE = 16

const grid = document.querySelector(".grid");

for (i = 0; i < GRIDSIZE; i++) {
    const row = grid.appendChild(document.createElement("div"));
    row.setAttribute("class", "row");
    for (j = 0; j < GRIDSIZE; j++) {
        const cell = row.appendChild(document.createElement("div"));
        cell.setAttribute("class", "cell");
    }
}
