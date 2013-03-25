/****************************
Input Library V.1
****************************/

//document.createElement("canvas");
//document.body.appendChild(canvas);

//canvas stuff
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
        if (this.ctx) {
            if (this.valid === false) {
                stuffToDraw();
            }
        }
	this.getCtx();
    },
	init: function() {
		this.width = $("canvas").width;
		this.height = $("canvas").height;
	}
};

//TODO init function for canvas x,y size.

function invalidate() {
    display.valid = false;
}



//Mouse functions
//TODO move mouseUp, etc. here
function getMouse(e) {
    var x = Math.floor(e.pageX - $("canvas").getBoundingClientRect().left);
    var y = Math.floor(e.pageY - $("canvas").getBoundingClientRect().top);
    display.mx = x;
    display.my = y;
}



//Keyboard functions
var keysDown = {};//handles multiple keys

window.addEventListener("keydown", function (e){
	//$("debug").innerHTML = ("Key " + e.keyCode + " was pressed.");
	keysDown[e.keyCode] = true;
	invalidate();
	//return false;
	e.preventDefault();
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
	invalidate();
}, false);



//Misc. stuff
function $(id){
    return document.getElementById(id);
}
/*
function registerEventHandler(node, event, handler) {
    if (typeof node.addEventListener == "function") {

        node.addEventListener(event, handler, false);
    }
    else {
        node.attachEvent("on" + event, handler);
    }
}
*/

function slope (p1,p2){
	return (p2.y-p1.y)/(p2.x-p1.x);
};

var status = "InputLib loaded";
