
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload() {
	binImg = loadImage("Images/dustibingreen.png");
}

function setup() {
	var canvas = createcanvas(1100,500);
	engine = Engine.create();
	world = engine.world();

	ground = new ground();
	crumpledPaper = new Paper();

	bin = createSprite(200,250,300,320);
	bin.addImage = (binImg);
	bin.scale = 0.39;

	binPart1 = newDustbin(700,750,800,830);
	binPart2 = newDustbin(600,650,700,745);
	binPart3 = newDustbin(650,680,800,839);
}

function draw() {
		background(3);
		Engine.update(engine);

		//text(mouseX+","+mouseY,500,300);

		ground.display();
		crumpledPaper.display();
		binPart1.display();
		binPart2.display();
		binPart3.display(); 
		  
		drawSprites();

	}
function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:99,y:-30});
			matter.static = setStatic 
		}

	}

