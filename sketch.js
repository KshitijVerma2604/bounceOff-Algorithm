var fixedRect, movingRect;
var square1,square2;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 70);
  fixedRect.debug = true;
  fixedRect.shapeColor= "green";

  movingRect = createSprite(200,100,70,30);
  movingRect.debug= true;
  movingRect.shapeColor = "green";

  square1=createSprite(200,100,50,50);
  square1.velocityX=2;
  square2=createSprite(400,100,50,50);
  square2.velocityX=-2;
}

function draw() {
  background("lightblue");  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2)

 
 if( isTouching(movingRect, fixedRect)) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor="red";
 } else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor="green";
 }
bounceOff(square1,square2);


  drawSprites();
}

