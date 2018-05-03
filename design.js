// Using cached vars for selectors to increase optimization.
var gridCanvas = $('#gridCanvas');
var pickColor = $("#pickColor");

// To make a grid (Canvas) of inputted height and width.
$('#submit').click(function makeGrid(evt) {
  evt.preventDefault();
  row = Number($('#inputHeight').val());
  col = Number($('#inputWidth').val());
  gridCanvas.empty();

  for (let i = 0; i < row; i++) {
    gridCanvas.append("<tr></tr>");
  }

  for (let c = 0; c < col; c++) {
    $('tr').append("<td></td>");
  }
});

//For Removing the Color Pixel (Also Double Click Event)
gridCanvas.on("dblclick", "td", function () {
  $(this).css("background-color", "");
});

gridCanvas.on("click", "td", function () {
  $(this).css("background-color", pickColor.val());
});

//To reset the canvas, so that user can start from a new one
$("#reset").click(function () {
  gridCanvas.empty();
  pickColor.val("");
});

var mouseDown;
$("body").mousedown(function () {
  mouseDown = true;
}).mouseup(function () {
  mouseDown = false;
});

gridCanvas.on("mousemove", "td", function () {
  if (mouseDown) {
    $(this).css("background-color", pickColor.val());
  }

});