var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1536, 750);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false;
	

	helicopterSprite=createSprite(155, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, 640, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);


 	boxBase=createSprite(boxPosition+100, boxY+70, 200,20);
 	boxBase.shapeColor=color(255,0,0);


 	boxleftSprite=createSprite(boxPosition+200 , 640, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);


	 

	Engine.run(engine);
  
}


function draw() {
	//helicopterSprite.velocityX=0;
  rectMode(CENTER);
  background(0);
 Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



  drawSprites();
  keypressed();
  
 
 
}
function keypressed(){
	if (keyCode===LEFT_ARROW){
		helicopterSprite.velocityX=-10;
	
	}
	if (keyCode===RIGHT_ARROW){
		helicopterSprite.velocityX=10;
		
	}
	if (keyCode===DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false); 
		packageSprite.visible=true;
		//helicopterSprite.velocityX=0;
	}
}
