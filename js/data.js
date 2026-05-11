const STATE = {

  player:{
    team:"CHI",
    attributes:{
      power:40,
      contact:40,
      vision:40,
      stamina:40,
      fielding:40
    }
  },

  career:{
    season:1,
    points:20,
    hof:[]
  },

  game:{
    score:[0,0],
    balls:0,
    strikes:0,
    bases:[false,false,false],
    pitch:{type:"",speed:0}
  },

  league:{
    teams:[]
  }

};
``