//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;


//var engine, world;
var snow1,snow2,snow3;
var snow4,snow5;
var bg = "snow2.jpg";
var bg1 = "snow1.jpg";

function preload(){
  backgroundImg = loadImage("snow1.jpg");

}



function setup() {
  createCanvas(800,400);
 // engine = Engine.create();
 // world = engine.world;
  
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  //Engine.unpdate(engine);


  textSize(15)
  fill("Black")
  text("Press 'Space Bar' to see a different background", 250, 320)
  


  drawSprites();
}

function keyPressed(){
  if (keyCode === 32){
    backgroundImg = loadImage("snow2.jpg");
  }
  else{
    backgroundImg = loadImage("snow1.jpg");
  }
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg.png";
  }
  else{
      bg = "bg1.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
