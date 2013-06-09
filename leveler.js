function Grid(w,h){
	var pixels = 32;
    var grid=[];
    var key;
    for(i=0;i<h;i++){
		var row = [];
		for(var n=0;n<w;n++){
			row.push(0);
		}
		this.grid.push(row);
	}
	this.save = function(x,y,value){//use point as argument?
		c = this.grid[y-1];
		c[x-1]=value;
	}
	this.read = function(x,y){//use point as argument?
		c = this.grid[y-1];
		return c[x-1];
	}
	this.draw = function(){
		for(i=0;i<h;i++){
			for(var n=0;n<w;n++){
				display.ctx.drawImage(/*this.key.read(i,h)*/img), pixels * h, pixels * n);
			}
		}
	}
	this.init = function(){
	}
	this.setKey = function(x){
		key = x;
	}
}
var test = new Grid(4,4);
var img = loadPic("images/playercraft.png");
test.draw();

function Block(){
	
}
 
 Grid.setKey({
	 0:loadPic("images/playercraft.png"),
	 1:block
	 });
