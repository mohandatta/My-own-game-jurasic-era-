
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dino1;
var dino_img;

var bg;
var bgIMG;

function preload()

{
	dino_img = loadAnimation("img/din1-removebg-preview.png","img/din2-removebg-preview.png","img/din3-removebg-preview.png","img/din4-removebg-preview.png","img/din5-removebg-preview.png","img/din6-removebg-preview.png");
	bgIMG = loadImage("img/dinobg.png");
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg = createSprite(width/2,height/2-30,20,20);
	bg.addImage(bgIMG);
	bg.scale=1;
	bg.velocityX=-6;
	bg.x=bg.width/2

	dino1 = createSprite(400,500,10,10);
	dino1.addAnimation("run",dino_img);
	dino1.scale=2



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");

  if(bg.x<0){
	  bg.x=bg.width/2
  }







  
  drawSprites();
 
}



