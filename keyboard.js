//Keyboard.js
var display = {
    canvas: 0,
    valid: false,
    ctx: 0,
    width: 0,
    height: 0,
    isDrag: false,
    mx: 0,
    my: 0,
    mySel: null,
    offsetx: 0,
    offsety: 0,
    getCtx: function() {
        var elemt = document.getElementById('canvas');
        if (elemt && elemt.getContext) {
            this.ctx = elemt.getContext('2d');
        }
    },
    draw: function() {
        this.getCtx();
        if (this.ctx) {
            if (this.valid === false) {
                this.ctx.fillStyle = "#11f";
                this.ctx.fillRect(0, 0, 400, 300);
                this.valid = true;
		player.draw(this.ctx);
            }
        }
    }

};

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

function printKeyCode(event) {//TODO handle multiple keys at a time.
    event = event || window.event;
    document.getElementById("debug").innerHTML = ("Key " + event.keyCode + " was pressed.");
    if (parseInt(event.keyCode, 10) == 40) { //down
        player.y += 10;
    }
    if (parseInt(event.keyCode, 10) == 38) { //up
        player.y += -10;
    }
    if (parseInt(event.keyCode, 10) == 37) { // <-
        player.x += -10;
    }
    if (parseInt(event.keyCode, 10) == 39) { // ->
        player.x += 10;
    }
    invalidate();
    display.draw();
}
registerEventHandler(document, "keydown", printKeyCode);


display.draw();
player.draw();

invalidate();
