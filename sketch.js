const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var engine;
var world;
var boy;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var maxDrops=100;
var drops=[];
var rand;
var thunder;
var thunderCreatedFrame=0;

function preload(){
    thunderImg1 = loadImage("images/thunderbolt/1.png");
    thunderImg2 = loadImage("images/thunderbolt/2.png");
    thunderImg3 = loadImage("images/thunderbolt/3.png");
    thunderImg4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    
    engine=Engine.create();
    world=engine.world;
    createCanvas(400,800);

    boy=new Umbrella(200,620);

    if(frameCount%150===0){
      for(var i=0;i<maxDrops;i++){
          drops.push(new Drops(random(0,400),random(0,400)));
      }
    } 
}

function draw(){
    
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunderImg1);
            break;
            case 2: thunder.addImage(thunderImg2);
            break; 
            case 3: thunder.addImage(thunderImg3);
            break;
            case 4: thunder.addImage(thunderImg4);
            break;
            default: 
            break;
        }
        thunder.scale=random(0.3,0.6);
    }
    if(thunderCreatedFrame+10===frameCount&&thunder){
        thunder.destroy();
    }

    boy.display();

    for(var i=0;i<maxDrops;i++){
        drops[i].show();
        drops[i].update();
    }

    drawSprites();

}   

