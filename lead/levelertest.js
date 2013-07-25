function drawcoins(){
	
	var testGrid = new Grid(5, 4);
	
	testGrid.setGrid([
		['0', '0', '0', '0'],
		['1', '1', '1', '1'],
		['1', '0', '0', '1'],
		['1', '0', '0', '1'],
		['1', '1', '1', '1']]
	);
		
	var coin = new GridObj(imgO);
	var blank = new GridObj(img1);
	
	var coinville = new Key();
	
	coinville.register(blank, "0");
	coinville.register(coin, "1");

	testGrid.setKey(coinville);
	testGrid.draw();
	
	//TOOLBAR STUFF
	var x = 2;
	var toolbar = new Grid(1,x);
	
	var inner = [];
	for (i=0;i<x;i++){
		inner.push(i);
	}
	
	toolbar.setGrid([
	['0', '1']]
	);
	toolbar.setKey(coinville);
	toolbar.draw();
}

function myDown(e) {
    /*getMouse(e);
    var l = boxes.length;
    for (var i = l - 1; i >= 0; i--) {
        if ((display.mx > boxes[i].x && display.mx < boxes[i].x + boxes[i].w)&&(display.my > boxes[i].y && display.my < boxes[i].y + boxes[i].h)) {
            display.mySel = boxes[i];
            display.offsetx = display.mx - display.mySel.x;
            display.offsety = display.my - display.mySel.y;
            display.mySel.x = display.mx - display.offsetx;
            display.mySel.y = display.my - display.offsety;
            display.isDrag = true;
            canvas.onmousemove = myMove;
            invalidate();
            return;
        }
        display.mySel = null;
    }*/
    getMouse(e);
	console.log("getmouse: " + display.mx + ", " + display.my);
}

canvas.onmousedown = myDown;
