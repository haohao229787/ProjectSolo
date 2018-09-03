// define globals
// References from Nathan's code
var game;
var timer;
var overTxt;
var thread;
var needle;
// wait for browser to load before creating Phaser game
window.onload = function() {
	// uncomment the following line if you need to purge local storage data
	localStorage.clear();
	
	// define game
	game = new Phaser.Game(1200,600, Phaser.AUTO, 'clone');
	console.log('game created');
	
	// define states
	game.state.add('Load', Load);
	game.state.add('Title', Title);
	game.state.add('Instruction',Instruction);
	game.state.add('Ins2', Ins2);
	game.state.add('GameOver', GameOver);
	game.state.add('GoodOver', GoodOver);
	game.state.add('Stage1', Stage1);
	game.state.add('Stage2', Stage2);
	game.state.add('Stage3', Stage3);
	game.state.start('Load');
}






