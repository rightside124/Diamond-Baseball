const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let ball = null;

canvas.addEventListener("click", ()=>{

  if(STATE.mode !== "GAME") return;

  let type = ["FASTBALL","CURVE","SLIDER","CHANGEUP"]
    [Math.floor(Math.random()*4)];

  ball = createPitch(type);

  STATE.game.pitch = {
    type:type,
    speed:Math.floor(80+Math.random()*20)
  };

});

function swing(){

  if(!ball) return;

  let dist = Math.abs(ball.x - 475);

  let hitChance = 0.4 + (STATE.player.attributes.power / 200);

  if(dist < 60 && Math.random() < hitChance){
    hitBall();
  } else {
    STATE.game.strikes++;
  }

  ball = null;
}

function hitBall(){

  let velo = 80 + Math.random()*40;
  let angle = Math.random()*40;
  let dist = velo * 3;

  alert(`EV:${velo.toFixed(0)} MPH\nLA:${angle.toFixed(0)}\nDIST:${dist.toFixed(0)} FT`);

  STATE.game.score[1]++;
}

function update(){

  if(ball){

    ball.x += ball.vx;
    ball.y += ball.vy;

    if(ball.y > 250){
      ball.vx += ball.breakX * 0.15;
      ball.vy += ball.breakY * 0.15;
    }

    if(ball.y > 600){

      let inZone = ball.x > 400 && ball.x < 550;

      if(inZone){
        STATE.game.strikes++;
      } else {
        STATE.game.balls++;
      }

      ball = null;
    }
  }

  draw();
  requestAnimationFrame(update);
}

function draw(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  // ✅ STRIKE ZONE FIX
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.strokeRect(400,350,150,200);

  if(ball){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 7, 0, Math.PI*2);
    ctx.fill();
  }

  updateUI();
}

update();
