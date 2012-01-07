//Keyboard.js

function stuffToDraw(){
	display.ctx.fillStyle = "#11f";
	display.ctx.fillRect(0, 0, 400, 300);
	//display.valid = true;
	target.draw(display.ctx);
	player.draw(display.ctx);
}

function Box() {
    this.x = 0;
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
	
};

var player = addRect(200,150,40,40,'#F02FB6');

var target = addRect(Math.random()*400,Math.random()*300,30,30,'#01fe31');

var update = function (modifier){
	if (38 in keysDown) {  //up
		player.y -=256*modifier;
	}
	if (40 in keysDown) {  //down
		player.y +=256*modifier;
	}
	if (37 in keysDown) {  // <-
		player.x -=256*modifier;
	}
	if (39 in keysDown) {  // ->
		player.x +=256*modifier;
	}
};

function frame (){
	var now = Date.now();
	var delta = now - then;

	update(delta/1000);
	display.draw();

	then = now;	
};

var then = Date.now();
setInterval(frame, 1);

invalidate();
