//**********************************
//MVP.js Created by Parker Bourassa
//**********************************

var player = addRect(200,150,40,40,'#F02FB6');
var target = addRect(30,30,30,30,'#01fe31');
var red = addRect((400-30),(300-30),30,30,'#fd1131');
var game = 0;
var score = 0;
var then = Date.now();
var foo = setInterval(frame, 1);//this doesn't effect framrate, only init.

function loadPic(a){
	var foo;
	foo = new Image();
	foo.src = a;
	return foo;
}

//Image Stuff
var bgReady = false;
var bgImage = loadPic("MVP_Images/STAGE.png");
var coinLinks = ["MVP_Images/collectable.png"];
var links = ["MVP_Images/player.png"];
var badLinks = ["MVP_Images/enemy.png"];

target.load(coinLinks);
player.load(links);
red.load(badLinks);

function stuffToDraw(){
	if (game == 1){
		display.ctx.fillStyle = "#11f";
		bgReady=true;
		if (bgReady) {
			display.ctx.drawImage(bgImage, 0, 0);
		}
		else{
			display.ctx.fillRect(0, 0, 400, 300);
		}
		target.draw(display.ctx);
		red.draw(display.ctx);	
		player.draw(display.ctx);
		display.ctx.fillStyle = "#000";//text
		display.ctx.font = 'bold 15px sans-serif';
        display.ctx.textAlign = 'left';
		display.ctx.fillText("Score:"+score,2,12);
	}
	else{
		display.ctx.fillStyle = "#f70";//background
		display.ctx.fillRect(50, 50, 300, 200);
		display.ctx.fillStyle = "#5fc23f";//Button
		display.ctx.fillRect(100, 150, 200, 70);
		display.ctx.fillStyle = "#000";//text
		display.ctx.font = 'bold 50px sans-serif';
		display.ctx.textAlign = 'center';
		if (score == 0){
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
	this.pics = [];
	this.state = 0;
	this.x = 0;
   	this.y = 0;
   	this.w = 1;
   	this.h = 1;
	this.fill = "#444";
	var $this = this;
	this.load = function(array){
		var foo = [];
		for(var i = 0; i < array.length; i++){
			foo.push(loadPic(array[i]));
		}
		$this.pics = foo;
		$this.ready = true;
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
	if (player.y < 20) {  //prevent jumping off screen
		player.y =20;
	}
	if (player.y > 280) {  //down
		player.y =280;
	}
	if (player.x < 20) {  // <-
		player.x =20;
	}
	if (player.x > 380) {  // ->
		player.x =380;
	}
	//Collecting boxen
	if (boxCollide(player,target)){
		score += 1;
		target.x = (15+Math.random()*(400-30));
		target.y = (15+Math.random()*(300-30));
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
	foo = setInterval(frame, 50);//framerate
	bgImage.onload = function () {
		bgReady = true;
	};
	target.load(coinLinks);
	player.load(links);
	red.load(badLinks);
}

display.draw();
//reset();