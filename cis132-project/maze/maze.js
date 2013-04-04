var mazeReady = false;
var mazeData = new Array();
var player = 0;
var item1 = false;
var item2 = false;
var size = 15;

function $(id) {
    return document.getElementById(id);
}

function Maze(size) {
  this.sizeBase = size;
  this.sizeMaze = size * size;
  this.data = new Array(size * size);
  this.maze = new UnionFind(size * size);
  
  this.createMaze = function() {
    this.data = new Array(this.sizeMaze);
    this.maze = new UnionFind(this.sizeMaze);
    for (var i = 1; i < (this.sizeMaze - 1); i++) {
      this.data[i] = 15;
    }
    this.data[0] = 11;
    this.data[this.sizeMaze -1] = 14;
    var cell;
    var choose;
    while (this.finished() == false) {
      cell = (Math.floor(Math.random() * this.sizeMaze));
      choose = (Math.floor(Math.random() * 4));
      if (this.data[cell] > 0) {
        while(choose > 0) {
          if (this.isUp(cell) && choose == 0) {
            if (this.maze.find(cell) != this.maze.find(this.up(cell))) {
              this.data[cell] = this.data[cell] - 8;
              this.data[cell - this.sizeBase] = this.data[this.up(cell)] - 2;
              this.maze.union(cell, this.up(cell));
              choose = 0;
            }

          } else if (this.isLeft(cell) && choose == 1) {
            if (this.maze.find(cell) != this.maze.find(this.left(cell))) {
              this.data[cell] = this.data[cell] - 4;
              this.data[cell - 1] = this.data[this.left(cell)] - 1;
              this.maze.union(cell, this.left(cell));
              choose = 0;
            }
          } else if (this.isRight(cell) && choose == 2) {
            if (this.maze.find(cell) != this.maze.find(this.right(cell))) {
              this.data[cell] = this.data[cell] - 1;
              this.data[cell + 1] = this.data[this.right(cell)] - 4;
              this.maze.union(cell, this.right(cell));
              choose = 0;
            }
          } else if (this.isDown(cell) && choose == 3) {
            if (this.maze.find(cell) != this.maze.find(this.down(cell))) {
              this.data[cell] = this.data[cell] - 2;
              this.data[cell + this.sizeBase] = this.data[this.down(cell)] - 8;
              this.maze.union(cell, this.down(cell));
              choose = 0;
            }
          }
          choose--;
        }
      }
    }
  }
  
  this.up = function(x) {
    return (x - this.sizeBase);
  }
  
  this.left = function(x) {
    return (x - 1);
  }
  
  this.right = function(x) {
    return (x + 1);
  }
  
  this.down = function(x) {
    return (x + this.sizeBase);
  }
  
  this.isUp = function(x) {
    if ((x - this.sizeBase) >= 0) {
      return true;
    }
    return false;
  }
  
  this.isLeft = function(x) {
    if ((x - 1) >= 0 && ((x % this.sizeBase) != 0) || x == 1 && x != 0) {
      return true;
    }
    return false;
  }
  
  this.isRight = function(x) {
    if ((x + 1) >= (this.sizeMaze - 1) && ((x + 1) % this.sizeBase) != 0 && x != (this.sizeMaze - 1)) {
      return true;
    }
    return false;
  }
  
  this.isDown = function(x) {
    if ((x + this.sizeBase) <= (this.sizeMaze - 1)) {
      return true;
    }
    return false;
  }
  
  this.finished = function() {
    var x = this.maze.find(0);
    for (var i = 0; i < this.sizeMaze; i++) {
      if (this.maze.find(i) != x) {
        return false;
      }
    }
    return true;
  }
          
}

function UnionFind(size) {
  this.size = size;
  this.parent = new Array();
  this.rank = new Array();
  
  for (var i = 0; i < size; i++) {
    this.parent[i] = i;
    this.rank[i] = 0;
  }
  
  this.find = function(x) {
    if (x != this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  
  this.link = function(x,y) {
    if (x == y) {
      return;
    }
    if (this.rank[x] > this.rank[y]) {
      this.parent[y] = x;
    } else {
      this.parent[x] = y;
      if (this.rank[x] == this.rank[y]) {
        this.rank[y]++;
      }
    }
  }
  
  this.union = function(x,y) {
    this.link(this.find(x), this.find(y));
  }
}

function start() {
  var a = new Maze(size);
  a.createMaze();
  insertPics(size);
  display(a.data); 
  escapeInit(a.data);
  
}

function restart() {
  var a = new Maze(size);
  a.createMaze();
  display(a.data); 
  escapeInit(a.data);
}

function insertPics(size) {
  for (var i = 0; i < (size * size); i++) {
    if ((i % size) == 0) {
      var br = document.createElement("br");
      $("pictures").appendChild(br);
    } 
    var img = document.createElement("img");
    img.id = "maze" + i;
    img.src = "maze15.png";
    $("pictures").appendChild(img);

    
  }
}

function display(maze) {
  for (var i = 0; i < maze.length; i++) {
    $("maze" + i).src = "maze" + maze[i] + ".png";
  }
}

function escapeInit(maze) {
  $("maze" + (maze.length - 1)).src = "maze" + maze[(maze.length - 1)] + "b.png";
  $("maze" + (Math.sqrt(maze.length) - 1)).src = "maze" + maze[(Math.sqrt(maze.length) - 1)] + "a.png";
  $("maze" + (maze.length - Math.sqrt(maze.length))).src = "maze" + maze[(maze.length - Math.sqrt(maze.length))] + "a.png";
  mazeData = maze;
  player = maze.length - 1;
  item1 = false;
  item2 = false;
  mazeReady = true;
}

function movePlayer(prev,next) {
  if (next == Math.sqrt(mazeData.length) - 1) item1 = true;
  if (next == mazeData.length - Math.sqrt(mazeData.length)) item2 = true;
  $("maze" + prev).src = "maze" + mazeData[prev] + ".png";
  $("maze" + next).src = "maze" + mazeData[next] + "b.png";
  player = next;
  if (next == 0 && item1 && item2) {
    mazeReady = false;
    alert("You made it to the end with both items!");
  }
}

function moveUp() {
  var x = mazeData[player];
  var next = player - Math.sqrt(mazeData.length);
  if (mazeReady) {
    if (x <= 7) {
      movePlayer(player, next);
    }
  }
}

function moveLeft() {
  var x = mazeData[player];
  var next = player - 1;
  if (mazeReady) {
    if ((x == 1 || x == 2 || x == 3 || x == 8 || x == 9 || x == 10 || x == 11 || x == 0) && player != 0) {
      movePlayer(player, next);
    }
  }
}

function moveRight() {
  var x = mazeData[player];
  var next = player + 1;
  if (mazeReady) {
    if ((x % 2) == 0 && player != (mazeData.length - 1)) {
      movePlayer(player, next);
    } 
  }
}

function moveDown() {
  var x = mazeData[player];
  var next = player + Math.sqrt(mazeData.length);
  if (mazeReady) {
    if (x == 1 || x == 4 || x == 5 || x == 8 || x == 9 || x == 12 || x == 13 || x == 0) {
      movePlayer(player, next);
    } 
  }
}

function move(e) {
  key = e.which;
  if (key == 37) moveLeft();
  if (key == 38) moveUp();
  if (key == 39) moveRight();
  if (key == 40) moveDown();
}

function dispAbout() {
  window.open("maze_about.html","_blank","scrollbars=yes","height=300","false");
}


