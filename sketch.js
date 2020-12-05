
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var ground, box1, box2, box3,iimage,iimages;
var dustbin;
function preload() {
	iimage=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper = new paper(150, 610, 20, { isStatic: false });
	ground = new Box(400, 640, 1800, 10);

	
	box3 = new Box1(800, 560, 20, 100, { isStatic: true });
	box2 = new Box1(1000, 560, 20, 100, { isStatic: true });
	box1 = new Box1(900, 620, 220, 20, { isStatic: true });
	// dustbin = new Box2(900, 540,240,200, {isStatic:true});

	// image(iimage,900, 540,240,200, {isStatic:true});
	// iimages=createSprite(900, 540,240,200);
	// iimages.add("dustbingreen.png");


	// console.log(dustbin.x);
	Engine.run(engine);

}


function draw() {
	// rectMode(RADIUS);
	background("white");

	// keyPressed();
	// dustbin.display();
	ground.display();
	
	box1.display();
	box2.display();
	box3.display();
	// dustbin.display();

	Paper.display();
	image(iimage,780, 440,240,200);


	drawSprites();




}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, { x: 60, y: -100 });
	}
}



