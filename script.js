let score = 0;
function addPoint() {
  score = score + 1;
document.getElementById("score"). innerHTML = score;
let sound = document.getElementById("clickSound")
  sound.currentTime = 0;
  sound.play()
  if (score == 100) {
  document. getElementById("achievement").innerHTML = "YOU HAD REACHED 100 POINTS!!!"
  }
}
function resetScore() {
  score = 0
  document. getElementById("score").innerHTML = score;
}
