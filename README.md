# Phaser-API

#### Dawnload & Install Phaser from:

Link: [phaser.io](https://phaser.io/download/stable).

---

#### Steps for installing:

-   **1. Create a new scene:**

Scene means the place, where all the actions take place. That is where you will be adding your game characters, your enemies - everything in the game will go in scene.

You can have as a single scene, as well as multiple scenes & you can use scenes to represent for different screens, for different game levels and so on.. Also, You can multiple scenes open at once & pass data between them.

Declare new variable, that stores new Phaser scene object (It is provided by the phaser library) & pass in the name for this scene as a parameter.

`let gameScene = new Phaser.Scene("Game");`

-   **2. Set the configuration of the game:**

We need few things pass here:

1.  how will Phaser render this game in the browser: will it use 'WebGL' or it will use 'Canvas API'
    `type: Phaser.AUTO` - means let Phaser decide which to choose ('WebGL' or 'Canvas API').
    Phaser will use 'WebGL' if it will be available. And if not, it will use 'Canvas API'.

2.  size/dimentions of a game, expressed in pixels
    `width: 640, height: 360,`

3.  scene - we had created (single or list of scenes)
    `scene: gameScene,`

CODE:

         // set configuration as a JS object:
         let config = {
             type: Phaser.AUTO,
             width: 640,
             height: 360,
             scene: gameScene,
         };

-   **3. create a new game:**

Create a new game & pass the configuration we had created.

`let game = new Phaser.Game(config);`
