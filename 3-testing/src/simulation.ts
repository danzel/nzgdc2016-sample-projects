import Grid = require('./grid');
import Pieces = require('./pieces');

class Simulation {
	next = Pieces.Circle;
	grid = new Grid();

	constructor() {
	}

	tryPlayAt(x: number, y: number): Pieces {
		if (x < 3 && y < 3 && !this.grid.pieceInPosition(x, y)) {
			this.grid.placePieces(x, y, this.next);

			let placed = this.next;

			this.next = (this.next == Pieces.Circle) ? Pieces.Cross : Pieces.Circle;

			return placed;
		}

		return Pieces.None;
	}
}

export = Simulation;
