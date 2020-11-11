
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
  ground.x = ground.width/2;
 FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

  background("white");
   
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -6;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("white");
  text("Score:"+score,300,20);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,20);
}

function spawnFood(){
  if(frameCount% 80===0){
    
    banana = createSprite(400,150,10,10);
    banana.velocityX = -4;
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    FoodGroup.add(banana);
    monkey.depth = banana.depth;
    monkey.depth = monkey.depth+1;
  }
}

function spawnObstacles(){
  if(frameCount% 300 ===0){
    obstacle = createSprite(400,320,10,10);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}




