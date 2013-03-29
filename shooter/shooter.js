//************************************* 
//Shooter.js Created by Parker Bourassa 
//*************************************
//var start = Date.now();
var bullet = [];
var enemy = [];
//var now;

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
//background.sequence.load(["images/stars.png"]);

var drone = new Sequence();
drone.load(["images/red1.png","images/red2.png","images/red3.png","images/red4.png"]);

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
function Ship(){
    this.sequence = drone;
    this.ready = true;
    this.w = 32;
    this.h = 32; 
    this.i = 0;
    this.fill = "#666";
    this.wait = 1;
    this.position = {x:430,y:320};
    this.xFreq = 0.7;
    this.xAmp = 60;
    this.yFreq = 0.7;
    this.yAmp = 60;
    this.action = {x:this.xFreq, y:this.yFreq};
    this.update = function(){
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
	console.log("enemy "+i+" killed");
	console.log(enemy.length + " Enemies remain");
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
    foo.xFreq = xFreq || 0.7;
    foo.xAmp = xAmp;
    foo.yFreq = yFreq;
    foo.yAmp = yAmp;
    foo.action = {x:xFreq, y:yFreq};
    return foo;
}

function stuffToDraw(){
    display.ctx.fillStyle = "#11f";
    if (true) {
	background.draw();
    }
    if (false) {
	display.ctx.fillRect(0, 0, display.width, display.height);
    }
    //PLAYER
    player.draw(display.ctx);
    //BULLETS
    for (i=0;i<bullet.length;i++){
	if (bullet[i] instanceof Box){
	    bullet[i].draw(display.ctx);
	}
    }
    if (game > 0){
	//ENEMIES
	for (i=0;i<enemy.length;i++){
	    if (enemy[i] instanceof Box){
		enemy[i].draw(display.ctx);
	    }
	}
	
	//SCORE
	display.ctx.fillStyle = "#000";
	display.ctx.font = 'bold 15px sans-serif';
        display.ctx.textAlign = 'left';
	display.ctx.fillText("Score:" + score ,2,12);
    }
    if (game === 0){
	display.ctx.fillStyle = "#5fc23f";//Button
	display.ctx.fillRect(500, 150, 200, 70);
	display.ctx.fillStyle = "#000";//text
	display.ctx.font = 'bold 50px sans-serif';
	display.ctx.textAlign = 'center';
	//START SCREEN
	if (score === 0){
	    display.ctx.fillText("Play",600,200);
	    display.ctx.fillText("Shooter",400,50);
	}
	//GAME OVER
	if (score > 0){
	    display.ctx.fillText("Again",600,200);
	    display.ctx.fillText("Score:"+score,400,50);
	}
    }
};

var update = function (modifier){
    if (38 in leadinput.keysDown && player.y > player.h/2) {  //PLAYER CONTROLS
	player.y -=256*modifier;
    }
    if (40 in leadinput.keysDown && player.y < display.height-player.h/2) {  //down
	player.y +=256*modifier;
    }
    if (37 in leadinput.keysDown && player.x > player.w/2) {  // <-
	player.x -=256*modifier;
    }
    if (39 in leadinput.keysDown && player.x < display.width-player.w/2) {  // ->
	player.x +=256*modifier;
    }
    if(!(32 in leadinput.keysDown)){
	player.fired = false
    }
    if (32 in leadinput.keysDown && player.fired==false) {  // Space Bar
	console.log("fired_space");
	eShoot(clock);
	shoot(player.x+player.w/2+1,player.y);
	player.fired = true;
    }
    if (player.y < player.h/2) {  // PREVENT JUMPING OUT
	player.y = player.h/2;
    }
    if (player.y > display.height-player.h/2) {
	player.y = display.height-player.h/2;
    }
    if (player.x < player.w/2) {
	player.x =player.w/2;
    }
    if (player.x > display.width-player.w/2) {
	player.x = display.width-player.w/2;
    }
    if (game > 0){
	var now = Date.now();//CLOCK INCREMENT
	if (game > 0){
	    var clock = parseInt(Math.round((now - start)/1000));
	}
	for (i=0;i<enemy.length;i++){ // EACH ENEMY
	    if (boxCollide(enemy[i],player)){
		console.log("Game Over_Enemy collision");
		loadState(0);
	    }
	    if (enemy[i] instanceof Box && enemy[i].wait <= clock){
		enemy[i].update();
	    }
	}
	if (enemy.length == 1){
	    console.log("no more enemies, loading state: " + (parseInt(game,10) + 1));
	    loadState(parseInt(game,10) + 1);
	}
    }
    for (n=0;n<bullet.length;n++){ // EACH BULLET
	if(bullet[n] instanceof Box){
	    bullet[n].move();
	}
	if (boxCollide(bullet[n],player)){
	    console.log("Game Over_Bullet colllsion");
	    loadState(0);
	}
	if (game == 0){
	    button = addRect(500, 150, 200 , 70);
	    if (boxCollide(bullet[n],button)){
		console.log("Game is starting");
		loadState(1);
		//reset();
	    }
	}
	if (bullet[n].x >= 800 - bullet[n].w/2 || bullet[n].y >= 600 - bullet[n].h/2 || bullet[n].x < 0){
	    bullet.remove(n);
	}	
    }
    $("debug").innerHTML = clock;
    drone.update();
    background.update();
    display.draw();
};

var button;

function playerCreate(){
    this.fired = false;
    player = addRect(200,150,64,64,'#F02FB6');
    var img = loadPic("images/playercraft.png");//*********RUSS******************RUSS********
    var imgup = loadPic("images/playerup.png");//These are for the player, same deal
    var imgdown = loadPic("images/playerdown.png");//******************RUSS******************
    player.draw = function() {
	if (this.ready == true) {
	    if (38 in leadinput.keysDown) {
		display.ctx.drawImage(imgup,this.x-this.w/2,this.y-this.h/2);
	    }
	    else if (40 in leadinput.keysDown) {
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
    player.ready = true;
}

function loadState (n){
    enemy = [1];
    playerCreate();
    if (n == 1){//Playing
	//background.sequence.load(["images/stars.png"]);
	level1();
    }
    if (n == 2){
	background.sequence.load(["images/level2.png"]);
	level2();
    }
    if (n == 0){
	//foo = window.clearInterval(foo);
	background.sequence.load(["images/stars.png"]);
	display.draw();
    }
    console.log("State loaded: " + n);
    start = Date.now();

    game = n;
    then = Date.now();
    foo = setInterval(frame, 50);
};

var game = 1;
//var foo = setInterval(frame, 1);//this doesn't effect framrate, only init
display.init();
//console.log(game);
score = 0;
loadState(0);
