var car, wall, speed, weight, Deformation;
function setup() {
  createCanvas(displayWidth, displayHeight);
  speed= random(55, 100);
  weight= random(500, 1500);
  car = createSprite(-10, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(255,255,255);
  wall = createSprite(displayWidth-displayWidth/4, displayHeight/4, 60, 150);
  wall.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;
  Deformation = 0.5*weight*speed*speed/22500;
  }

  if(Deformation>180){
    car.shapeColor = color(255, 0, 0);
    }
  
    if(Deformation<180 && Deformation>100){
      car.shapeColor = color(230, 230, 0);
    } 
  
    if(Deformation<100){
      car.shapeColor = color(0, 255, 0)
    }  

  drawSprites();
}