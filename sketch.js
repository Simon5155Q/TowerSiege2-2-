const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, platform, box, circle, box1, box2, box4, box5, box6, box7, box8, box9,box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, chain;
var line1;
function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 790, 2000, 20);

    platform = new Platform(1000, 600, 200, 10);

    box = new Box(910, 595, 20, 20);
    box1 = new Box(930, 595, 20, 20);
    box2 = new Box(950, 595, 20, 20);
    box3 = new Box(970, 595, 20, 20);
    box4 = new Box(990, 595, 20, 20);
    box5 = new Box(1010, 595, 20, 20);
    box6 = new Box(1030, 595, 20, 20);
    box7 = new Box(1050, 595, 20, 20);
    box8 = new Box(1070, 595, 20, 20);
    box9 = new Box(1090, 595, 20, 20); 

    line1 = new Line(1000, 585, 200, 10)
    
    box10 = new Box(915, 575, 20, 20);
    box11 = new Box(935, 575, 20, 20);
    box12 = new Box(955, 575, 20, 20);
    box13 = new Box(975, 575, 20, 20);
    box14 = new Box(995, 575, 20, 20);
    box15 = new Box(1015, 575, 20, 20);
    box16 = new Box(1025, 575, 20, 20);
    box17 = new Box(1045, 575, 20, 20);
    box18 = new Box(1065, 575, 20, 20);
    box19 = new Box(1085, 575, 20, 20);
    


    circle = new Circle(300, 300, 15, 15);
    chain = new Chain(circle.body,{x:300,y:300});
}

function draw(){
    background("black");
    noStroke();
        textSize(35)
        fill("white")
        text("Press Space To Reset The Ball", 200, 650);

        noStroke();
        textSize(35)
        fill("white")
        text("Drag The Ball To Destroy The Hexagons", 200, 50);
    Engine.update(engine);

    ground.display();
    platform.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    line1.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    
    circle.display();

    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(circle.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    chain.release();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(circle.body, {x:300, y: 300});
       chain.attach(circle.body);
       
    }
}
