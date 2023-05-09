const GRIDSIZE = 16

const grid = document.querySelector(".grid");

// populate grid with (GRIDSIZE x GRIDSIZE) cells
for (i = 0; i < GRIDSIZE; i++) {
    const row = grid.appendChild(document.createElement("div"));
    row.setAttribute("class", "row");
    for (j = 0; j < GRIDSIZE; j++) {
        const cell = row.appendChild(document.createElement("div"));
        cell.setAttribute("class", "cell");
    }
}


function drawDocument() {
    const window_height = window.innerHeight;
    const window_width = window.innerWidth;

    const min = Math.min(window_height, window_width);

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.width = `${(min/20) - 2}px`;
        cell.style.height = `${(min/20) - 2}px`;
    })

    if (window_height > window_width) {
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