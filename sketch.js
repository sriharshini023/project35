//Create variables here
var dog , happyDog,dogImg;
var database;
var foodS , foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() { 
  background(46,139,87) ;

  if(keyWentDown(Down_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDog);

  }

  drawSprites();

  textSize(20)
  fill("white");
  text("Food:"+foodS,180,100);

  textSize(20);
  fill("white");
  text("Note:press UP_ARROW key to feed Drago milk!",50,450);


  //add styles here

}
function readStock(data){

  foodS = data.val();


}

function writeStock(x){

  if(x<=0){
     x=0;
  }
  else{
    x = x -1 ;
  }
   
  database.ref('/'). update ({

    Food:x

  })

  

}
