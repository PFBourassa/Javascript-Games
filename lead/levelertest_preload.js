var imgO = loadPic("testImage.png");
var img1 = loadPic("blank.png");

console.log(imgO);

img1.onload = function() {
  drawcoins()
}

