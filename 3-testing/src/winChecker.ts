import Grid = require('./grid');
import Pieces = require('./pieces');

class WinChecker {
	constructor(private grid: Grid) {
	}

	getWinner(): Pieces {
		//vertical
		for (let x = 0; x < 3; x++) {
			if (this.grid.getPiece(x, 0) != Pieces.None && 
				this.grid.getPiece(x, 0) == this.grid.getPiece(x, 1) && 
				this.grid.getPiece(x, 0) == this.grid.getPiece(x, 2)) {
				return this.grid.getPiece(x, 0);
			}
		}

		//horizontal
		for (let y = 0; y < 3; y++) {
			if (this.grid.getPiece(0, y) != Pieces.None && 
				this.grid.getPiece(0, y) == this.grid.getPiece(1, y) && 
				this.grid.getPiece(0, y) == this.grid.getPiece(2, y)) {
				return this.grid.getPiece(0, y);
			}
		}

		//Diagonal
		if (this.grid.getPiece(0, 0) != Pieces.None && 
			this.grid.getPiece(0, 0) == this.grid.getPiece(1, 1) && 
			this.grid.getPiece(0, 0) == this.grid.getPiece(2, 2)) {
			return this.grid.getPiece(0, 0);
		}

		//Other diagonal
		if (this.grid.getPiece(2, 0) != Pieces.None && 
			this.grid.getPiece(2, 0) == this.grid.getPiece(1, 1) && 
			this.grid.getPiece(2, 0) == this.grid.getPiece(0, 2)) {
			return this.grid.getPiece(2, 0);
		}

		return Pieces.None;
	}
}

export = WinChecker;