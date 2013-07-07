
function Grid(w,h){
	var pixels = 32;
    this.grid=[];
    this.key;
    //for(i=0;i<h;i++){
		//var row = [];
		//for(var n=0;n<w;n++){
			//row.push("coin");
		//}
		//this.grid.push(row);
	//}
	this.save = function(x,y,value){//use point as argument?
		c = this.grid[y-1];
		c[x-1]=value;
	}
	this.read = function(x,y){//use point as argument?
		c = this.grid[y];
		return c[x];
	}
	this.draw = function(ctx){
		for(i=0;i<h;i++){
			for(var n=0;n<w;n++){
				
				var num = this.read(i, n);
				console.log(num);
				var obj = this.key.read(num);//.draw(pixels * i, pixels * n);
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
	var reg = {};
	this.register = function(obj,num){
		//console.log("Inside obj: " + obj.img.src);
		var foo = obj;
		reg.num = foo;
		console.log("Registered to " + num  + ": " + reg.num.img.src);
		console.log("Confirm: " + this.read(num).img.src);
	}
	this.read = function(num){
		var foo = num
		//console.log(num);
		console.log(reg.num.img.src);
		return reg.num;
	}
}

/*========================================
 * THE PROBLEM, as it stands.
 * 
 * I'm currenly passing around these obj's
 * but my end goal is to have simple 
 * value that can represent them,
 * such as 1, or 0.
 * 
 * I cannot index in objects by number,
 * eg. Key.1.draw();
 * 
 * Currently, Key.read always returns coin.
=========================================*/
function Block(){
	
}
 
 /*Grid.setKey({
	 0:loadPic("images/playercraft.png"),
	 1:0
	 });
*/
console.log("leveler_loaded");
