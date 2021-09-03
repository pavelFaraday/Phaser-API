# Phaser-API

#### Dawnload & Install Phaser from:

Link: [phaser.io](https://phaser.io/download/stable).

---

#### Steps for installing:

-   **1. Create a new scene:**

Scene means the place, where all the actions take place. That is where you will be adding your game characters, your enemies - everything in the game will go in scene.

You can have as a single scene, as well as multiple scenes & you can use scenes to represent for different screens, for different game levels and so on.. Also, You can multiple scenes open at once & pass data between them.

Scene has different methods, that we use for different purposes.

**Scene lifecycle:**

> init() > preload() > create() > update()

**init()** --- when a new scene started, it called 'init()' method. It is called once & and it is used to initiate certain parameters of scene. It is not always used.
**preload()** --- in this phase, Phaser will load all the images or audio files, or other external files that you want to use in your game. All those files will be loaded to memory. So that, they can be used without any delay.
**create()** --- This method is called only once, after the preload() phase finishes. Exactly on this phase you create **sprites** and display them on the screen.
**update** --- it is called on each frame, during the gameplay. So it is used for the things need to be checked at all time.

Declare new variable, that stores new Phaser scene object (It is provided by the phaser library) & pass in the name for this scene as a parameter.

`let gameScene = new Phaser.Scene("Game");`

-   **2. Set the configuration of the game:**

We need few things pass here:

1.  how will Phaser render this game in the browser: will it use 'WebGL' or it will use 'Canvas API'
    `type: Phaser.AUTO` - means let Phaser decide which to choose ('WebGL' or 'Canvas API').
    Phaser will use 'WebGL' if it will be available. And if not, it will use 'Canvas API'.

> What is 'WebGL' and how do you use it?
> WebGL is functionally based off OpenGL ES, it is partly written in JavaScript. WebGL is used to render interactive 2D and 3D graphics in compatible web browsers. The API allows users to experience interactive content on webpages, with GPU acceleration, without having to first download or install any plug-ins.

> What is 'Canvas API' and how do you use it?
> The Canvas API provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing. The Canvas API largely focuses on 2D graphics. If you want to draw anything in the renderer or create textures without loading them in, the way is to use the canvas API.

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
