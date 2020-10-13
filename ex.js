const mode = document.getElementById("input");

let bodyColor = document.querySelector("body").style;

//toggle
mode.addEventListener("click", function night() {
  if (mode.value === "dayMode") {
    bodyColor.background = "white";
    bodyColor.color = "black";
    mode.value = "nightMode";
  } else {
    bodyColor.background = "gray";
    bodyColor.color = "white";
    mode.value = "dayMode";
  }
});
