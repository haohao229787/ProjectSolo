var GoodOver = function(game){};
GoodOver.prototype = {
	create:function(){
		game.add.sprite(0,0,'GoodOver');
	},
	update:function(){
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			game.state.start('Title');
		}
	}
};