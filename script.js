setInterval(clockfunc, 1000);

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var hour = document.getElementById("hour");
function clockfunc() {
  let currenDate = new Date();
  let minuteRatio = currenDate.getMinutes() / 60;
  let secondRatio = currenDate.getSeconds() / 60;
  let hourRatio = currenDate.getHours() / 12;
  serRotationDeg(min, minuteRatio);
  serRotationDeg(sec, secondRatio);
  serRotationDeg(hour, hourRatio);
}

function serRotationDeg(itemsss, rotationrate) {
  itemsss.style.setProperty("--rotation", rotationrate * 360);
}
