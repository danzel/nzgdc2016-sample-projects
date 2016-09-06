import Grid = require('./grid');
import Pieces = require('./pieces');
import Simulation = require('./simulation');
import WinChecker = require('./winChecker');

require('./app.css');
let crossUrl = require('./cross.png');
let circleUrl = require('./circle.png');
let gridUrl = require('./grid.png');

console.log('hello world');

class Game {
	game: Phaser.Game;
	simulation = new Simulation();
	winChecker: WinChecker;

	constructor() {
		this.game = new Phaser.Game('100%', '100%', Phaser.AUTO, null, this, false, true, null);
		this.winChecker = new WinChecker(this.simulation.grid);
	}

	preload() {
		this.game.load.image('Circle', circleUrl)
		this.game.load.image('Cross', crossUrl)
		this.game.load.image('grid', gridUrl)
	}

	create() {
		this.game.add.sprite(0, 0, 'grid');

		this.game.input.onTap.add((pointer: Phaser.Pointer, doubleTap: boolean) => {
			let x = Math.floor(pointer.x / 70);
			let y = Math.floor(pointer.y / 70);

			let placed = this.simulation.tryPlayAt(x, y);
			if (placed != Pieces.None) {
				this.game.add.sprite((x + 0.5) * 70, (y + 0.5) * 70, Pieces[placed]).anchor.set(0.5, 0.5);
			}

			let winner = this.winChecker.getWinner();
			if (winner != Pieces.None) {
				setTimeout(() => {
					alert(Pieces[winner] + ' Won!');
				}, 20)
			}
		});
	}
}

new Game();
