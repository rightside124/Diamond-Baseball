function createPitch(type){

  let base = {
    x:475,
    y:200,
    vx:0,
    vy:6,
    breakX:0,
    breakY:0
  };

  if(type === "FASTBALL"){
    base.vy = 9;
  }

  if(type === "CURVE"){
    base.breakY = 3;
  }

  if(type === "SLIDER"){
    base.breakX = -3;
  }

  if(type === "CHANGEUP"){
    base.vy = 5;
  }

  return base;
}
[