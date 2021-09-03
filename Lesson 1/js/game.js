/* -------------------------------------------------------------------------- */
/*                          1. create a new SCENE                             */
/* -------------------------------------------------------------------------- */
/* 

Scene means the place, where all the actions take place. That is where you will be adding your game characters, your enemies - everything in the game will go in SCENE.

You can have as a single scene, as well as multiple scenes & you can use scenes to represent for different screens, for different game levels and so on.. Also, You can multiple scenes open at once & pass data between them.

Scene has differnet methods, that we use for different purposes. 
Scene lifecycle: 
init() > preload() > create() > update()




*/

// declare new variable, that stores new Phaser scene object (It is provided by the phaser library) & pass in the name for this scene as a parameter.
let gameScene = new Phaser.Scene("Game");

/* ------------------------------- load assets ------------------------------ */
// preload() method
// 'this' refers to scene object
// load.image is a method which loads all the images
// first parameter is a label, second location of image
gameScene.preload = function () {
	// load images
	this.load.image("background", "assets/background.png");
	this.load.image("player", "assets/player.png");
	this.load.image("enemy", "assets/dragon.png");
};

// create() method
// add.sprite allows us to create/show a sprite on the screen
// first/second parameters are x/y coordinates, second is label of the current image
gameScene.create = function () {
	// create background sprite / set initial position of background
	let bg = this.add.sprite(0, 0, "background");

	// bg.setOrigin(0, 0);  // Way 1) change origin/image position to the top-left corner

	// Way 2) change position with setPosition() method
	// bg.setPosition(640 / 2, 360 / 2);  // 640/2, 360/2 -- place image from the center of the screen

	let gameW = this.sys.game.config.width;
	let gameH = this.sys.game.config.height;
	bg.setPosition(gameW / 2, gameH / 2);

	/* console.log(bg); // get sprite object on the console
	console.log(this); // get scene object on the console
	console.log(gameW, gameH); */

	let player = this.add.sprite(70, 180, "player"); // set initial position of player
	//also, we can wright: player.x = 50; player.y = 180;

	// player.depth = 1; // means z-index

	/* ----------------------------- sprite scaling - way 1 ----------------------------- */
	// player.setScale(2, 2); // increase dimensions of sprite by 2
	// player.setScale(2); // same as - player.setScale(2, 2);
	// player.setScale(0.5, 0.5); // dencrease dimensions of sprite by 1/2
	player.setScale(1);

	/* ----------------------------- sprite scaling - way 2 ----------------------------- */
	let enemy = this.add.sprite(250, 180, "enemy");
	enemy.scaleX = 1;
	enemy.scaleY = 1;

	/* --------------------------- create second enemy -------------------------- */
	/* ----------------------------- sprite scaling - way 3 ----------------------------- */
	let enemy2 = this.add.sprite(350, 180, "enemy");
	// enemy2.displayWidth = 200;
	// enemy2.displayHeight = 200;

	/* ------------------------------- flip sprite / rotate 180 degree------------------------------ */
	enemy2.flipX = true;
	enemy2.flipY = true;
};

/* -------------------------------------------------------------------------- */
/*                    2. set the configuration of the game                    */
/* -------------------------------------------------------------------------- */
/* 
We need few things pass here:
1) how will Phaser render this game in the browser: will it use 'WebGL' or it will use 'Canvas API'

`type: Phaser.AUTO` means let Phaser decide which to choose ('WebGL' or 'Canvas API').
-- Phaser will use 'WebGL' if it will be available. And if not, it will use 'Canvas API'..


2) size/dimentions of a game, expressed in pixels
`width: 640,
height: 360,`

3) scene - we had created (single or list of scenes)
`scene: gameScene,`

*/
// set configuration as a JS object:
let config = {
	// Phaser will use 'WebGL' if it will be available. And if not, it will use 'Canvas API'..
	type: Phaser.AUTO,
	// size/dimentions of a game, expressed in pixels
	width: 640,
	height: 360,
	// scene - we had created
	scene: gameScene,
};

/* -------------------------------------------------------------------------- */
/*                           3. create a new game                             */
/* -------------------------------------------------------------------------- */
/* 
Create a new game & pass the configuration we had created.

*/

// Create a new game & pass the configuration we had created
let game = new Phaser.Game(config);

/* -------------------------------------------------------------------------- */
/*                                  4.Splices                                 */
/* -------------------------------------------------------------------------- */
/* 
create Splices - displaing images on the screen.
1) loading images - will occur inside scene

*/
