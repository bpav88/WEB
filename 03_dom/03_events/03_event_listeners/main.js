var $button = document.querySelector(".button");
var $player = document.querySelector(".player");
var $div = document.querySelector(".container");
var toggle = false;

function movePlayer(event) {
  var $positionX = event.pageX;
  var $positionY = event.pageY;
  //   alert($positionX + ", " + $positionY);

  $player.style.left = $positionX - 100 + "px";
  $player.style.top = $positionY - 100 + "px";
}

$div.addEventListener("click", movePlayer);

$button.addEventListener("click", function() {
  if (toggle) {
    $div.addEventListener("click", movePlayer);
    $button.value = "Stop moving";
    toggle = !toggle;
  } else {
    $div.removeEventListener("click", movePlayer);
    $button.value = "Start moving";
    toggle = !toggle;
  }
});
