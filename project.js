var cards_block = document.querySelector(".cards");
var cards = document.querySelectorAll(".cards div");

function start() {
  var random = Math.floor(Math.random() * 19);
  cards_block.style.left = -random * 100 + "px";
  setTimeout(function () {
    random++;
    cards[random].style.background = "#ffbf00";
    cards[random].style.color = "white";
  }, 1000);
}
