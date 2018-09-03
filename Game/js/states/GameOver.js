// Game Over state
// References from Nathan's code

var GameOver = function(game) {};
GameOver.prototype = {
	create: function() {
		this.fired = game.add.audio('fired');
		this.fired.play('',0,1,false);
		game.add.sprite(0,0,'over');

	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Title');
		}
	}
};