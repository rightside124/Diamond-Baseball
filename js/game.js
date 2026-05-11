const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let ball = null;

canvas.addEventListener("click", ()=>{

  let type = ["FASTBALL","CURVE","SLIDER","CHANGEUP"]
    [Math.floor(Math.random()*4)];

  ball = createPitch(type);

  STATE.game.pitch = {
    type:type,
    speed:Math.floor(80+Math.random()*25)
  };
});

function swing(){

  if(!ball) return;

  let hit = Math.random() + STATE.player.attributes.power/200;

  if(hit > 0.5){
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

  alert(`EV:${velo.toFixed(0)} LA:${angle.toFixed(0)} DIST:${dist.toFixed(0)}`);

  STATE.game.score[1]++;
}

function update(){

  if(ball){
    ball.x += ball.vx;
    ball.y += ball.vy;

    ball.vx += ball.breakX * 0.1;
    ball.vy += ball.breakY * 0.1;

    if(ball.y > 600){

      if(ball.x > 420 && ball.x < 520){
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

  // STRIKE ZONE
  ctx.strokeStyle="white";
  ctx.strokeRect(420,480,100,120);

  if(ball){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 7, 0, Math.PI*2);
    ctx.fill();
  }

  updateUI();
}

update();
``