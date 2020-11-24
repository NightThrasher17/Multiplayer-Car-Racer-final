class Player {
  constructor(){
  this.name = null
  this.index = null
  this.distance = 0
  this.rank = null

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }

  static getplayerinfo(){
     var playerinfo=database.ref("players");
    playerinfo.on("value",(data)=>{
      allplayers=data.val();
    })


  }

getrank(){
database.ref('rank').on('value',(data)=>{
this.rank = data.val()







})
}

static updaterank(playerrank){

  database.ref('/').update({
rank:playerrank

  })
}

}
