var Ins2 = function(game) {};
Ins2.prototype = {
	create: function() {
		// add img
		game.add.sprite(0,0,'instruction');
		this.smart = game.add.audio('smart');
		this.smart.play('',0,1,false);
	},
	update: function() {
		// check for UP input
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Stage3');
		}
	}
};