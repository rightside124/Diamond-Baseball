function startCareer(){

  STATE.player.attributes = {
    power:40,
    contact:40,
    vision:40,
    stamina:40,
    fielding:40
  };

  STATE.career.points = 20;

}

function signContract(team){

  STATE.player.team = team;
}