export default class SnakeModel {

    snakeCells;
    direction;

    constructor(rows, cols) {
        this.rowNum = rows;
        this.colNum = cols;

        this.snakeCells = [];

        this.setInitialCell();
    }

    setDirection(direction) {
        if((['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(direction)) !== -1) {
            this.direction = direction;
        }
    }

    getSnakeCells() {
        return this.snakeCells;
    }

    setInitialCell() {
        this.snakeCells.push( {
            row: this.getRandomIndex(this.rowNum),
            col: this.getRandomIndex(this.colNum)
        });
    }

    moveSnake() {
        this.growSnake();
        this.snakeCells.pop();
    }

    growSnake() {
        let row = this.snakeCells[0].row;
        let col = this.snakeCells[0].col;
        switch (this.direction) {
            case 'ArrowUp': row--; break;
            case 'ArrowDown': row++; break;
            case 'ArrowLeft': col--; break;
            case 'ArrowRight': col++; break;
            default: break;
        }

        const newHeadCell = {
            row: row,
            col: col
        };
       this.snakeCells.unshift(newHeadCell);
     }

    getRandomIndex(max) {
        return Math.floor(max * Math.random());
    }
}