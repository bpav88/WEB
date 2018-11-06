var $images = document.querySelectorAll("img");
var $body = document.querySelector("body");
var $first = document.querySelector(".first");

for (var i = 0; i < $images.length; i++) {
  $images[i].addEventListener("click", addBorder);
}

function addBorder(event) {
  event.target.classList.add("red-border");
  //   if (event.target.width != "300px") {
  //     event.stopPropagation();
  //   }
}

$body.addEventListener("click", function(event) {
  console.log(event.target.tagName);
});

// $first.addEventListener("click", addBorder);
// $first.onclick.stopPropagation();
