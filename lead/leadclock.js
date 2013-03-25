//leadclock
//Parker Bourassa

var start = Date.now();
var then = Date.now();
var now;


function frame (){
    	var now = Date.now();
	var delta = now - then;
	update(delta/1000);
	then = now;
};

console.log("leadclock loaded");
