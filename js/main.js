var c = document.getElementById('date-picker');
c.width = $('#date-art').width();
c.height = (c.width * 7) / 51 + 2
c.style.width = c.width.toString() + 'px';
c.style.height = c.height.toString() + 'px';

var grid = new SquareGrid(c);
grid.draw();
