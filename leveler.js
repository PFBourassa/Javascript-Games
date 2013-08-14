function Grid(w,h){
	var x;//upper left corner of grid relative to display
	var y;
	var pixels = 32;
    this.grid=[];
    this.key;
	this.save = function(x,y,value){//use point as argument?
		c = this.grid[y];
		c[x] = value;
	}
	this.read = function(x,y){//use point as argument?
		c = this.grid[y];
		return c[x];
	}
	this.read_from_click = function (mx,my){
		xx = Math.floor(mx/pixels);
		yy = Math.floor(my/pixels);
		console.log(xx + ", " + yy);
		return this.read(xx,yy);
	}
	this.address_of_click = function (mx, my){
	    a = {};
	    a.x = Math.floor(mx/pixels);
	    a.y = Math.floor(my/pixels);
	    return a;
	}
	this.draw = function(ctx){
		for(i=0;i<h;i++){
			for(var n=0;n<w;n++){
				
				var num = this.read(i, n);
				console.log(num);
				var obj = this.key.read(num);
				obj.draw(pixels * i, pixels * n);
			}
		}
	}
	this.init = function(){
	}
	this.setGrid = function(g){
		this.grid = g;
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
	var reg = [];
	this.register = function(obj){
		//console.log("Inside obj: " + obj.img.src);
		reg.push(obj);
		console.log("Registered to " + reg.length  + ": " + obj.img.src);
		//console.log("Confirm: " + reg[0].img.src);
	}
	this.read = function(num){
		var foo = num;
		//console.log(num);
		//console.log(reg.num.img.src);
		return reg[num];
	}
}

console.log("leveler_loaded");
