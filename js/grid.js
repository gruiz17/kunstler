// testing
var randomColor = function() {
  var chars = '0123456789abcdef'.split('');
  var finalColor = '#';
  for (var i = 0; i < 6; i++ ) {
      finalColor += chars[Math.floor(Math.random() * 16)];
  }
  return finalColor;
}

var SquareGrid = (function () {
  function SquareGrid(canvas) {
    this.squares = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;

    var i = 0;
    var j = 0;
    var squareSide = canvas.width / 51
    var squareAmount = 357;
    var posX = 0;
    var posY = 0;
    while (i < squareAmount) {
      if (j === 7) {
        posX += squareSide;
        posY = 0;
        j = 0;
      }
      this.squares.push(new Square(this.canvas, this, posX, posY, squareSide));
      posY += squareSide;
      j += 1;
      i += 1;
    }
  }

  SquareGrid.prototype.draw = function() {
    this.ctx.clearRect(0,0, this.width, this.height);
    this.squares.forEach(function(square) {
      square.draw();
    });
  }

  return SquareGrid;
})();

var Square = (function() {
  function Square(canvas, parentGrid, posX, posY, sideLength) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.parentGrid = parentGrid;
    this.color = "#b2b2b2";
    this.posX = posX;
    this.posY = posY;
    this.sideLength = sideLength;
  }

  Square.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = "#ffffff"
    this.ctx.fillRect(this.posX, this.posY, this.sideLength, this.sideLength);
    this.ctx.strokeRect(this.posX, this.posY, this.sideLength, this.sideLength);
  }

  Square.prototype.changeColor = function(color) {
    this.color = color;
    this.ctx.fillRect(this.posX,this.posY,this.sideLength,this.sideLength);
  }

  return Square;
})();