var Stage3 = function (game) {};
Stage3.prototype = {
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
		var needle = game.add.sprite(1105,485,'needle');
		var ware1 = game.add.sprite(207, 325, 'ware1');
		// var ware2 = game.add.sprite(500,0,'ware2');
		var ware3 = game.add.sprite(667,422,'ware3');
		var ware4 = game.add.sprite(377,425,'ware4');
		var ware5 = game.add.sprite(877,600-134,'ware5');
		// var ware6 = game.add.sprite(100,0,'ware2');
		var ware7 = game.add.sprite(300,0,'ware2');
		var ware8 = game.add.sprite(700,0,'ware2');
		var ware9 = game.add.sprite(900,0,'ware2');

		var portrait = game.add.sprite(380,200,'portrait');
		var pet1 = game.add.sprite(677,600-271,"pet1");
		var pet2 = game.add.sprite(177,600-370,"pet2");

		wareGroup.add(ware1);
		// wareGroup.add(ware2);
		wareGroup.add(ware3);
		wareGroup.add(ware4);
		wareGroup.add(ware5);
		// wareGroup.add(ware6);
		wareGroup.add(ware7);
		wareGroup.add(ware8);
		wareGroup.add(ware9);
		wareGroup.add(portrait);
		wareGroup.add(pet1);
		wareGroup.add(pet2);


		this.welcome = game.add.audio('suffer');
		this.success = game.add.audio('congrats');
		this.welcome.play('',0,1,false);

		// Physics for collision
		game.physics.enable(thread, Phaser.Physics.ARCADE);
		game.physics.enable(needle, Phaser.Physics.ARCADE);
		thread.body.collideWorldBounds = true;
		needle.body.collideWorldBounds = true;
		thread.body.bounce.set(0.65);
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
			ware.body.bounce.set(0.5);
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
		game.state.start('GoodOver');
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

		// mouse input ref from phaser online examples and stackoverflow
		let isUp = game.input.mousePointer.leftButton.isUp
		if (!isUp) {
			let leftButtonX = game.input.mousePointer.clientX
			let leftButtonY = game.input.mousePointer.clientY
			if (leftButtonX-th.x<100 && leftButtonY-th.y<100) {
				setTimeout(function () {
					th.body.velocity.set(leftButtonX - th.x, leftButtonY - th.y)
				}, 500)
			}
		}
		if (isUp) {
			setTimeout(function(){
				th.body.velocity.set(0, 0)
			}, 500)
		}
	},


}