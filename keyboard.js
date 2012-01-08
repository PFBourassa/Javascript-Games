//Keyboard.js

function stuffToDraw(){
	display.ctx.fillStyle = "#11f";
	display.ctx.fillRect(0, 0, 400, 300);
	display.valid = true;
	update();
	player.draw(display.ctx);
}

function Box() {
    this.x = 0;
    this.y = 0;
    this.h = 1;
    this.w = 1;
    this.fill = "#444";
    this.draw = function(ctx) {
        display.ctx.fillStyle = this.fill;
        display.ctx.fillRect(this.x, this.y, this.h, this.w);

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

var player = addRect(200,200,40,40,'#F02FB6');

var update = function (/*modifier*/){
	if (38 in keysDown) {  //up
		player.y -=10;
	}
	if (40 in keysDown) {  //down
		player.y +=10;
	}
	if (37 in keysDown) {  // <-
		player.x -=10;
	}
	if (39 in keysDown) {  // ->
		player.x +=10;
	}
};

function frame (){
	display.draw();
}

setInterval(frame, 20);

invalidate();
