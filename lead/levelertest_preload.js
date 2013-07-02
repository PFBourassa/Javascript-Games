var imgO = loadPic("testImage.png");
//var imgS = new Sequence();
//imgS.load(["testImage.png"]);
//console.log(imgX);
console.log(imgO);
//display.ctx.drawImage(imgX,10,10);
imgO.onload = function() {
  drawcoins()
}
