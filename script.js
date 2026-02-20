let clickvalue = 1
 upgradecost = 100
let score = 0;
function addPoint() {
  score = score + clickvalue;
document.getElementById("score"). innerHTML = score;
let sound = document.getElementById("clickSound")
  sound.currentTime = 0;
  sound.play() 
  if (score == 100) {
  document. getElementById("achievement").innerHTML = "YOU HAD REACHED 100!!!"
  setTimeout(function() { document.getElementById("achievement").innerHTML = "";                       }, 2000) 
  }
  else if (score == 500){   document.getElementById("achievement").innerHTML = "YOU HAD REACHED 500!!!😮"
    setTimeout(function() {     document.getElementById("achievement").innerHTML = "";
  }, 2000) 
  }}
function resetScore() {
  score = 0;
  clickvalue = 1;
  upgradecost = 100;  document.getElementById("Upgrade").innerHTML = "UPGRADE CLICKS?  Cost:" + upgradecost;
  document. getElementById("score").innerHTML = "0";   document.getElementById("achievement").innerHTML = ""
}
function upgrade() {
  if (score >= upgradecost) {
    score = score - upgradecost;
    clickvalue = clickvalue + 1;
    upgradecost = upgradecost * 2;
   clickvalue = clickvalue + 2;  document.getElementById("score").innerHTML = score;
  document.getElementById("Upgrade").innerHTML = "UPGRADE CLICKS? Cost:"
  + upgradecost
  }
    }
