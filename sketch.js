//Global Variables

var monkey1, invisible_ground,count, backingground;

var monkeyRunning, backgroundImage, obstacleImage, bananaImage;

var bananaGroup
var obstacleGroup


function preload(){
  backgroundImage = loadImage("jungle.jpg");
  
  monkeyRunning =                         loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png", "Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  
  
}


function setup() {
  createCanvas(600,300);
  
  backingground = createSprite(600,200,600,300);
  backingground.addImage("background",backgroundImage);
  backingground.velocityX = -3;
  backingground.scale = 0.75;
  backingground.x = backingground.width /2;
  
  monkey1 = createSprite(40,257);
  monkey1.addAnimation("running", monkeyRunning);
  monkey1.scale = 0.15;
  
  ground = createSprite(200,390,400,10);
  ground.velocityX = -3;
  
  invisible_ground = createSprite(200,290,600,10);
  invisible_ground.velocityX = -3;
  invisible_ground.visible = false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  count = 0;
}


function draw(){
 background(255);
  
  text("Score" + count, 20,20);
  
  if (backingground.x < 0){
    backingground.x = backingground.width/2;
  }
  
  fruits();
  
  if (bananaGroup.isTouching(monkey1)) {
    
    count = count+2  
    bananaGroup.destroyEach();
      }
  
  drawSprites();
}

function fruits() {
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(500,270);
    banana.y = Math.round(random(200,270))
    banana.addImage("Banana", bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.10;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}