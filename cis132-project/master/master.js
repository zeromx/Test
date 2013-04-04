var activeMenu = null;
var gameOn = false;
var secret = new Array(4);
var turns = 0;
var win = false;

function $(id) {
    return document.getElementById(id);
}

function hideIt(object) {
  object.style.visibility="hidden";
}

function showIt(object) {
  object.style.visibility="visible";
}

function popMenu(menu) {
  hideMenu();
  activeMenu = $(menu);
  showIt(activeMenu);
}

function hideMenu() {
  if (activeMenu !== null) {
    hideIt(activeMenu);
    activeMenu = null;
  }
}

function hideStuff() {
  $("difficultySelect").style.visibility="hidden";
  $("difficulty").style.visibility="hidden";
  $("againButton").style.visibility="hidden";
  $("inProgress").style.visibility="hidden";
}

function deleteHistory() {
  var history = $("history");
  for (var i = history.rows.length - 1; i > 0; i--) {
    history.deleteRow(i);
  }
}

function insertHistory(guess,correct) {
var table = $("history");
var row = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
for (var i = 0; i < 4; i++) {
  var img = new Image();
  img.src = "sball"+guess[i]+".png";
  td1.appendChild(img);
}
for (var i = 0; i < correct[0]; i++) {
  var img = new Image();
  img.src = "pball0.png";
  td2.appendChild(img);;
}
for (var i = 0; i < correct[1]; i++) {
  var img = new Image();
  img.src = "pball1.png";
  td2.appendChild(img);
}
for (var i = 0; i < ((4 - correct[0]) - correct[1]); i++) {
  var img = new Image();
  img.src = "pball2.png";
  td2.appendChild(img);
}

row.appendChild(td1);
row.appendChild(td2);
table.appendChild(row);
}

function resetCode() {
  var temp = "answerPic";
  for (var i = 1; i <= 4; i++) {
    $(temp + i).src = "ball0.png";
  }
}

function resetGuess() {
  var temp = "playerPic";
  for (var i = 1; i <= 4; i++) {
    $(temp + i).src = "ball1.png";
  }
}

function clearGame() {
  deleteHistory();
  resetCode();
  resetGuess();
  $("turns").innerHTML = "Guesses Left: ??";
}

function turnCounter() {
  turns--;
  $("turns").innerHTML = "Turns Left: " + turns;
}

function revealSecret(){
  var temp = "answerPic";
  for (var i = 1; i <= 4; i++) {
    $(temp + i).src = "ball" +secret[i-1] + ".png";
  }
}

function changeImage(img) {
  if (gameOn) {
    var str = img.src.match(/ball[0-9].png/);
    var imgIndex = parseInt(str[str.length - 1].charAt(4));
    imgIndex++;
    if (imgIndex > 6) imgIndex = 1;
    img.src = "ball"+imgIndex+".png";
  }
}

function getGuess(guess) {
  var str = ""
  var img = ""
  var imgIndex = 0;
  for (var i = 0; i < 4; i++) {
    img = $("playerPic"+(i+1));
    str = img.src.match(/ball[0-9].png/);
    imgIndex = parseInt(str[str.length - 1].charAt(4)); 
    guess[i] = imgIndex;
  }
  return guess;
}

function fullCorrect(correct, tempGuess, tempSecret) {
  for (var i = 0; i < 4; i++) {
    if (tempGuess[i] == tempSecret[i]) {
      tempGuess[i] = -1;
      tempSecret[i] = -2;
      correct[0]++;
    }
  }
}

function partialCorrect(correct, tempGuess, tempSecret) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (tempGuess[i] == tempSecret[j]) {
        tempGuess[i] = -1;
        tempSecret[j] = -2;
        correct[1]++;
        j=4;
      }
    }
  }
}

function checkGuess(guess) {
  var correct = new Array(2);
  var tempGuess = guess.slice(0);
  var tempSecret = secret.slice(0);
  correct[0]=0;correct[1]=0;
  fullCorrect(correct,tempGuess,tempSecret);
  partialCorrect(correct,tempGuess,tempSecret);
  insertHistory(guess,correct);
  if (correct[0] == 4) win = true;
}

function makeGuess() {
  if (gameOn) {
    var guess = new Array(4);
    getGuess(guess);
    checkGuess(guess);
    turnCounter();
    if (win) {
      revealSecret();
      alert("Congratulations! You Won!");
      gameOn = false;
      $("againButton").style.visibility="visible";
      $("inProgress").style.visibility="hidden";
      return;
    }
    if (turns == 0) {
      revealSecret();
      alert("Out of turns! Game Over!");
      gameOn = false;
      $("againButton").style.visibility="visible";
      $("inProgress").style.visibility="hidden";
      return;
    }
  }
  
}

function initGame(difficulty) {
  turns = parseInt(difficulty);
  $("turns").innerHTML = "Guesses Left: " + turns
  for (var i = 0; i < secret.length; i++) {
    secret[i] = Math.floor(Math.random() * 6 + 1);
  }
  gameOn = true;
  win = false;
  $("difficultySelect").style.visibility="hidden";
  $("difficulty").style.visibility="hidden";
  $("inProgress").style.visibility="visible";
}

function start(object) {
  clearGame();
  object.style.visibility="hidden";
  $("difficulty").style.visibility="visible";
  $("difficultySelect").style.visibility="visible";
}

function dispRules() {
  window.open("master_rules.html","_blank","scrollbars=yes","height=300","false");
}