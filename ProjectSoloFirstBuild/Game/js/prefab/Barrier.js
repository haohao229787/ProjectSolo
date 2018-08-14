// Barrier prefab
// References from Nathan's code

// create Barrier constructor
var Barrier = function(game, speed) {
	// call Sprite constructor within this object
	// new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, game.width, game.rnd.integerInRange(100,game.height-100), 'barrier');
	game.physics.enable(this, Phaser.Physics.ARCADE);	// enable physics
	this.anchor.set(0.5);								// set anchor to center
	this.body.immovable = false;							// make movable
	this.body.velocity.x = speed;						// make it go!
	this.newBarrier = true;								// custom property to permit new creation
};

// inherit prototype from Phaser.Sprite and set constructor to Barrier
// the Object.create method creates a new object w/ the specified prototype object and properties
Barrier.prototype = Object.create(Phaser.Sprite.prototype);
// since we used Object.create, we need to explicitly set the constructor
Barrier.prototype.constructor = Barrier;  

// override the Phaser.Sprite update function
Barrier.prototype.update = function() {
	if(this.newBarrier && this.x < game.width/1.5) {
		this.newBarrier = false;
		Play.prototype.addBarrier(this.parent, this.tint);
	}
	// kill the paddle if it reaches the left edge of the screen
	if(this.x < -this.width) {
		this.kill();	
	}
}

