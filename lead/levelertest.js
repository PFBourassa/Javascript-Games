//var test = new Grid(1, 1);
	//test.draw(display.ctx);
	var imgX = document.getElementById("test");//loadPic("testImage.png");
	var imgO = loadPic("testImage.png");
	console.log(imgX);
	console.log(imgO);
	display.ctx.fillRect(10, 10, 10, 10);
	//display.ctx.drawImage(imgX,10,10);
	display.ctx.drawImage(imgO,30,30);
