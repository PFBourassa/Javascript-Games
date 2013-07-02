//leadbox
//Parker Bourassa

function loadPic(a){
	var foo;
	foo = new Image();
	foo.src = a;
	return foo;
}

function Sequence() {
	var image = [];//list of images
	var i = 0;
	this.ready = false;
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
		for (n = 0; n <= array.length; n++) {
			image.push(loadPic(array[n]));
			image[n].onload = function() {
				if (n == array.length) {
					this.ready = true;
				}
			};
		}
	};
}

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

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

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

function addRect(x, y, w, h, fill) {
    var rect = new Box();
    rect.x = x;
    rect.y = y;
    rect.w = w;
    rect.h = h;
    rect.fill = fill;
    return rect;
}
console.log("leadbox loaded");
