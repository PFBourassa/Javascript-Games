if (true){
	console.log("display.ctx: " + display.canvas);
}

display.ctx.fillRect(10, 10, 10, 10);
//var test = new Grid(1, 1);
//test.draw(display.ctx);
//var imgX = document.getElementById("test");
//var imgO = loadPic("testImage.png");
//var imgS = new Sequence();
//imgS.load(["testImage.png"]);
//console.log(imgX);
//console.log(imgO);
//display.ctx.drawImage(imgX,10,10);
function drawcoins(){
	display.ctx.drawImage(imgO,30,30);
	//display.ctx.drawImage(imgS.get(),50,50);
}

/*==============
*loadPic() has no check for if the image is loaded or not.
*Trying to draw the image too soon happens often.
* 
* Try this:
* http://gamedev.stackexchange.com/questions/24102/resource-loader-for-an-html5-and-javascript-game
*/
