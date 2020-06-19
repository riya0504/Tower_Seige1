const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;
var gameState = "launched";

function preload(){
  polygon_img = loadImage("sprites/polygon_img.png");
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  
  stand = new Ground(500,370,210,10);
  ground = new Ground(500,395,1000,10);
  //bottom tier
  block1 = new Box(440,350,20,20);
  block2 = new Box(460,350,20,20);
  block3 = new Box(480,350,20,20);
  block4 = new Box(500,350,20,20);
  block5 = new Box(520,350,20,20);
  block6 = new Box(540,350,20,20);
  block7 = new Box(560,350,20,20);
  //2nd tier
  block8 = new Box(450,320,20,20);
  block9 = new Box(470,320,20,20);
  block10 = new Box(490,320,20,20);
  block11 = new Box(510,320,20,20);
  block12 = new Box(530,320,20,20);
  block13 = new Box(550,320,20,20);
  //3rd tier
  block14 = new Box(460,300,20,20);
  block15 = new Box(480,300,20,20);
  block16 = new Box(500,300,20,20);
  block17 = new Box(520,300,20,20);
  block18 = new Box(540,300,20,20);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() {
  background("gray"); 
  Engine.update(engine);

  stand.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  slingshot.display(); 
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,80,40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

