var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
var Links = {
  setColor: function (color) {
    // var alist = document.querySelectorAll("a");
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i++;
    // }
    $("a").css("color", color);
  },
};

var Menu = {
  setColor: function (color) {
    $("#SelMenu").css("color", color);
  },
};
function menuColor(color) {
  $("#SelMenu").css("color", color);
}
function nightDayHandler(self) {
  if (self.value === "night mode") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    Links.setColor("yellow");
    Menu.setColor("red");
    self.value = "day mode";
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    Links.setColor("black");
    Menu.setColor("blue");
    self.value = "night mode";
  }
}
