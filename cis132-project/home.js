  var t;
  var t2;
  var onClock = false;
  var count = 0;
  var imgNum = 1;
  var winWidth = 0;
  var isMoving = false;
  
  function current() {
    var clock = new Date();
    var time_str = "Time: ";
    var date_str = "Date: ";
    if ((clock.getHours() < 10 && clock.getHours() > 0) 
        || (clock.getHours() > 12 && clock.getHours() < 21)) time_str += "0";
    if (clock.getHours() == 0 || clock.getHours() == 12) {
      time_str += 12 + ":";
    } else {
      time_str += clock.getHours()%12 + ":";
    }
    if (clock.getMinutes() < 10) time_str += "0";
    time_str += clock.getMinutes() + ":";
    if (clock.getSeconds() < 10) time_str += "0";
    time_str += clock.getSeconds();
    if (clock.getHours() >= 12) {
      time_str += " PM";
    } else {
      time_str += " AM";
    }
    if (clock.getMonth() < 9) date_str += "0";
    date_str += (clock.getMonth()+1) + "/";
    if (clock.getDate() < 10) date_str += "0";
    date_str += clock.getDate() + "/" + clock.getFullYear();
    document.getElementById("current").innerHTML = time_str +"<br>"+ date_str;
  }
  
  function clock() {
    current();
    t = setTimeout("clock()",500);

  }

function begin() {
  winWidth = parseInt(window.innerWidth);
  movePac();
  clock();
}
  
function movePac() {
  if (imgNum > 8) imgNum = 1;
  obj = document.getElementById("pac");
  obj.src = "pac" + imgNum +".png";
  if (parseInt(obj.style.left) < (winWidth + 50)) {
    obj.style.left = parseInt(obj.style.left) + 2 + "px";
    count++;
    imgNum++;
    t2 = setTimeout("movePac()",25);
  } else {
    obj.style.left = "-50px";
    imgNum = 1;
    movePac();
    winWidth = parseInt(window.innerWidth);
    //obj.style.visibility = "hidden";
  }
}