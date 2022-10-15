let character = document.getElementById("character");
let block = document.getElementById("block");

var count = 0;
var blockPos = parseInt(
  window.getComputedStyle(block).getPropertyValue("left")
);

console.log(blockPos);

window.addEventListener("keyup", (e) => {
  character.classList.add("jump");
  var blockPos = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (character.classList == "jump" && blockPos > 80 && blockPos < 140) {
    console.log(blockPos);
    document.querySelector("div span").innerHTML = ++count;
  }

  setTimeout(() => {
    character.classList.remove("jump");
  }, 500);
});

function myFunction() {
  var characterPos = parseInt(
    window.getComputedStyle(character).getPropertyValue("bottom")
  );
  var blockPos = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockPos >= 30 && blockPos <= 80 && characterPos <= 20) {
    var box = document.querySelector("#game");
    if (!document.querySelector("button")) {
      var button = document.createElement("button");
      button.innerHTML = "You Loose! Play Again";
      box.append(button);
      button.style.width = "60px";
      button.style.marginTop = "50px";
      button.style.marginLeft = "400px";
    }

    box.style.backgroundImage = "url('sad.jpg')";
    box.style.backgroundSize = "cover";
    box.style.backgroundPosition = "bottom center";
    block.style.animation = "none";
    character.style.animation = "none";
    character.style.display = "none";
    block.style.display = "none";
    document.querySelector("#game").style.color = "white";
  }
}

setInterval(myFunction, 10);

// window.addEventListener("click", myFunction);
