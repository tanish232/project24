
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,ball1;
function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
ball1= new Ball(200,670,30);
ground=new Ground(400,675,700,10);
rect1=new Box(550,660,200,20);
rect2=new Box(450,620,20,100);
rect3=new Box(650,620,20,100);
Engine.run(engine);
  
}


function draw() {
  background("black");
  ground.display();
  ball1.display();
  rect1.display();
	rect2.display();
	rect3.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode ===UP_ARROW) {
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-100});
 }	
 }


