var express = require("express");
let random = require("./random");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var Grass = require('./Grass')
var GrassEater = require('./GrassEater')
var hanter = require('./hanter')
var Poizon = require('./Poizon')
var Tree = require('./Tree')

TreeArr = []
grassArr = []
grassEaterArr = []
hanterArr = []
PoizonArr = []
matrix = []

side = 15

function CreateMatrix(size) {

    for (var y = 0; y < size; y++) {
        matrix[y] = []
        for (var x = 0; x < size; x++) {
            var randomElement = random([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5])
            matrix[y][x] = randomElement
        }

    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var g = new Grass(x, y, 1)
                grassArr.push(g)
            } else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grassEaterArr.push(ge)
            } else if (matrix[y][x] == 3) {
                var ged = new hanter(x, y, 3)
                hanterArr.push(ged)
            } else if (matrix[y][x] == 4) {
                var gedo = new Poizon(x, y, 4)
                PoizonArr.push(gedo)
            } else if (matrix[y][x] == 5) {
                var gedo = new Tree(x, y, 5)
                TreeArr.push(gedo)
            }
        }
    }

}

CreateMatrix(50)
function PlayGame() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (var i in hanterArr) {
        hanterArr[i].eat()
    }
    for (var i in PoizonArr) {
        PoizonArr[i].move()
    }
    for (var i in TreeArr) {
        TreeArr[i].die()
    }
    io.emit('Grass', grassArr.length)
    io.emit('GrassEater', grassEaterArr.length)
    io.emit('Hunter', hanterArr.length)
    io.emit('Poizon', PoizonArr.length)
    io.emit('Tree', TreeArr.length)
    io.emit('MATRIX', matrix)
}



setInterval(function () {
    PlayGame()
}, 200)

setInterval(function () {
    main();
}, 1000)



function main() {
    var stats = {
        Grass: grassArr.length,
        Eater: grassEaterArr.length,
        Predator: hanterArr.length,
        Poizon: PoizonArr.length,
        Tree: TreeArr.length
    }
    let myJSON = JSON.stringify(stats);
    var file = "stats.json";
    fs.writeFileSync(file, myJSON)
}

