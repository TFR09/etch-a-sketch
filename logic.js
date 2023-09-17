const sketchpad = document.querySelector(".sketchpad");
const colorPicker = document.querySelector(".color-picker")
const clear = document.querySelector(".clear");
const buttons = document.querySelectorAll("input[type=button]")
const colorMode = document.querySelector(".color");
const rainbowMode = document.querySelector(".rainbow");
const gridInputLabel = document.querySelector(".label")
const gridSize = document.querySelector("input[type=range]")
let size = gridSize.value;
let color = colorPicker.value;
let mode = "color";

function fill(num) {
    sketchpad.innerHTML = "";
    for (let r = 0; r < num; r++) {
        let row = document.createElement("div")
        row.className = "row";

        for (let s = 0; s < num; s++) {
            let square = document.createElement("div");
            square.className = "square";
            row.append(square);
        }

        sketchpad.append(row)
    }

    let squares = document.querySelectorAll(".square");

    squares.forEach(square => square.addEventListener("mouseover", e => {
        if (mode === "rainbow") color = "#" + Math.floor(Math.random() * 16777215).toString(16); 
        else color = colorPicker.value;
        changeBackground(e, color);
    }));

    clear.onclick = () => {
        squares.forEach(square => square.style.background = "white")
    };
}

function changeBackground(e, color) {
    e.target.style.backgroundColor = color;
}

colorMode.addEventListener("click", () => {
    mode = "color"
    colorMode.classList.toggle("selected");
    rainbowMode.classList.toggle("selected");    
})

rainbowMode.addEventListener("click", () => {
    mode = "rainbow";
    colorMode.classList.toggle("selected");
    rainbowMode.classList.toggle("selected"); 
})

gridSize.addEventListener("input", () => {
    size = gridSize.value
    gridInputLabel.innerHTML = `${size}x${size}`;
    fill(size);
})

fill(size);