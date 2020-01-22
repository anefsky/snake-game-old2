export default class Utils {
    static doCellsMatch(cell_1, cell_2) {
        return (
            (cell_1.row === cell_2.row) && (cell_1.col === cell_2.col)
        );
    }

    static containsCell(arrayOfCells, cell) {
        if(arrayOfCells == undefined || cell == undefined) return false;
        for (let i = 0; i < arrayOfCells.length; i++) {
            if (Utils.doCellsMatch(arrayOfCells[i], cell)) {
                return true;
            }
        }
        return false;
    }

    static getRandomIndex(min, max) {
        return Math.floor(min + ((max - min) * Math.random()));
    }

}