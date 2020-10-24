var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsgroup,cloudsimage
var obstaclegroup,obstacleimage1,obstacleimage2,obstacleimage3,obstacleimage4,obstacleimage5,obstacleimage6,obstacle
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudsimage= loadImage("cloud.png");
  obstacleimage1=loadImage("obstacle1.png");
  obstacleimage2=loadImage("obstacle2.png");
  obstacleimage3=loadImage("obstacle3.pg");
  obstacleimage4=loadImage("obstacle4.png");
  obstacleimage5=loadImage("obstacle5.png");
  obstacleimage6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsgroup=new Group()
}

function draw() {
  background(180);
  
  if(keyDown("space") && trex.y>100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to sspawnCloudspawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = random(130,50);
    cloud.addImage(cloudsimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,160,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand =Math.round(random(1,6));
   switch(rand)
    {
      case 1 :obstacle.addImage(obstacleimage1);
      break;  
      case 2 :obstacle.addImage(obstacleimage2);
      break;  
      case 3 :obstacle.addImage(obstacleimage3);
      break;  
      case 4 :obstacle.addImage(obstacleimage4);
      break;  
      case 5 :obstacle.addImage(obstacleimage5);
      break;  
      case 6 :obstacle.addImage(obstacleimage6);
      break;  
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
  }
}
