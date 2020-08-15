var blt1, blt2, blt3;
var speed1, speed2, speed3, weight;
var wall1,  wall2, wall3;
var thikness1, thikness2, thikness3


function setup() {
  createCanvas(1200,400);

 thikness1 = random(10,40)
 thikness2 = random(10,40)
 thikness3 = random(10,40)

 speed1 = random(55,90)
 speed2 = random(55,90)
 speed3 = random(55,90)

  blt1 = createSprite(50, 350, 15, 5);
  blt2 = createSprite(50, 200, 15, 5);
  car3 = createSprite(50, 50, 15, 5);

  blt1.velocityX= speed1;
  blt2.velocityX= speed2;
  car3.velocityX= speed3;

  wall1=createSprite(1150,350,thikness1,35)
  wall2=createSprite(1150,200,thikness2,35)
  wall3=createSprite(1150,50,thikness3,35)
 
  
}

function draw() {
  background(220);  

  if (blt1.x - wall1.x < blt1.width/2 + wall1.width/2
    && wall1.x - blt1.x < blt1.width/2 + wall1.width/2){
blt1.velocityX = 0;
}
if (blt2.x - wall2.x < blt2.width/2 + wall2.width/2
  && wall2.x - blt2.x < blt2.width/2 + wall2.width/2){
blt2.velocityX = 0;
if (car3.x - wall3.x < car3.width/2 + wall3.width/2
  && wall3.x - car3.x < car3.width/2 + wall3.width/2){
car3.velocityX = 0;
}
}
duribilaty(blt1,wall1);
duribilaty(blt2,wall2);
duribilaty(car3,wall3);

  drawSprites();
}