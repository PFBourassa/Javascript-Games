//Keyboard.js

function stuffToDraw(){
	display.ctx.fillStyle = "#11f";
	display.ctx.fillRect(0, 0, 400, 300);
	//display.valid = true;
	target.draw(display.ctx);
	player.draw(display.ctx);
	red.draw(display.ctx);	
}

function Box() {
    this.x = 0;//center points
    this.y = 0;
    this.w = 1;
    this.h = 1;
    this.fill = "#444";
    this.draw = function(ctx) {
        display.ctx.fillStyle = this.fill;
        display.ctx.fillRect(this.x-this.w/2, this.y-this.h/2, this.h, this.w);

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

var player = addRect(200,150,40,40,'#F02FB6');

var target = addRect(30,30,30,30,'#01fe31');

var red = addRect((400-30),(300-30),30,30,'#fd1131');



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
		score = 0;
	}
};

function frame (){
	var now = Date.now();
	var delta = now - then;

	update(delta/1000);
	display.draw();

	then = now;
	$("score").innerHTML = score;	
	//$("debug").innerHTML = 
};

var score = 0;
var then = Date.now();
setInterval(frame, 1);



invalidate();
