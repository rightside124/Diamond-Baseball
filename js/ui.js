function updateUI(){

  document.getElementById("teams").innerText =
    `${STATE.player.team} ${STATE.game.score[0]} | ${STATE.game.score[1]} OPP`;

  document.getElementById("count").innerText =
    `${STATE.game.balls}-${STATE.game.strikes}`;

  document.getElementById("bases").innerText =
    STATE.game.bases.map(b => b?"◆":"◇").join(" ");

  document.getElementById("pitch-info").innerText =
    `${STATE.game.pitch.type} ${STATE.game.pitch.speed}`;
}
