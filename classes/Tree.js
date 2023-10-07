class Tree {

    constructor(x, y, id) {
        this.x = x
        this.y = y
        this.id = id
        this.life = 5
    }




    
    die() {
        if (this.life <= 0) {
            for (var i in TreeArr) {
                if (this.x == TreeArr[i].x && this.y == TreeArr[i].y) {
                    TreeArr.splice(i, 1)
                    break
                }
            }
            matrix[this.y][this.x] = 0
        }
    }

}