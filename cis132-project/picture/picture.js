var correct = false;
var picture = "";
var picCount = 2;
var picAns = new Array(16);
var credits = new Array(16);

function verify() {
  if (!correct) {
    var regExp = /^[A-z]*$/;
    if (!regExp.test(document.getElementById("answer").value)) {
      document.getElementById("ansResult").innerHTML = "Animal names can't have numbers in them!";
      document.getElementById("ansResult").style.color = "red";
      document.getElementById("ansResult").style.visibility = "visible";
    } else if (!picAns[picCount].test(document.getElementById("answer").value)) {
      document.getElementById("ansResult").innerHTML = "Incorrect! Try Again.";
      document.getElementById("ansResult").style.color = "red";
      document.getElementById("ansResult").style.visibility = "visible";
    } else {
      document.getElementById("ansResult").innerHTML = "Correct!  Click the picture to continue.";
      document.getElementById("ansResult").style.color = "green";
      document.getElementById("ansResult").style.visibility = "visible";
      document.getElementById("pic").src = "animal" + picCount + "b.jpg";
      correct = true;
    }
  }
}

function change(object) {
  if (correct) {
    correct = false;
    picCount++;
    if (picCount > 15) picCount = 1;
    document.getElementById("pic").src = "animal" + picCount + ".jpg"
    document.getElementById("credit").href = credits[picCount];
  }
}

function init() {
  document.getElementById("pic").src = "animal" + picCount + ".jpg";
  picAns[1] = /^horse$/i;
  picAns[2] = /^cat$/i;
  picAns[3] = /^sheep$/;
  picAns[4] = /^(rhino|rhinoceros)$/i;
  picAns[5] = /^squirrel$/i;
  picAns[6] = /^mouse$/i;
  picAns[7] = /^dog$/i;
  picAns[8] = /^snake$/i;
  picAns[9] = /^monkey$/i;
  picAns[10] = /^giraffe$/i;
  picAns[11] = /^frog$/i;
  picAns[12] = /^elephant$/i;
  picAns[13] = /^(bunny|rabbit)$/i;
  picAns[14] = /^fish$/i;
  picAns[15] = /^bird$/i;
  credits[1] = "http://www.ultimatehorsesite.com/colors/palomino.html";
  credits[2] = "http://www.animalsgallery.com/cats/himalayan-cat-pictures/";
  credits[3] = "http://www.sheep101.info/breedsW-Z.html";
  credits[4] = "http://blogs.scientificamerican.com/extinction-countdown/2009/07/13/rhino-poaching-approaches-15-year-high/";
  credits[5] = "http://www.telegraph.co.uk/earth/earthnews/7900963/First-catch-your-squirrel....html";
  credits[6] = "http://dreamsbymaren2.blogspot.com/2010/04/crawling-mouse.html";
  credits[7] = "http://www.dogsilencerpro.net/";
  credits[8] = "http://www.fcps.edu/islandcreekes/ecology/eastern_garter_snake.htm";
  credits[9] = "http://yoon84.wordpress.com/category/monkey-lover/";
  credits[10] = "http://library.sandiegozoo.org/factsheets/giraffe/giraffe.htm";
  credits[11] = "http://www.generalexotics.com/frogs/tree-frogs-for-sale";
  credits[12] = "http://elephantvoices.wildlifedirect.org/category/elephant-sounds/";
  credits[13] = "http://petnewsandviews.net/2011/04/the-easter-bunny-and-me/";
  credits[14] = "http://fish-picspot.blogspot.com/2011/04/fish.html";
  credits[15] = "http://designbeep.com/2011/03/02/the-power-of-color40-superbly-colorful-bird-photos/";
  document.getElementById("credit").href = credits[picCount];
}