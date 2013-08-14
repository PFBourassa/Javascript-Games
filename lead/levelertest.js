var testGrid;
var toolbar;
function drawcoins(){
	
	testGrid = new Grid(5, 4);
	
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
	var x = 2; //number of item possible
	toolbar = new Grid(1,x);
	
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

var selection;

function myDown(e) {
	
    getMouse(e);
	console.log("getmouse: " + display.mx + ", " + display.my);
	
	if (display.my <= 32){
		selection = toolbar.read_from_click(display.mx, display.my);
		console.log("Selection: " + selection);
	}
	else {
		var a = testGrid.address_of_click(display.mx, display.my);
	    testGrid.save(a.x, a.y, selection);
	    testGrid.draw();
	}
}

canvas.onmousedown = myDown;
