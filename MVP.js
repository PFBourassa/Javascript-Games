//**********************************
//MVP.js Created by Parker Bourassa
//**********************************

var player = addRect(200,150,40,40,'#F02FB6');
var target = addRect(30,30,30,30,'#01fe31');
var red = addRect((400-30),(300-30),30,30,'#fd1131');
var game = 0;
var score = 0;
var then = Date.now();
var foo = setInterval(frame, 1);

//Image Stuff
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "background3.png";


//var image;

function loadPic(a){
	var foo;
	foo = new Image();
	foo.src = a;
	return foo;
}

var pictures;
//pictures.push(loadPic("hero.png"));
//pictures.push(loadPic("hero2.png"));
var coinLinks = ["coin1.png","coin2.png","coin3.png","coin4.png"];
var links = ["hero.png","hero2.png"];

target.load(coinLinks);
player.load(links);

function stuffToDraw(){
	if (game == 1){
		display.ctx.fillStyle = "#11f";
		//display.ctx.fillRect(0, 0, 400, 300);
		if (bgReady) {
			display.ctx.drawImage(bgImage, 0, 0);
		}
		target.draw(display.ctx);
		red.draw(display.ctx);	
		player.draw(display.ctx);
		player.ready = true;//TODO this should mean something
		target.ready = true;
		
		display.ctx.fillStyle = "#fff";//text
		display.ctx.font = 'bold 15px sans-serif';
        	display.ctx.textAlign = 'left';
		display.ctx.fillText("Score:"+score,2,12);
	}
	else{
		display.ctx.fillStyle = "#ff0";//background
		display.ctx.fillRect(50, 50, 300, 200);
		display.ctx.fillStyle = "#5fc23f";//Button
		display.ctx.fillRect(100, 150, 200, 70);
		display.ctx.fillStyle = "#000";//text
		display.ctx.font = 'bold 50px sans-serif';
		display.ctx.textAlign = 'center';
		if (score == 0){
			//display.ctx.fillStyle = "#000";//text
			display.ctx.fillText("Play",200,200);
			display.ctx.fillText("M.V.P.",200,120);
		}
		if (score > 0){
			display.ctx.fillText("Again",200,200);
			display.ctx.fillText("Score:"+score,200,120);
		}
	}
};

function Box() {
	this.ready = false;
	this.pics = pictures;//[];
	this.state = 0;
	this.x = 0;
   	this.y = 0;
   	this.w = 1;
   	this.h = 1;
	this.that = this;
	this.fill = "#444";
	var $this = this;
	this.load = function(array){
		var foo = [];
		pictures = [];
		for(var i = 0; i < array.length; i++){
			pictures.push(loadPic(array[i]));
			foo.push(loadPic(array[i]));
		}
		//this.pics = pictures;
		$this.pics = foo;
	}
	this.draw = function(ctx) {
		if (this.ready) {
			if(this.state < this.pics.length){
				display.ctx.drawImage(this.pics[this.state], this.x - this.w/2, this.y-this.h/2);
				this.state += 1;
			}
			else{
				display.ctx.drawImage(this.pics[this.state-1], this.x - this.w/2, this.y-this.h/2);
				this.state = 0;
			}
		}
		else{
        		display.ctx.fillStyle = this.fill;
        		display.ctx.fillRect(this.x-this.w/2, this.y-this.h/2, this.h, this.w);
		
		}
	};
}

function addRect(x, y, w, h, fill) {
    var rect = new Box();
    rect.x = x;
    rect.y = y;
    rect.w = w;
    rect.h = h;
    rect.fill = fill;
    return rect;
}

function boxCollide(box1,box2){
	if (
		box1.x - box1.w/2 <= box2.x + box2.w/2
		&& box2.x - box2.w/2 <= box1.x + box1.w/2
		&& box1.y - box1.w/2 <= box2.y + box2.h/2
		&& box2.y - box2.w/2 <= box1.y + box1.h/2
	){
	return true;
	}
return false;
};

var update = function (modifier){
	//Player movement
	if (38 in keysDown && player.y > 20) {  //up
		player.y -=256*modifier;
	}
	if (40 in keysDown && player.y < 280) {  //down
		player.y +=256*modifier;
	}
	if (37 in keysDown && player.x > 20) {  // <-
		player.x -=256*modifier;
	}
	if (39 in keysDown && player.x < 380) {  // ->
		player.x +=256*modifier;
	}
	//Collecting boxen
	if (boxCollide(player,target)){
		score += 1;
		target = addRect(15+Math.random()*(400-30),15+Math.random()*(300-30),30,30,'#01fe31');
		target.load(coinLinks);
	}
	//red movement logic
	if (player.x > red.x){
		red.x += 100* modifier;
	}
	if (player.x < red.x){
		red.x -= 100* modifier;
	}
	if (player.y > red.y){
		red.y += 100* modifier;
	}
	if (player.y < red.y){
		red.y -= 100* modifier;
	}
	if (boxCollide(player, red)){
		game = 0;
	}
};

function myDown(e) {//100, 150, 200, 70
	getMouse(e);
	if ((display.my > 150 && display.my < 230 && display.mx>100 && display.mx < 300) && game==0){
		reset();
	}
		
}
$("canvas").onmousedown = myDown;

function frame (){
	if (game == 1){
		var now = Date.now();
		var delta = now - then;
	
		update(delta/1000);
		display.draw();
	
		then = now;
		//$("score").innerHTML = score;	
		//$("debug").innerHTML = 
	}
	if (game == 0){
		foo = window.clearInterval(foo);
		//alert(" Score: "+score);
		//game = 1;
		display.draw();
		//reset();
		
	}
};

function reset(){
	player = addRect(200,150,40,40,'#F02FB6');
	target = addRect(30,30,30,30,'#01fe31');
	red = addRect((400-30),(300-30),30,30,'#fd1131');
	game = 1;// 1 for in-progress, 0 for menu
	score = 0;
	then = Date.now();
	foo = setInterval(frame, 1);
	bgImage.onload = function () {
		bgReady = true;
	};
	target.load(coinLinks);
	player.load(links);
}

display.draw();
//reset();
