
//create a clear button that changes all existing squares to white
let enterButton = document.querySelector("#enterbutton");
enterButton.addEventListener("click", () => {
    if (enterButton.textContent = "Enter") {
        enterButton.textContent = "Clear";
    }
    else {
        let squares = document.querySelectorAll(".square");
        squares.style.backgroundColor = "White";
    }
});

//allow user to change sizes after entering new number
let inputBox= document.querySelector("#input-box");
inputBox.onchange = () => {enterButton.textContent = "Enter";}


//create grid of squares
function createGrid() {
    deleteRows();
    let container = document.querySelector("#sketch-container");
    let input = document.querySelector("#input-box").value

    //create input number of rows
    for (let i = 0; i < input; i++) {
        let row = document.createElement("div");
        row.classList.add("flex");
        row.classList.add("row");

        //give each row an accending id
        row.setAttribute("id", "row" + i);

        container.appendChild(row);

        //create squares in each row
        createSquares(input, i);
    }
    
}

function createSquares (input, rownumber) {
    let row = document.querySelector("#row" + `${rownumber}`);
    
    let dimensions = getDimensions(input);

    //create input number of squares and append to row
    for (let i = 0; i < input; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", "height: " + dimensions + "px; width: " + dimensions + "px");
        
        //add color when cursor passes over
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "Black";
        });

        row.appendChild(square);
    }
}

//get dimensions for each square in 500x500px container
function getDimensions(input) {
    return 500 / input;
}

function deleteRows() {
    document.getElementById("sketch-container").innerHTML = "";
}






