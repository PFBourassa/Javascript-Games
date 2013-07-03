var coin = new GridObj("coin3.png", false);
var coinville = new Key();

function Grid(w,h){
	var pixels = 32;
    var grid=[];
    var key = coinville;
    for(i=0;i<h;i++){
		var row = [];
		for(var n=0;n<w;n++){
			row.push(1);
		}
		grid.push(row);
	}
	this.save = function(x,y,value){//use point as argument?
		c = grid[y-1];
		c[x-1]=value;
	}
	this.read = function(x,y){//use point as argument?
		c = grid[y];
		return c[x];
	}
	this.draw = function(ctx){
		for(i=0;i<h;i++){
			for(var n=0;n<w;n++){
				display.ctx.drawImage(imgO, pixels * i, pixels * n);
				var obj = this.read(i,n);
				console.log("obj: " + obj);
				console.log("key.obj: " + key.read(obj));
				key.read(obj).draw();
			}
		}
	}
	this.init = function(){
	}
	this.setKey = function(x){
		key = x;
	}
}

function GridObj(src, action) {
  this.draw = function(x,y){
	  display.ctx.drawImage(src, x, y);
  }
}

function Key() {
	var reg = {1: coin};
	this.read = function(n){
		return reg.n;
	}
}

//var test = new Grid(1, 1);
//var img = loadPic("images/red1.png");
//display.ctx.drawImage(img);

//var drone = new Sequence();
//drone.load(["shooter/images/red1.png"]);

function Block(){
	
}
 
 /*Grid.setKey({
	 0:loadPic("images/playercraft.png"),
	 1:0
	 });
*/
console.log("leveler_loaded");
