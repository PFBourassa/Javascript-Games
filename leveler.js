function Grid(w,h){
	var pixels = 32;
    var grid=[];
    var key;
    for(i=0;i<h;i++){
		var row = [];
		for(var n=0;n<w;n++){
			row.push(0);
		}
		grid.push(row);
	}
	this.save = function(x,y,value){//use point as argument?
		c = grid[y-1];
		c[x-1]=value;
	}
	this.read = function(x,y){//use point as argument?
		c = grid[y-1];
		return c[x-1];
	}
	this.draw = function(ctx){
		for(i=0;i<h;i++){
			for(var n=0;n<w;n++){
				display.ctx.fillRect(0, 0, display.width, display.height);
				console.log("display.ctx");
				//display.ctx.drawImage(/*this.key.read(i,h)*/img, 0,0)//pixels * h, pixels * n);
			}
		}
	}
	this.init = function(){
	}
	this.setKey = function(x){
		key = x;
	}
}
var test = new Grid(1,1);
var img = loadPic("images/playercraft.png");
//display.ctx.fillRect(0, 0, 30, 30);
//display.ctx.fillRect(0, 0, display.width, display.height);
//test.draw(display.ctx);

function Block(){
	
}
 
 /*Grid.setKey({
	 0:loadPic("images/playercraft.png"),
	 1:0
	 });
*/
console.log("leveler_loaded");
