//leadcanvas.js
//Parker Bourassa

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
        if (this.ctx) {
            if (this.valid === false) {
                stuffToDraw();
            }
        }
	this.getCtx();
    },
	init:function() {
		this.width = $("canvas").width;
		this.height = $("canvas").height;
	}
};

function invalidate() {
    display.valid = false;
}

display.init();
console.log("leadcanvas loaded");
