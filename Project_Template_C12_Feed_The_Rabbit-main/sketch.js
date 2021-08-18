  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apple,appleImage;
  var leaves,leavesImage;
  var select_sprites = Math.round(random(1,2))

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leavesImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApple();
  createLeaves();
  if(frameCount%80==0){
    if(select_sprites==1){
      createApple()
    }
    else{
      createLeaves()
    }
  }
  drawSprites();
}
  //creating a new function createApple
function createApple(){
  if(frameCount%80===0){
    apple= createSprite(random(50,350),40,10,10);
    apple.y = Math.round(random(1,2));
    apple.velocityY = 3;
    apple.addImage(appleImage);
    apple.scale = 0.05;
    apple.lifetime = 100;
  }
  
}
  //creating new function createLeaves
function createLeaves(){
  if(frameCount%80===0){
    leaves= createSprite(random(50,350),40,10,10);
    leaves.y =Math.round(random(1,2));
    leaves.velocityY = 3;
    leaves.addImage(leavesImage);
    leaves.scale = 0.05;
    leaves.lifetime = 100;
  }
}