let board;
let rows = 5;
let cols = 5;
let w = 100;


function setup() {
  createCanvas(500, 500);
  board = make2dArray(rows, cols);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] = new Cell(j, i, w);
    }
  }
  generateRandomLitCells()
}

function make2dArray(rows, cols) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function generateRandomLitCells() {
  let num = int(random(15, 35));
  console.log(num)
  while (num > 0) {
    index1 = int(random(0, 5))
    index2 = int(random(0, 5))
    
    flipNeighbours(index1, index2);
    num--;
  }
}

function mousePressed() {
  console.log(mouseX + " MOUSE " + mouseY)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j].contains(mouseX, mouseY)) {
        flipNeighbours(i, j);
      }
    }
  }

}

function checkWin() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j].lit == true) {
        return false;
      }
    }
  }
  return true;
}

function flipNeighbours(i, j) {
  // check for index in bound
  if (i != 0) {
    board[i - 1][j].flipSwitch();
  }
  // check for index in bound
  if (i != 4) {
    board[i + 1][j].flipSwitch();
  }
  // check for index in bound
  if (j != 0) {
    board[i][j - 1].flipSwitch();
  }
  // check for index in bound
  if (j != 4) {
    board[i][j + 1].flipSwitch();
  }
  //flip clicked on tile
  board[i][j].flipSwitch();
}



function draw() {

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j].show();
    }
  }
  
  if (checkWin() == true) {
    textSize(75);
    fill(255, 255, 255)
    text('You Win!', 125, 250);
    noLoop();
  }

}