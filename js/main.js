let gridSize = document.querySelector("input[type='range']").value;

document.querySelector("input[type='range']").addEventListener("input", (event) => {
    gridSize = event.target.value;
    createGrid();
    drawDocument();
})

document.querySelector("#reset-button").addEventListener("click", () => {
    createGrid();
})

createGrid();

// populate grid with (GRIDSIZE x GRIDSIZE) cells
function createGrid() {
    const grid = document.querySelector(".grid");
    while (grid.firstChild) {
        let child = grid.firstChild
        while (child.firstChild) {
            child.removeChild(child.firstChild);
        }
        grid.removeChild(child);
    }
    for (i = 0; i < gridSize; i++) {
        const row = grid.appendChild(document.createElement("div"));
        row.setAttribute("class", "row");
        for (j = 0; j < gridSize; j++) {
            const cell = row.appendChild(document.createElement("div"));
            cell.setAttribute("class", "cell");
            cell.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "black";
            });
        }
    }
}

function drawDocument() {
    const clientHeight = document.body.clientHeight;
    const clientWidth = document.body.clientWidth;

    const min = Math.min(clientHeight, clientWidth) * 2/3;
    
    const grid = document.querySelector(".grid");
    grid.style.minWidth = grid.style.maxWidth = `${min}px`;
    grid.style.minHeight = grid.style.maxWidth = `${min}px`;

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.width = `${min/gridSize}px`;
        cell.style.height = `${min/gridSize}px`;
        console.log(cell.style.width);
    })

    if (clientHeight > clientWidth) {
        document.body.style.flexDirection = "column";
        const interface = document.querySelector(".interface");
        interface.style.flexDirection = "row";
        interface.style.width = `${min*0.65}px`;
        interface.style.height = "fit-content";
    } else {
        document.body.style.flexDirection = "row";
        const interface = document.querySelector(".interface");
        interface.style.flexDirection = "column";
        interface.style.height = `${min*0.65}px`;
        interface.style.width = "fit-content";
    }
}

window.onresize = drawDocument;

drawDocument();