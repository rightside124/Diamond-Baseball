function createPitch(type){

  let base = {
    x:475,
    y:120,
    vx:0,
    vy:6,
    breakX:0,
    breakY:0
  };

  if(type === "FASTBALL"){
    base.vy = 9;
  }

  if(type === "CURVE"){
    base.breakY = 2.5;
  }

  if(type === "SLIDER"){
    base.breakX = -2.5;
  }

  if(type === "CHANGEUP"){
    base.vy = 5;
  }

  return base;
}
