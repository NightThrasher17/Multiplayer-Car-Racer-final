class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playercountref = await database.ref("playerCount").once("value");
    if(playercountref.exists()){
    playerCount = playercountref.val();    
    player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200)
car2 = createSprite(300,200)
car3 = createSprite(500,200)
car4 = createSprite(700,200)
cars = [car1,car2,car3,car4]

car1.addImage(car1img)
car2.addImage(car2img)
car3.addImage(car3img)
car4.addImage(car4img)

}

play(){

form.hide();
//text("Game Start",120,100)
Player.getplayerinfo();
player.getrank()
if(allplayers!==undefined)
{
  background(groundimg)
 image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
  var index=0
 var x=350;
 var y;
 for(var i in allplayers)
 {
   index=index+1;
   x=x+250;
   y=displayHeight-allplayers[i].distance;
   cars[index-1].position.x=x;
   cars[index-1].position.y=y;
   if(index===player.index)
   {
     //cars[index-1].debug = true;
     camera.position.x = displayWidth/2;
      camera.position.y = cars[index-1].y;
      fill("red")
      stroke(10)
      ellipse(x,y,60,60);

   
   
   
    }

 }


}


if(keyDown("up")&& player.index!==null){
  player.distance+=10;
  player.update();
}

if(player.distance>5360){
gameState = 2;
player.rank+=1
Player.updaterank(player.rank)
console.log(player.rank)
}


drawSprites();
}

end(){




  console.log("game has ended")
}


}
