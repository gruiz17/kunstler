var c = document.getElementById('date-picker');
c.width = $('#date-art').width();
c.height = (c.width * 7) / 51 + 2
c.style.width = c.width.toString() + 'px';
c.style.height = c.height.toString() + 'px';

var grid = new SquareGrid(c);
grid.draw();

var rect = c.getBoundingClientRect();

$(window).resize(function() {
  rect = c.getBoundingClientRect();
});

$('#date-picker').click(function(e) {
  var x = e.pageX - rect.left;
  var y = e.pageY - rect.top;
  console.log(rect.top);
  grid.changeSquare(x, y);
});
