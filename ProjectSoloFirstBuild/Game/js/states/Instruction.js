
var Instruction = function(game) {};
Instruction.prototype = {
	create: function() {
		// add audio
		this.smart = game.add.audio('smart');
		this.smart.play('',0,1,false);
		// add title screen text
		var titleText = game.add.text(game.width/2, game.height/2, 'Instructions:', {font: 'Helvetica', fontSize: '48px', fill: '#fff'});
		titleText.anchor.set(0.5);

		var instructText = game.add.text(game.width/2, game.height/2 + 48, 'NOTHING IS HERE FOR NOW', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		instructText.anchor.set(0.5);

		var playText = game.add.text(game.width/2, game.height*.8, 'Press B go back to menu', {font: 'Helvetica', fontSize: '24px', fill: '#fff'});
		playText.anchor.set(0.5);
	},
	update: function() {
		// check for UP input
		if(game.input.keyboard.justPressed(Phaser.Keyboard.B)) {
			game.state.start('Title');
		}
	}
};