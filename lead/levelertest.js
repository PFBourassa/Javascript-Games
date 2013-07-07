function drawcoins(){
	
	var testGrid = new Grid(4,4);
	
	testGrid.setGrid([
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
}



/*==============
*loadPic() has no check for if the image is loaded or not.
*Trying to draw the image too soon happens often.
* 
* Try this:
* http://gamedev.stackexchange.com/questions/24102/resource-loader-for-an-html5-and-javascript-game
*/
