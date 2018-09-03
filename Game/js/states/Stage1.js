var Stage1 = function(game) {};
Stage1.prototype = {
	th: null,
	ne: null,
	create: function() {
		// setup img and audio
		game.add.sprite(0,0,'tutorial');
		var thread = game.add.sprite(800,250,'thread');
		var needle = game.add.sprite(380,200,'needle');
		this.welcome = game.add.audio('goodtime');
		this.success = game.add.audio('congrats');
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
		// thread.body.gravity.y = 400;
		thread.body.collideWorldBounds = true;

		// set sprite physics attr
		thread.anchor.setTo(0.5, 0.5)
		thread.anchor.collideWorldBounds = true
		needle.anchor.setTo(0,0)
		needle.anchor.collideWorldBounds = true

		th = thread;
		ne = needle;
	},

	sew: function(thread, needle){
		this.success.play('',0,1,false);
		game.state.start('Instruction');
	},
	update: function() {
		// // check collision
		game.physics.arcade.collide(th, ne, () => {
			this.sew();
		})
		//game.physics.arcade.overlap(thread, needle, this.sew, null, this);
		if (timer == 0) {
			game.state.start('GameOver');
		}
	},


}