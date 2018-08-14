// Title state
// References from Nathan's code

var Title = function(game) {};
Title.prototype = {
	create: function() {
		// add audio
		this.evening = game.add.audio('evening');
		this.evening.play('',0,1,false);
		// add title screen text
		var titleText = game.add.text(game.width/2, game.height/2, 'Title', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		titleText.anchor.set(0.5);

		var instructText = game.add.text(game.width/2, game.height/2 + 48, 'Press i to see instructions', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		instructText.anchor.set(0.5);

		var playText = game.add.text(game.width/2, game.height*.8, 'Press SPACE to Start', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);

		newHighScore = false;
	},
	update: function() {
		// check for UP input
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Play');
		}
		if(game.input.keyboard.justPressed(Phaser.Keyboard.I)) {
			game.state.start('Instruction');
		}
	}
};