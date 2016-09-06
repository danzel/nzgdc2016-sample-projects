require('./app.css');

let crossUrl = require('./cross.png');
let circleUrl = require('./circle.png');
let gridUrl = require('./grid.png');

console.log('hello world');

placed = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];
next = 'cross';

let game = new Phaser.Game('100%', '100%', Phaser.AUTO, null, {
    preload: function() {
        game.load.image('circle', circleUrl)
        game.load.image('cross', crossUrl)
        game.load.image('grid', gridUrl)
    },

    create() {
        game.add.sprite(0, 0, 'grid');

        game.input.onTap.add(function (pointer, doubleTap) {
			let x = Math.floor(pointer.x / 70);
			let y = Math.floor(pointer.y / 70);

			if (x < 3 && y < 3 && !placed[x][y]) {
				placed[x][y] = next;

				game.add.sprite(x * 70, y * 70, next);

				next = (next == 'cross') ? 'circle' : 'cross'
			}
        });
    }
}, false, true, null);
