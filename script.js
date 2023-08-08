const container = document.querySelector(".container");
const input = document.getElementById("input");
const button = document.getElementById("button");
const clear = document.getElementById("clear-button");
const randomColor = document.getElementById("random-color");
const blackColor = document.getElementById("black-color");
let colorMode = "";
blackColor.addEventListener("click" , () =>{
    colorMode = "black";
});
randomColor.addEventListener("click" , () => {
    colorMode = "random";
})

function createGrid(squarePerRow) {
    const squareSize = 632 / squarePerRow;
    container.innerHTML = "";
    for ( let i = 0; i < squarePerRow * squarePerRow ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;
        container.appendChild(cell);
        clearGrid(cell);
    }
    addMouseOverListener();
    
}

// add a mouseover effect for each of the selection.
function addMouseOverListener() {
    const cells = document.querySelectorAll(".square");
    
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        if (colorMode === "random") {
          cell.style.backgroundColor = getRandomColor();
        } else if (colorMode === "black") {
          cell.style.backgroundColor = "black";
        }
      });
    });
  }

function clearGrid(cell) {
    clear.addEventListener("click" , () => {
        cell.style.backgroundColor = 'white';
    })

}

button.addEventListener("click" , () => {
    if (input.value > 100) {
        alert("Number of cell must be limited to 100");
    } else {

    createGrid(input.value);
    }

});

//add a random color generator for the button
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



createGrid(16);

