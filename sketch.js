var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;

var form, player, game;

var AllPlayers;

var Car1, Car2, Car3, Car4;
var Cars = [];
var carImage1, carImage2, carImage3, carImage4;

var Ranker = 1;

function preload() {
  carImage1 = loadImage("images/Car-Top-View.png");
  carImage2 = loadImage("images/BMW.png");
  carImage3 = loadImage("images/Picture1.png");
  carImage4 = loadImage("images/car-top-view-png-3.png");
  backgroundImage = loadImage("images/track-Completed.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  if (gameState === 0)
    game.start();
}

function draw() {
  if (playerCount === 4 && gameState == 0) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
    console.log(1);
    form.hide();

    console.log(Car1.isTouching(Car2));
    Car1.collide(Car2);
  }
}