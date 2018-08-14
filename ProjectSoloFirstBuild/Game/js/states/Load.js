
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		// load assets
		game.load.path = 'assets/img/';
		game.load.image('needle', 'needle.png');
		game.load.image('thread','thread.png');
		game.load.path = 'assets/audio/';
		game.load.audio('congrats',['congrats.mp3']);
		game.load.audio('goodtime',['goodtime.mp3']);
		game.load.audio('suffer',['suffer.mp3']);
		game.load.audio('smart',['smart.mp3']);
		game.load.audio('fired',['fired.mp3']);
		game.load.audio('evening',['evening.mp3']);
		game.stage.backgroundColor = "#000000";
		console.log('preload');
	},
	create: function() {
		// check for local storage browser support
		if(window.localStorage) {
			console.log('Local storage supported');
		} else {
			console.log('Local storage not supported');
		}
		// go to Title state
		game.state.start('Title');
	}
};