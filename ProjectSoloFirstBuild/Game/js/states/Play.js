// Play state
// Reference from Nathan's code

var Play = function(game) {};
Play.prototype = {
	preload: function(){
		game.stage.backgroundColor = "#FFE055";
	},
	create: function() {
		// setup img and audio
		var thread = game.add.sprite(600,300,'thread');
		var needle = game.add.sprite(250,250,'needle');
		this.welcome = game.add.audio('goodtime');
		this.success = game.add.audio('congrats');
		this.lose = game.add.audio('suffer');
		this.welcome.play('',0,1,false);

		// Input enable and allow dragging. Learned from phaser examples
		thread.inputEnabled = true;
		thread.input.enableDrag(true);

		// Physics for collision
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.enable(thread, Phaser.Physics.ARCADE);
		game.physics.enable(needle, Phaser.Physics.ARCADE);
		thread.body.immovable = true;
		needle.body.immovable = true;

		// setup difficulty timer
		timer = 60;
		this.difficultyTimer = game.time.create(false);
		this.difficultyTimer.loop(1000, this.timeRemain, this); 
		this.difficultyTimer.start();	
	},
	timeRemain: function(){
		timer--;
		// show timer outside canvas
		document.getElementById('Game').innerHTML = 'time remaining: ' + timer + 's';
	},
	sew: function(thread, needle){
		this.success.play('',0,1,false);
	},
	update: function() {
		// // check collision
		// game.physics.arcade.overlap(thread, needle, this.sew, null, this);
		if (timer == 0) {
			game.state.start('GameOver');
		}
	},


}