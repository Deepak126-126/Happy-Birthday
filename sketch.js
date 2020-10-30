var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground ; 
var box1 , box2 , box3 , world ; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var options = {
	'restitution':0.1,
	'friction':8.0,
	isStatic : true ,
}



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("vineeth.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world ; 
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.05;

	helicopterSprite=createSprite(20, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX=3;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	packageSprite.bounceOff(groundSprite);
	packageSprite.x=helicopterSprite.x;
	drawSprites();
   
  }
  
  function keyPressed() {
   if (touches.length>0 || keyCode === DOWN_ARROW) {
  
	Matter.Body.setStatic(packageBody,false); 
	packageSprite.scale=0.5; 
	helicopterSprite.visible=false;
	helicopterSprite.velocityX=0;
	touches=[];
	}
  }



