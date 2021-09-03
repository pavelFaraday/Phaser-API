/* -------------------------------------------------------------------------- */
/*                          1. create a new SCENE                             */
/* -------------------------------------------------------------------------- */

let gameScene = new Phaser.Scene("Game");

/* ------------------------------- load assets ------------------------------ */

gameScene.preload = function () {
	this.load.image("background", "assets/background.png");
	this.load.image("player", "assets/player.png");
};

/* ----------------------------- create sprites ----------------------------- */

gameScene.create = function () {
	let bg = this.add.sprite(0, 0, "background");
	let gameW = this.sys.game.config.width;
	let gameH = this.sys.game.config.height;
	bg.setPosition(gameW / 2, gameH / 2);

	let player = this.add.sprite(70, 180, "player");
	player.setScale(1);
	let enemy = this.add.sprite(250, 180, "enemy");
	enemy.scaleX = 1;
	enemy.scaleY = 1;
	let enemy2 = this.add.sprite(350, 180, "enemy");
	enemy2.flipX = true;
	enemy2.flipY = true;
};

/* -------------------------------------------------------------------------- */
/*                    2. set the configuration of the game                    */
/* -------------------------------------------------------------------------- */

let config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	scene: gameScene,
};

/* -------------------------------------------------------------------------- */
/*                           3. create a new game                             */
/* -------------------------------------------------------------------------- */

let game = new Phaser.Game(config);
