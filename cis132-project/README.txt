Name: Andrew Evans
Project Name: Andrew's Website
Want Fame? No (rather I can't since I dont have my own website!)

Project Purpose:
My project is a website that shows off what I have learned in this class.  The majority of my website demonstrates my new skills in the form of different games.

Project URL Entry Point:
http://www.webhawks.org/~cis132anevan4854/project/home.html

Webpages:
Homepage: http://www.webhawks.org/~cis132anevan4854/project/home.html
  -Gives a basic overview of what my website is about.
  -Animation: *The Pacman-like object moves from left to right at the top of the screen.
              *The duration of the animation is determined by the width of the page window when the animation starts.
              *The animation restarts when the object disappears.
              *Animation function located at: home.js lines 46-64.

Mastermind: http://www.webhawks.org/~cis132anevan4854/project/master/master.html
  -Contains my version of Mastermind.
  -Rules and "How To" are given by clicking the Rules button.
  -Clicking Start Game reveals my pop-up menu (the menu is already activated since its a mouseover event and the Start Game button is located right over the menu.
  
Mastermind Rules: http://www.webhawks.org/~cis132anevan4854/project/master/master_rules.html
  -Contains information on how to play a game of Mastermind.
  
Maze Generator: http://www.webhawks.org/~cis132anevan4854/project/maze/maze.html
  -Contains a visual maze generator.
  -Maze generation explaination given by clicking the About button.
  -Contains a mini interactive game by using the arrow keys.  Explained by clicking the About button.
  -Inspired by an assignment in Steve Hodges' Data Structure class.
  
About Maze Generator: http://www.webhawks.org/~cis132anevan4854/project/maze/maze_about.html
  -Contains information on how the maze generation works.
  -Contains information on how what the game is all about.
  
Picture Game: http://www.webhawks.org/~cis132anevan4854/project/picture/picture.html
  -Contains a picture game.
  -The text form is validated by regular expressions.
    *The input must not contain a number (IE "cat1" "2dog").
    *The input must be the correct answer (IE if the picture is of a cat, only "cat" is accepted).
    *Error messages are displayed for each of the above validations (priority goes to the first validation).
  -The game is simply to guess what the animal is in the distorted picture.
  -Source URLs are given for each picture (but will spoil the game!).
  
Other Links: http://www.webhawks.org/~cis132anevan4854/project/links/links.html
  -Contains my rollover image menu.
  -Each menu item is a link to another webpage/website.
  -There is also a text form that takes in any combination of word characters (as defined by w3schools)
  -Pressing enter while focused on the text field submits the data to the echo page.

Project Requirement Example Locations:
  Note:  The lines code are showing the starting line that is being referenced.
  Embedded JavaScript function
    -links.html lines: 9-11.
  
  External JavaScript function
    -links.js lines: 1-3.
  
  While loop
    -maze.js lines: 28-66.
      *while (this.finished() == false) {
  
  For loop
    -maze.js lines: 115-119.
      *for (var i = 0; i < this.sizeMaze; i++) {
  
  If/else
    -links.js lines: 9-12.
      *if (!regExp.test(document.getElementById("word").value)) {
  
  onload()
    -home.html line: 10.
      *<body onload="begin()">
    -JS function at home.js lines: 42-46.
      *function begin() {
  
  onclick()
    -links.html line: 28.
      *  <img id="cabrillo" src="cabrillo1.png" onmouseover="rollOver(this)" onmouseout="rollOut(this)" onclick="link('http://www.cabrillo.edu')">
    -JS function at links.js lines: 1-3.
      *function link(url) {
  
  onmouseover()
    -links.html line: 28.
      *  <img id="cabrillo" src="cabrillo1.png" onmouseover="rollOver(this)" onmouseout="rollOut(this)" onclick="link('http://www.cabrillo.edu')">
    -JS function at links.html lines: 9-11.
      *function rollOver(pic) {
  
  onmouseout()
    -links.html line: 28.
      *  <img id="cabrillo" src="cabrillo1.png" onmouseover="rollOver(this)" onmouseout="rollOut(this)" onclick="link('http://www.cabrillo.edu')">
    -JS function at links.html lines: 13-15.
      *function rollOut(pic) {
  
  onsubmit()
    -links.html line: 31.
      *  <form action="http://www.edparrish.net/common/echo.php" name="wordForm" id="wordForm" method="post" onsubmit="return verify()">
    -JS function at links.js lines: 5-14.
      *function verify() {
    
  Date object method
    -home.js line: 20.
      *if (clock.getMinutes() < 10) time_str += "0";
      *var clock = new Date(); at line: 10.
  
  Math object method
    -maze.j line: 29.
      *cell = (Math.floor(Math.random() * this.sizeMaze));
  
  JavaScript Animation
    -Animated element at home.html line: 21.
      *<img id="pac" src="pac1.png" style="position:absolute;left:-75px;top:21px">
    -Animation function at home.js lines 48-64.
      *function movePac() {
  
  JavaScript rollover menu
    -Menu elements at links.html lines: 28-30.
      *<img id="cabrillo" src="cabrillo1.png" onmouseover="rollOver(this)" onmouseout="rollOut(this)" onclick="link('http://www.cabrillo.edu')">
    -JS functions at links.html lines : 9-11 and 13-15.
      *function rollOver(pic) {
  
  JavaScript form validation
    -Form at picture.html lines: 22-26.
      *<form id="picForm" onsubmit="return verify()">
    -Form validation JS Functions at picture.js lines 7-26.
      *function verify() {
  
  JavaScript regular expression
    -picture.js lines 9-10.
      *if (!regExp.test(document.getElementById("answer").value)) {
      *regExp is a regular expression at line 9. var regExp = /^[A-z]*$/;
  
  JavaScript pop-up menu
    -Menu elements at master.html lines 21-27.
      *<a href="#" id="difficultySelect" onmouseover="popMenu('difficultyMenu')">Select Difficulty:</a>
    -JS functions at lines: 11-13, 15-17, 19-23, 25-30
  
  