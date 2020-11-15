//Create variables here
var dog,dogImg1,dogImg
var database
var foods,foodstock

function preload(){
  //load images here
  this.image = loadImage("images/dogImg.png")
  this.image = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
  createCanvas(500, 500);
  background(46, 139, 87);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg.png);
  foodstock = database.ref('food');
  foodstock.on("value",readStock);
  if(KeyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogImg1.png);
  }
}


function draw() {  
dog.display();
  drawSprites();
  //add styles here
  text("Note:Press UP_ARROW to feed the dog milk",150,180)
  texrSize(19);
  fill(255,255,255)
  
}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
    }else{
  x=x-1
    }
  database.ref('/').update({
  food:x
})
}