
var titre = document.getElementById("title-id");
titre.style.color = "red";
titre.style.backgroundColor = "brown"

function DarkMode() {
  var body = document.querySelector("body");

  if (body.style.backgroundColor == "black") {

    body.style.backgroundColor = "white";
  } else {

    body.style.backgroundColor = "black";
  }
}
