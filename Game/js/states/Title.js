// Title state
// References from Nathan's code

var Title = function(game) {};
Title.prototype = { 
	create: function() {
		// add audio
		this.evening = game.add.audio('evening');
		this.evening.play('',0,1,false);
		// add title
		game.add.sprite(0, 0, 'title');
		newHighScore = false;
	},
	update: function() {
		// check for UP input
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Stage1');
		}
	}
};