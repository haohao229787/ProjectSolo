// Game Over state
// References from Nathan's code

var GameOver = function(game) {};
GameOver.prototype = {
	create: function() {
		this.fired = game.add.audio('fired');
		this.fired.play('',0,1,false);
		var rektText = game.add.text(game.width/2, game.height/2, 'GameOver', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		rektText.anchor.set(0.5);

		var playText = game.add.text(game.width/2, game.height*.8, 'Press SPACE to Menu', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);

	},
	update: function() {
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Title');
		}
	}
};