var LivingCreature = require('./LivingCreature')
let random = require("./random");
module.exports = class Grass extends LivingCreature {
    constructor(x, y, id) {
        super(x,y,id)
    }
    
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newGrass = new Grass(newX, newY, this.id);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}