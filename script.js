var socket = io()
var side = 20, m = 40, n = 40
var matrix = []

function setup() {

    frameRate(5)
    createCanvas(n * side, m * side)
    background("gray")

}

let colors = {
    green: "#228B22",
    yellow: "#FFFF00",
    red: "#FF0000",
    brown: "#5c3316",
    darkgreen: "#006400"
}


function draw(m) {
    matrix = m

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(colors.green)
            } else if (matrix[y][x] == 2) {
                fill(colors.yellow)
            } else if (matrix[y][x] == 3) {
                fill(colors.red)
            } else if (matrix[y][x] == 4) {
                fill(colors.brown)
            } else if (matrix[y][x] == 5) {
                fill(colors.darkgreen)
            }
            else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

}

function colorChange() {
    if (colors.green == "#228B22") {
        colors = {
            green: "#97DECE",
            yellow: "#82C3EC",
            red: "#472183",
            brown: "#8B7E74",
            darkgreen: "#006400"
        }
    }
    else if(colors.green == "#97DECE"){
        colors = {
            green: "#228B22",
            yellow: "#FFFF00",
            red: "#FF0000",
            brown: "#5c3316",
            darkgreen: "#006400"
        }
    }
}

socket.on('MATRIX', (m) => {
    matrix = m
})

socket.on('MATRIX', (m) => {
    draw(m)
})
socket.on('Grass', (g)=>{
    grass.innerHTML= "Grass -> " + g
})
socket.on('GrassEater', (g)=>{
    grassEater.innerHTML= "Grass Eater -> " + g
})
socket.on('Hunter', (g)=>{
    hunter.innerHTML= "Predator -> " + g
})
socket.on('Poizon', (g)=>{
    poizon.innerHTML= "Poizon -> " + g
})
socket.on('Tree', (g)=>{
    tree.innerHTML= "Tree -> " + g
})


const tree = document.getElementById("Tree")
const poizon = document.getElementById("Poizon")
const hunter = document.getElementById("Predator")
const grassEater = document.getElementById("GrassEater")
const grass = document.getElementById("Grass")
const button = document.getElementById("winter");
button.addEventListener("click", function(){
    if(colors.green == "#228B22"){
    button.innerText = "Summer!"
    colorChange()
    }
    else if(colors.green == "#97DECE"){
        button.innerText = "Winter!"
        colorChange()
    }

});