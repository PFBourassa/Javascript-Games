/****************************
Input Library
****************************/

//document.createElement("canvas");
//document.body.appendChild(canvas);

/*var display = {
    canvas: 0,
    valid: false,
    ctx: 0,
    width: 0,
    height: 0,
    isDrag: false,
    mx: 0,
    my: 0,
    mySel: 0,
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
            }
        }
    }

};
*/

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


var status = "loaded";
