//**********************************
//Shooter.js Created by Parker Bourassa
//**********************************
//TODO privatize more variables.

//var static{//Change these to not be global 
//var score;//= 0;
//var then;//= Date.now();
var start = Date.now();

//var player;// = addRect(200, 200, 64, 64, '#FFC02B');
var bullet = [];
var enemy = [];

//var audio = new Audio();

var Bg = function () {
	var offset = 0;
	this.update = function () {
		offset -= 1;
	}
	this.sequence = new Sequence();
	this.draw = function (ctx) {
		display.ctx.drawImage(this.sequence.get(), offset % 800,0);
		display.ctx.drawImage(this.sequence.get(), (offset % 800)+800,0);
		
	};
}
var background = new Bg;
background.sequence.load(["images/stars.png"]);

function Sequence() {
	var image = [];//list of images
	var i = 0;
	this.get = function () {
		return image[i];
	};
	this.update = function () {
		if (image.length === 1 || i >= image.length-1) {
			i = 0;
		}
		else if (image.length > 1) {
			if ( i < image.length){
				i += 1;
			}
			if ( i >= image.length-1) {
				i = 0;			
			}
		}
	};
	this.load = function (array) {
		for (n = 0; n < array.length; n++) {
			image.push(loadPic(array[n]));
		}
	};
}

var drone = new Sequence();
//************************************************* RUSS
//RUSS! This is where the images for the enemies 
//are referenced. (Drones specifically)

//If you make your own images, you can change 
//the things in the quotes, and it won't
//break anything.

drone.load(["images/red1.png","images/red2.png","images/red3.png","images/red4.png"]);
//************************************************** RUSS

//BOX STUFF
function Box() {
	this.ready = false;
	this.sequence = new Sequence();
	this.x = 0;
   	this.y = 0;
   	this.w = 10;
   	this.h = 10;
	this.fill = "#fff";
	var $this = this;
	this.load = function(array) {
		this.sequence.load(array);
		if (this.sequence.image.length > 0) {
			$this.ready = true;
		}
	};
	this.draw = function(ctx) {
		if (this.ready == true){
			display.ctx.drawImage(this.sequence.get(),this.x-this.w/2,this.y-this.h/2);		
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

//BULLET STUFF
function Bullet(){
	//this.prototype = new Box();
	this.speed = 7;
	this.move = function(){
		this.x += this.speed;
	};
}
Bullet.prototype = new Box();

function shoot(x,y){
	var foo = new Bullet();
	foo.x = x;
	foo.y = y;
	bullet.push(foo);
}

function eShoot(clock) {
    var rand = Math.floor(Math.random()*(enemy.length));
    if (enemy[rand].wait <= clock ){
	var foo = new Bullet();
	foo.x = enemy[rand].x - 30;
	foo.y = enemy[rand].y;
	foo.speed = -2;
	bullet.push(foo);
    }
}

//ENEMY STUFF
function Ship(){//TODO Make them shoot
	this.sequence = drone;
	this.ready = true;
	this.w = 32;
	this.h = 32; 
	this.i = 0;
	this.fill = "#666";
	this.wait = 1;
	this.position = {x:430,y:320};
	this.xFreq = 1;//decimals
	this.xAmp = 60;
	this.yFreq = 1;
	this.yAmp = 60;
	this.action = {x:this.xFreq, y:this.yFreq};
	this.update = function(){
		//action = {x:this.xFreq, y:this.yFreq};
		if (this.x < this.position.x -this.xAmp){
			this.action.x = this.xFreq;
		}
		if (this.x > this.position.x +this.xAmp){
			this.action.x = -this.xFreq;
		}
		if (this.y < this.position.y -this.yAmp){
			this.action.y = this.yFreq;
		}
		if (this.y > this.position.y +this.yAmp){
			this.action.y = -this.yFreq;
		}
		this.y += this.action.y;
		this.x += this.action.x;
		for (n=0;n<bullet.length;n++){
			if (bullet[n] instanceof Box && boxCollide(bullet[n],enemy[i])){
				this.kill();
			}
		}
	};
	this.kill = function(){
	    score += 1;
	    bullet.remove(n);
	    enemy.remove(i);
	    console.log("enemy "+i+" killed")
	};
    this.shoot = function(){
	eshoot(this.x-30,this.y);
    }
}
Ship.prototype = new Box();

function createShip(x,y,wait,position,xFreq,xAmp,yFreq,yAmp){
	var foo = new Ship();
	foo.x = x;
   	foo.y = y;
	foo.i = enemy.length;
	foo.wait = wait;
	foo.position = position;
	foo.xFreq = xFreq;//decimals work
	foo.xAmp = xAmp;
	foo.yFreq = yFreq;
	foo.yAmp = yAmp;
	foo.action = {x:xFreq, y:yFreq};
	return foo;
}

function stuffToDraw(){
	if (game == 1){
		display.ctx.fillStyle = "#11f";
		//bgReady=true;
		if (true) {
			background.draw();
		}
		if (false) {
			display.ctx.fillRect(0, 0, display.width, display.height);
		}
		//ENEMIES
		for (i=0;i<enemy.length;i++){
			if (enemy[i] instanceof Box){
				enemy[i].draw(display.ctx);
			}
		}	
		player.draw(display.ctx);
		//BULLETS
		for (i=0;i<bullet.length;i++){
			if (bullet[i] instanceof Box){
				bullet[i].draw(display.ctx);
			}
		}
		display.ctx.fillStyle = "#000";//text
		display.ctx.font = 'bold 15px sans-serif';
        display.ctx.textAlign = 'left';
		display.ctx.fillText("Score:"+score,2,12);
	}
	if (game === 0){
		display.ctx.fillStyle = "#f70";//background
		display.ctx.fillRect(50, 50, 300, 200);
		display.ctx.fillStyle = "#5fc23f";//Button
		display.ctx.fillRect(100, 150, 200, 70);
		display.ctx.fillStyle = "#000";//text
		display.ctx.font = 'bold 50px sans-serif';
		display.ctx.textAlign = 'center';
		if (score === 0){
			display.ctx.fillText("Play",200,200);
			display.ctx.fillText("Shooter",200,120);//make these boxes
		}
		if (score > 0){
			display.ctx.fillText("Again",200,200);
			display.ctx.fillText("Score:"+score,200,120);
		}
	}
};

var update = function (modifier){
	//Player movement
    var now = Date.now();
    var clock = parseInt(Math.round((now - start)/1000));
	if (38 in keysDown && player.y > player.h/2) {  //up
		player.y -=256*modifier;
	}
	if (40 in keysDown && player.y < display.height-player.h/2) {  //down
		player.y +=256*modifier;
	}
	if (37 in keysDown && player.x > player.w/2) {  // <-
		player.x -=256*modifier;
	}
	if (39 in keysDown && player.x < display.width-player.w/2) {  // ->
		player.x +=256*modifier;
	}
	if(!(32 in keysDown)){
		player.fired = false
	}
	if (32 in keysDown && player.fired==false) {  // Space Bar
	    //if(bullet.length === 0){
	    console.log("fired_space");
	    eShoot(clock);
	    //soundManager.play('aSound');
	    shoot(player.x+player.w/2+1,player.y);
	    player.fired = true;
	    //}
	}
	if (player.y < player.h/2) {  //prevent jumping off screen
		player.y = player.h/2;
	}
	if (player.y > display.height-player.h/2) {  //down
		player.y = display.height-player.h/2;
	}
	if (player.x < player.w/2) {  // <-
		player.x =player.w/2;
	}
	if (player.x > display.width-player.w/2) {  // ->
		player.x = display.width-player.w/2;
	}
	for (i=0;i<enemy.length;i++){
		if (boxCollide(enemy[i],player)){
		    console.log("Game Over_Enemy collision");
			game = 0;
		}
		if (enemy[i] instanceof Box && enemy[i].wait <= clock){
			enemy[i].update();
		}
	}
	for (n=0;n<bullet.length;n++){
		if(bullet[n] instanceof Box){
			bullet[n].move();
		}
		if (boxCollide(bullet[n],player)){
		    console.log("Game Over_Bullet colllsion");
			game = 0;
		}
		if (bullet[n].x >= 800 - bullet[n].w/2 || bullet[n].y >= 600 - bullet[n].h/2 || bullet[n].x < 0){
			bullet.remove(n);
		}	
	}
	$("debug").innerHTML = clock;
};

function frame (){
	if (game == 1){//Playing
		var now = Date.now();
		var delta = now - then;
		update(delta/1000);
		drone.update();
		background.update();
		display.draw();
		then = now;
		//eShoot();
		//$("debug").innerHTML = 
		//var rand = Math.floor(Math.random()*bullet.length);
		//bullet.push.eShoot(enemy[rand].x,enemy[rand].y);
	}
	if (game == 0){
		foo = window.clearInterval(foo);
		display.draw();
	}
};

function playerCreate(){
	this.fired = false;
	player = addRect(200,150,64,64,'#F02FB6');
	var img = loadPic("images/playercraft.png");//*********RUSS******************RUSS********
	var imgup = loadPic("images/playerup.png");//These are for the player, same deal
	var imgdown = loadPic("images/playerdown.png");//******************RUSS******************
	player.draw = function() {
		if (this.ready == true) {
			if (38 in keysDown) {
				display.ctx.drawImage(imgup,this.x-this.w/2,this.y-this.h/2);
			}
			else if (40 in keysDown) {
				display.ctx.drawImage(imgdown,this.x-this.w/2,this.y-this.h/2);
			}
			else {
				display.ctx.drawImage(img,this.x-this.w/2,this.y-this.h/2);
			}	
		}
		else{
        		display.ctx.fillStyle = this.fill;
        		display.ctx.fillRect(this.x-this.w/2, this.y-this.h/2, this.h, this.w);
		}
	}
}


function reset(){ //TODO fix this by abstracting from global
	//player = addRect(200,150,64,64,'#F02FB6');
	playerCreate();
	//player.sequence.load(["playercraft.png"]);
	player.ready = true;
	level();
	game = 1;// 1 for in-progress, 0 for menu
	score = 0;
	then = Date.now();
	foo = setInterval(frame, 50);//framerate
	background.onload = function () {
		//bgReady = true;
	};
}
var game = 0;
var foo = setInterval(frame, 1);//this doesn't effect framrate, only init
display.init();
display.draw();
reset();
//document.getElementById("debug").innerHTML = ();
