function startCareer(){

  STATE.mode = "GAME";

  document.getElementById("menu").style.display = "none";
  document.getElementById("scoreboard").style.display = "flex";
  document.getElementById("controls").style.display = "block";

}

function exitMenu(){

  saveGame();

  STATE.mode = "MENU";

  document.getElementById("menu").style.display = "block";
  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("controls").style.display = "none";
}
