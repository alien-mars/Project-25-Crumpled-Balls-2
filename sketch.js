
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var log1, log2, log3;
var paper;
var dustbin;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

	paper = new Paper(50,680,40);

	log1 = new Log(557,590,15,173);
	log2 = new Log(693,590,15,173);
	log3 = new Log(625,673,150,15);
	//log3.addImage(dustbinImg);

	dustbin = new Dustbin(625,673,165,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  textSize(20);
  fill(0);
  text("Press Up-Arrow and try to throw the Paper in the Dustbin!",150,200);

  //dustbin.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();
  dustbin.display();
  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20});
	}
}



