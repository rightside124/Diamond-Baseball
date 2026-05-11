function saveGame(){
  localStorage.setItem("save", JSON.stringify(STATE));
}

function loadGame(){
  let data = localStorage.getItem("save");
  if(data) Object.assign(STATE, JSON.parse(data));
}