
var Load = function(game) {};
Load.prototype = {
	preload: function() {
		// load assets
		game.load.path = 'assets/img/';
		game.load.image('needle', 'needle.png');
		game.load.image('thread','thread.png');
		game.load.image('ware1', 'Furniture1.png');
		game.load.image('ware2', 'Furniture2.png');
		game.load.image('ware3', 'Furniture3.png');
		game.load.image('ware4', 'Furniture4.png');
		game.load.image('ware5', 'Furniture5.png');
		game.load.image('pet1','pet.png');
		game.load.image('pet2', 'pet2.png');
		game.load.image('portrait','portrait.png');
		game.load.image('title', 'Title.png');
		game.load.image('tutorial', 'Tutorial.png');
		game.load.image('instruction', 'instruction.png');
		game.load.image('GoodOver', 'goodover.png');
		game.load.image('over', 'over.png');
		game.load.path = 'assets/audio/';
		game.load.audio('congrats',['congrats.mp3']);
		game.load.audio('goodtime',['goodtime.mp3']);
		game.load.audio('suffer',['suffer.mp3']);
		game.load.audio('smart',['smart.mp3']);
		game.load.audio('fired',['fired.mp3']);
		game.load.audio('evening',['evening.mp3']);
		console.log('preload');
		//
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