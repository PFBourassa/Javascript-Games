//                       ( x , y,wait,position,xFreq,xAmp,yFreq,yAmp)
//              screen is(800 X 600)
//           top left is (0,0)

function level(){
	enemy.push(createShip(816,160,5,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(816,160,6,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(816,160,7,{x:600,y:100},1,80,1,80));
	
	enemy.push(createShip(817,615,10,{x:700,y:400},1,0,1,120));
	enemy.push(createShip(817,615,10,{x:650,y:400},1,0,1,120));
	enemy.push(createShip(817,615,10,{x:600,y:400},1,0,1,120));
	enemy.push(createShip(817,615,10,{x:550,y:400},1,0,1,120));
	
	enemy.push(createShip(400,615,15,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,16,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,17,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,18,{x:550,y:400},2,60,1,120));
	
	enemy.push(createShip(600,700,25,{x:550,y:400},1,0,1,30));
	enemy.push(createShip(450,700,25,{x:500,y:400},1,0,1,30));
	enemy.push(createShip(450,650,25,{x:500,y:350},1,0,1,30));
	enemy.push(createShip(600,650,25,{x:550,y:350},1,0,1,30));
	
	addShip({x:400,y:615,w:1,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:60},5);

}
//enemy that breaks into two.
//variable for vulnerablilty

function Splitter () {
	this.kill() = function (){
		enemy.push(createShip(this.x+30,this.y,{x:this.x,y:this.y},1,0,1,60));
		enemy.push(createShip(this.x-30,this.y,{x:this.x,y:this.y},1,0,1,60));
	}
}
Splitter.prototype = new Ship();

function addShip(o,t){
	if (true){
		var foo = new Ship();
	}
	if (false){
		var foo = new Splitter();
	}
	foo.x = o.x;
   	foo.y = o.y;
	foo.i = enemy.length;
	foo.wait = o.w;
	foo.position = o.p;
	foo.xFreq = o.xF || 0;//decimals?
	foo.xAmp = o.xA || 0;
	foo.yFreq = o.yF || 0;
	foo.yAmp = o.yA || 30;
	foo.action = {x:o.xF, y:o.yF};
	enemy.push(foo);
}

