import Utils from '../services/utils';

export default class SnakeModel {

    snakeCells;
    appleCell;
    direction;
    headCell;

    constructor(rows, cols) {
        this.rowNum = rows;
        this.colNum = cols;

        this.gameInit();
    }

    gameInit() {
        this.snakeCells = [];
        this.setInitialCell();
        this.setAppleCell();
    }

    reset() {
        this.gameInit();
   }

    setDirection(direction) {
        if((['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(direction)) !== -1) {
            this.direction = direction;
        }
    }

    getSnakeSegmentPosition(row, col) {
        for(let i = 0; i < this.snakeCells.length; i++) {
            if(this.snakeCells[i].row === row && this.snakeCells[i].col === col) {
                return i;
            }
        }
    }

    getSnakeCells() {
        return this.snakeCells;
    }

    getAppleCell() {
        return this.appleCell;
    }

    setInitialCell() {
        const initDirection = Utils.chooseRandomString(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
        this.setDirection(initDirection);
    
        this.headCell = {
            row: Utils.getRandomIndex(this.rowNum / 3, this.rowNum * 2 / 3),
            col: Utils.getRandomIndex(this.colNum / 3, this.colNum * 2 / 3)
        };
        this.snakeCells.push(this.headCell);
    }

    setAppleCell() {
        let firstTry = true
        while(firstTry || Utils.containsCell(this.snakeCells, this.appleCell)) {
            this.appleCell = {
                row: Utils.getRandomIndex(0, this.rowNum - 1),
                col: Utils.getRandomIndex(0, this.colNum - 1)
            }
            firstTry = false;
       }
    }

    moveSnake() {
        this.growSnake();
        this.snakeCells.pop();
    }

    growSnake() {
       this.snakeCells.unshift(this.headCell);
     }

     setNewHeadCell() {
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
        this.headCell = newHeadCell;
     }

     isMoveOffBoard() {
         if(this.snakeCells.length === 0) return false; // after reset
         return this.headCell.row >= this.rowNum
         || this.headCell.col >= this.colNum
         || this.headCell.row < 0
         || this.headCell.col < 0;
     }

     isMoveToEatApple() {
        return Utils.doCellsMatch(this.headCell, this.appleCell);
     }

     isMoveOnSnakeBody() {
        // check if new head same as any snake part except first or last cell
        const snakeWithNoHeadOrTail = this.snakeCells.slice(1, -1);
        return Utils.containsCell(snakeWithNoHeadOrTail, this.headCell);
     }

     moveApple() {
        this.setAppleCell();
     }

}