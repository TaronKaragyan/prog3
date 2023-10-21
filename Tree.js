var LivingCreature = require('./LivingCreature')
let random = require("./random");
module.exports = class Tree extends LivingCreature{

    constructor(x, y, id) {
        super(x,y,id)
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