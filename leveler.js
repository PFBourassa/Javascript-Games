
function Grid(w,h){
	var pixels = 32;
    var grid=[];
    this.key;
    for(i=0;i<h;i++){
		var row = [];
		for(var n=0;n<w;n++){
			row.push("coin");
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
				//display.ctx.drawImage(imgO, pixels * i, pixels * n);
				var obj = this.read(i,n);
				console.log("obj: " + obj);
				console.log("this.key: " + this.key);
				console.log("Key.obj: " + this.key.read(obj));
				this.key.read(obj).draw(pixels * i, pixels * n);
				//console.log("key.obj: " + key.read(obj).src);
				//src = key.read(obj).src;
				//display.ctx.drawImage(imgO, pixels * i, pixels * n);
			}
		}
	}
	this.init = function(){
	}
	this.setKey = function(x){
		this.key = x;
	}
}

function GridObj(img, action) {
  this.img = img;
  this.draw = function(x,y){
	  display.ctx.drawImage(img, x, y);
  }
}

function Key() {
	var reg = {};
	this.register = function(obj){
		reg.obj = obj;
	}
	this.read = function(obj){
		return reg.obj;
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
