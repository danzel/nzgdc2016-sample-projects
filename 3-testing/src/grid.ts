import Pieces = require('./pieces');

class Grid {
	private pieces: Array<Array<Pieces>>;

	constructor() {
		this.pieces = [
			[Pieces.None, Pieces.None, Pieces.None],
			[Pieces.None, Pieces.None, Pieces.None],
			[Pieces.None, Pieces.None, Pieces.None]
		];
	}

	getPiece(x: number, y: number) {
		return this.pieces[x][y];
	}

	pieceInPosition(x: number, y: number) {
		return this.pieces[x][y] != Pieces.None;
	}

	placePieces(x: number, y: number, piece: Pieces) {
		if (this.pieceInPosition(x, y)) {
			throw new Error('there is already a piece at ' + x + ', ' + y);
		}

		this.pieces[x][y] = piece;
	}
}
export = Grid;