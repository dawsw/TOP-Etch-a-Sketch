function createRows(input) {
    let container = document.querySelector("#sketch-container");

    for (let i = 0; i < input; i++) {
        let row = document.createElement("div");
        row.classList.add("flex");
        row.classList.add("row");
        row.setAttribute("id", "row" + i);
        container.appendChild(row);
        createSquares(input, i);
    }
    
}

function createSquares (input, rownumber) {
    let row = document.querySelector("#row" + `${rownumber}`);
    let dimensions = getDimensions(input);

    for (let i = 0; i < input; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", "height: " + dimensions + "px; width: " + dimensions + "px");
        row.appendChild(square);
    }
}

function getDimensions(input) {
    return 500 / input;
}

createRows(16);


