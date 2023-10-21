
var socket = io()
var side = 20,m = 40, n = 40
var matrix = []

function setup() {
    
    frameRate(5)
    createCanvas(n * side, m * side)
    background("gray")

}

function draw(m) {
    matrix = m
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("#5c3316")
            } else if (matrix[y][x] == 5) {
                fill("darkgreen")
            }
            else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

}

socket.on('MATRIX', (m)=>{
    matrix = m
})

socket.on('MATRIX', (m)=>{
    draw(m)
})