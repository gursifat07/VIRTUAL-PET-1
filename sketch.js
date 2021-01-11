var dog, dogImg, happyDogImg;
var database; 
var foodS; 
var foodStock=20;

function preload()
{
dogImg=loadImage("Dog.png");
happyDogImg=loadImage("happyDog.png");

}

function setup() {
  database = firebase.database();
  food =foodStock;

  createCanvas(500, 500);

  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.15
  
 var foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  
  drawSprites();

  fill("white")
  textSize(25)
  text("Note: Press UP Arrow to feed the dog",50,50);

  text("Food Used:"+foodS ,50,100)

  //add styles here
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
    foodS=foodS+1
  }
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
 
}