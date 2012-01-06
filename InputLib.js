/****************************
Input Library
****************************/

//document.createElement("canvas");
//document.body.appendChild(canvas);

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
                stuffToDraw();
            }
        }
    }

};

//TODO init function for canvas x,y size.

function invalidate() {
    display.valid = false;
}

function $(id){
    return document.getElementById(id);
}

function getMouse(e) {
    var x = Math.floor(e.pageX - $("canvas").getBoundingClientRect().left);
    var y = Math.floor(e.pageY - $("canvas").getBoundingClientRect().top);
    display.mx = x;
    display.my = y;
}

function registerEventHandler(node, event, handler) {
    if (typeof node.addEventListener == "function") {
        node.addEventListener(event, handler, false);
    }
    else {
        node.attachEvent("on" + event, handler);
    }
}

var keysDown = {};//handles multiple keys

addEventListener("keydown", function (e){
	document.getElementById("debug").innerHTML = ("Key " + e.keyCode + " was pressed.");
	keysDown[e.keyCode] = true;
	invalidate();
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	invalidate();
}, false);



var status = "InputLib loaded";
