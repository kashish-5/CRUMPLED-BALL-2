
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var boxLeftBody,boxBottomBody,boxRightBody;
var boxPosition;
var boxY;
var dustbinImg;
var dustbin;

function preload()

{
	dustbinImg=loadImage("dustbin.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here,.
	paper=new Paper(100,200,30);
	ground=new Ground(width/2,670,width,20);
	
	//Engine.run(engine);
  
}


function draw() {


  Engine.update(engine);

  rectMode(CENTER);
  background("lightgreen");

 ground.display();
 paper.display();
 image(dustbinImg,800,450,200,213);
//drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
	}
}




