const mode = document.getElementById("input");
const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);
let Links = {
  setColor: function (color) {
    //const link = document.querySelectorAll("a");
    // let i = 0;
    // while (i < link.length) {
    //   link[i].style.color = color;
    //   i++;
    // }
    $("a").css("color", color);
  },
};
let bodyHandle = {
  setColor: function (color) {
    //document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    // document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};
//toggle
function modeHandler(self) {
  if (self.value === "dayMode") {
    bodyHandle.setBackgroundColor("white");
    bodyHandle.setColor("black");
    self.value = "nightMode";
    Links.setColor("powderBlue");
  } else {
    bodyHandle.setBackgroundColor("gray");
    bodyHandle.setColor("white");
    self.value = "dayMode";
    Links.setColor("orange");
  }
}
mode.addEventListener("click", function night() {
  modeHandler(this);
});

let coworkers = {
  //객체 리터럴
  programer: "egoing",
  designer: "leeche",
};

document.write("programer : " + coworkers.programer + "<br>");
document.write("designer : " + coworkers.designer + "<br>");
coworkers.bookkeeper = "duru"; //key, value 추가
document.write("bookkeeper : " + coworkers.bookkeeper + "<br>");
coworkers["data scientist"] = "teaho"; //key, value 추가
document.write("data scientist : " + coworkers["data scientist"] + "<p>");

for (let key in coworkers) {
  document.write(key + " : " + coworkers[key] + "<br>");
}

coworkers.showAll = function () {
  for (let key in this) {
    document.write(key + " : " + this[key] + "<br>");
  }
};
coworkers.showAll();
