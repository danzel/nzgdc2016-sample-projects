import Grid = require('./grid');
import Pieces = require('./pieces');

class Simulation {
	next = Pieces.Circle;
	grid = new Grid();

	constructor() {
	}

	/** Tries to place the next piece at the given location.
	 * Returns Pieces.None if it fails, otherwise the type of piece that was placed
	 */
	tryPlayAt(x: number, y: number): Pieces {
		if (x < 3 && y < 3 && !this.grid.pieceInPosition(x, y)) {
			this.grid.placePieces(x, y, this.next);

			let placed = this.next;

			this.next = (this.next == Pieces.Circle) ? Pieces.Cross : Pieces.Circle;

			return placed;
		}

		return Pieces.None;
	}

	toString(): string {
		let res = '';
		for (let y = 0; y < 3; y++) {
			res += '|'
			for (let x = 0; x < 3; x++) {
				switch (this.grid.getPiece(x, y)) {
					case Pieces.Circle:
						res += 'O';
						break;
					case Pieces.Cross:
						res += 'X';
						break;
					case Pieces.None:
						res += ' ';
						break;
					default:
						throw new Error('wat');
				}
			}
			res += '|\n';
		}
		return res;
	}
}

export = Simulation;
