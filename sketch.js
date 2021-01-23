var canvas;
var gameState=0;
var playerCount;
var database;
var form, game, player;

function setup(){
  //canvas = createCanvas(2000,400,);
 
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start()

}

function draw(){

}