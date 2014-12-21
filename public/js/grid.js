var SquareGrid = (function () {
  function SquareGrid(canvas) {
    this.squares = [];
    this.squareSide = canvas.width / 51
    this.canvas = canvas;
    this.brush = 'draw';
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;

    var i = 0;
    var j = 0;
    var col = [];
    var squareSide = canvas.width / 51
    var squareAmount = 357;
    var posX = 0;
    var posY = 0;
    while (i < squareAmount) {
      if (j === 7) {
        this.squares.push(col);
        posX += squareSide;
        posY = 0;
        j = 0;
        col = [];
      }
      col.push(new Square(this.canvas, this, posX, posY, squareSide));
      posY += squareSide;
      j += 1;
      i += 1;
    }
    this.squares.push(col);
  }

  SquareGrid.prototype.draw = function(color, state) {
    this.ctx.clearRect(0,0, this.width, this.height);
    this.squares.forEach(function(col) {
      col.forEach(function(square) {
        square.draw(color);
        if (!(typeof state === 'undefined')) {
          square.clicked = state;
        }
      });
    });
  }

  SquareGrid.prototype.changeSquare = function(mouseX, mouseY) {
    xPos = Math.floor(mouseX / this.squareSide);
    yPos = Math.floor(mouseY / this.squareSide);
    // console.log(mouseX);
    // console.log(mouseY);
    if (this.brush === 'erase') {
      this.squares[xPos][yPos].changeColor('#b2b2b2');
      this.squares[xPos][yPos].clicked = false;
    }
    else {
      this.squares[xPos][yPos].changeColor('#6ee');
      this.squares[xPos][yPos].clicked = true;
    }
  }

  SquareGrid.prototype.changeBrush = function(brush) {
    this.brush = brush;
  }

  SquareGrid.prototype.encode = function() {
    var patternString = '';
    this.squares.forEach(function(col) {
      col.forEach(function(square) {
        if (square.clicked) {
          patternString += "1";
        }
        else {
          patternString += "0";
        }
      });
    });
    return patternString;
  }

  return SquareGrid;

})();

var Square = (function() {
  function Square(canvas, parentGrid, posX, posY, sideLength, color) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.parentGrid = parentGrid;
    this.color = ((typeof color === 'undefined') ? '#b2b2b2' : color);
    this.posX = posX;
    this.posY = posY;
    this.sideLength = sideLength;
    this.clicked = false;
  }

  Square.prototype.draw = function(color) {
    this.ctx.clearRect(this.posX, this.posY, this.sideLength, this.sideLength);
    this.ctx.fillStyle = ((typeof color === 'undefined') ? this.color : color);
    this.ctx.fillRect(this.posX, this.posY, this.sideLength, this.sideLength);
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.strokeRect(this.posX, this.posY, this.sideLength, this.sideLength);
  }
c
  Square.prototype.changeColor = function(color) {
    this.color = color;
    this.draw();
  }

  return Square;

})();