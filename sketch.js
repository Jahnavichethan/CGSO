var zenia,tourus,cyclap
var wall1,wall2,wall3
var lane1,lane2

function setup() {
  createCanvas(600,600);
  //to create sprites and give colour 
  lane1=createSprite(300,200,650,10);
  lane2=createSprite(300,400,650,10);
  wall1=createSprite(50,100,20,100);
  wall2=createSprite(50,300,20,100);
  wall3=createSprite(50,500,20,100);
  zenia=createSprite(550,100,30,30);
  tourus=createSprite(550,300,30,30);
  cyclap=createSprite(550,500,30,30);
  lane1.shapeColor="white";
  lane2.shapeColor="white";
  zenia.shapeColor="white";
  tourus.shapeColor="white";
  cyclap.shapeColor="white";
  
  //to give velocity
  zenia.velocityX=-3;
  tourus.velocityX=-3;
  cyclap.velocityX=-3;
  
  
}

function draw() {
  background("black");  
  //to change the colour of the sprites on touching the wall 
  // car zenia 
  if((zenia.x-wall1.x)<(zenia.width+wall1.width)/2){
    zenia.velocityX=0;
    zenia.shapeColor="red";
  }
  // car tourus
  if((tourus.x-wall2.x)<(tourus.width+wall2.width)/2){
    tourus.velocityX=0;
    tourus.shapeColor="green";
  }
  // car cyclap
  if((cyclap.x-wall3.x)<(cyclap.width+wall3.width)/2){
    cyclap.velocityX=0;
    cyclap.shapeColor="yellow";
  }
  drawSprites();
}