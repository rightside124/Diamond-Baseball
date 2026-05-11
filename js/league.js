function generateLeague(){

  STATE.league.teams = [];

  for(let i=0;i<30;i++){
    STATE.league.teams.push({
      name:"TEAM"+i,
      wins:0,
      losses:0
    });
  }
}