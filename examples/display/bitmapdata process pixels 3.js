
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('crystal', 'assets/pics/cougar_dragonsun.png');

}

var bmd;

function create() {

	bmd = game.make.bitmapData(724, 566);

	bmd.draw('crystal');

	bmd.update();

	game.add.sprite(0, 0, bmd);

	game.input.onDown.add(startProcess, this);

}

function startProcess () {

	bmd.processPixelRGB(forEachPixel, this);

}

function forEachPixel (pixel) {

    /**
    * This callback will be sent a single object with 6 properties: `{ r: number, g: number, b: number, a: number, color: number, rgba: string }`.
    * Where r, g, b and a are integers between 0 and 255 representing the color component values for red, green, blue and alpha.
    * The `color` property is an Int32 of the full color. Note the endianess of this will change per system.
    * The `rgba` property is a CSS style rgba() string which can be used with context.fillStyle calls, among others.
    * The callback must return either `false`, in which case no change will be made to the pixel, or a new color object.
    * If a new color object is returned the pixel will be set to the r, g, b and a color values given within it.
    */

	pixel.r = pixel.r;
	pixel.g = pixel.r;
	pixel.b = pixel.r;

	return pixel;

}