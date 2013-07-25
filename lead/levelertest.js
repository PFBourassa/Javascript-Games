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

