const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, groundoption;
var circle, circleoption;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    circleoption = {
        restitution: 0.5
    }

    groundoption = {
        isStatic: true
    }

    circle = Bodies.circle(200,100,10,circleoption);
    ground = Bodies.rectangle(200,395,400,10,groundoption);

    


    World.add(world,ground);
    World.add(world,circle);
}

function draw(){
    background(255);
    console.log(circle);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    ellipseMode(RADIUS);
    ellipse(circle.position.x,circle.position.y,10,10);
}