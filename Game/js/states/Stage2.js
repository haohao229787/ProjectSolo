var Stage2 = function (game) {};
Stage2.prototype = {
	th: null,
	ne: null,
	preload: function () {
		game.stage.backgroundColor = "#EC3E3E";
	},
	create: function () {
		// create a group
		var wareGroup = game.add.group()

		wareGroup.enableBody = true;
		wareGroup.physicsBodyType = Phaser.Physics.ARCADE;
		this.wareGroup = wareGroup;

		// setup img and audio
		var thread = game.add.sprite(150, 500, 'thread');
		var needle = game.add.sprite(1150,500,'needle');
		var ware1 = game.add.sprite(207, 325, "ware1");
		var ware2 = game.add.sprite(587,0,"ware2");
		var ware3 = game.add.sprite(667,422,"ware3");
		var ware4 = game.add.sprite(377,425,"ware4");
		var ware5 = game.add.sprite(877,600-134,"ware5");
		wareGroup.add(ware1);
		wareGroup.add(ware2);
		wareGroup.add(ware3);
		wareGroup.add(ware4);
		wareGroup.add(ware5);
	

		this.welcome = game.add.audio('goodtime');
		this.success = game.add.audio('congrats');
		this.welcome.play('',0,1,false);

		// Physics for collision
		game.physics.enable(thread, Phaser.Physics.ARCADE);
		game.physics.enable(needle, Phaser.Physics.ARCADE);
		thread.body.collideWorldBounds = true;
		needle.body.collideWorldBounds = true;
		needle.angle = 93;
		thread.angle = 90;

		// setup difficulty timer
		timer = 60;
		this.difficultyTimer = game.time.create(false);
		this.difficultyTimer.loop(1000, this.timeRemain, this); 
		this.difficultyTimer.start();		

		// set sprite physics attr
		thread.anchor.setTo(0.5, 0.5);
		thread.anchor.collideWorldBounds = true;
		needle.anchor.setTo(0,0);
		needle.anchor.collideWorldBounds = true;

		// each furniture collision
		wareGroup.forEach((ware) => {   
			ware.anchor.setTo(0,0);
			ware.body.drag.set(100,100);
			ware.body.collideWorldBounds = true;
		})

		th = thread;
		ne = needle;
	},
	timeRemain: function(){	
		timer--;
		// show timer outside canvas
		document.getElementById('Game').innerHTML = 'time remaining: ' + timer + 's';
	},
	sew: function(thread, needle){
		this.success.play('',0,1,false);
		game.state.start('Ins2');
	},
	update: function () {
		// check collision
		if (timer == 0) {
			game.state.start('GameOver');
		}
		game.physics.arcade.collide(th, ne, () => {
			this.sew()
			this.difficultyTimer.stop()
		})
		game.physics.arcade.collide(th, this.wareGroup)
		game.physics.arcade.collide(this.wareGroup, this.wareGroup)

		// mouse input  makes the mouse has delay on moving to simulate hand shaking.
		// ref from phaser online examples and stackoverflow
		let isUp = game.input.mousePointer.leftButton.isUp
		if (!isUp) {
			let leftButtonX = game.input.mousePointer.clientX;    
			let leftButtonY = game.input.mousePointer.clientY;
			if (leftButtonX-th.x<100 && leftButtonY-th.y<100) {
				setTimeout(function () {
					th.body.velocity.set(leftButtonX - th.x, leftButtonY - th.y)
				}, 500)
			}
		}
		if (isUp) {
			setTimeout(function(){
				th.body.velocity.set(0, 0);
			}, 500)
		}
	},


}