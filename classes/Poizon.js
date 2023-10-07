class Poizon {

    constructor(x, y, id) {
        this.x = x
        this.y = y
        this.id = id
        this.second = 12
    }

    GetNewCords() {
        var futurePoizon = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    var idk = [x, y]
                    futurePoizon.push(idk)
                }
            }
        }
        return futurePoizon
    }

    move() {
        var grassCell = random(this.GetNewCords());
        this.second--

        if (grassCell && this.second <= 0) {
            var newX = grassCell[0]
            var newY = grassCell[1]

            matrix[newY][newX] = this.id
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[this.y][this.x] = 0
            for (var i in PoizonArr) {
                if (this.x == PoizonArr[i].x && this.y == PoizonArr[i].y) {
                    var newGrass = new Grass(this.x,this.y,1)
                    matrix[this.y][this.x] = 1
                    grassArr.push(newGrass)
                }
            }

            this.x = newX
            this.y = newY

            this.second = 12
        }
    }
}















