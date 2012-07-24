//                       ( x , y,wait,position,xFreq,xAmp,yFreq,yAmp)
//              screen is(800 X 600)
//           top left is (0,0)

function level(){
	enemy.push(createShip(816,160,5,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(816,160,6,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(816,160,7,{x:600,y:100},1,80,1,80));
	
//	enemy.push(createShip(817,615,10,{x:700,y:400},1,0,1,120));
//	enemy.push(createShip(817,615,10,{x:650,y:400},1,0,1,120));
//	enemy.push(createShip(817,615,10,{x:600,y:400},1,0,1,120));
//enemy.push(createShip(817,615,10,{x:550,y:400},1,0,1,120));
    addShip({x:817,y:615,w:10,p:{x:700,y:400},xF:1,yF:1,xA:0,yA:120});
    addShip({x:817,y:615,w:10,p:{x:650,y:400},xF:1,yF:1,xA:0,yA:120});
    addShip({x:817,y:615,w:10,p:{x:600,y:400},xF:1,yF:1,xA:0,yA:120});
    addShip({x:817,y:615,w:10,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:120});
	
	enemy.push(createShip(400,615,15,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,16,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,17,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,18,{x:550,y:400},2,60,1,120));
	
	enemy.push(createShip(600,700,25,{x:550,y:400},1,0,1,30));
	enemy.push(createShip(450,700,25,{x:500,y:400},1,0,1,30));
	enemy.push(createShip(450,650,25,{x:500,y:350},1,0,1,30));
	enemy.push(createShip(600,650,25,{x:550,y:350},1,0,1,30));
	
    addShip({x:815,y:25,w:30,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:60},2);
    addShip({x:815,y:25,w:31,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:60},2);
    addShip({x:815,y:25,w:32,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:60},2);
    addShip({x:815,y:25,w:33,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:60},2);
    addShip({x:815,y:25,w:34,p:{x:550,y:400},xF:1,yF:1,xA:0,yA:60},2);

}
//enemy that breaks into two.
//variable for vulnerablilty

/*function Splitter () {
	this.kill = function (){
		score += 1;
		bullet.remove(n);
		enemy.remove(i);
		enemy.push(createShip(this.x,this.y-30,{x:this.x,y:this.y},1,0,1,60));
		enemy.push(createShip(this.x,this.y+30,{x:this.x,y:this.y},1,0,1,60));
	};
}
Splitter.prototype = new Ship();*/

function addShip(o,t){//(object,type)
    if (t == undefined){
	var foo = new Ship();
    }
    if (t == 1){//****************Splitter
	var foo = new Ship();
	foo.kill  = function (){
	    score += 1;
	    bullet.remove(n);
	    enemy.remove(i);
	    enemy.push(createShip(this.x,this.y+30,0,{x:this.x,y:this.y},0,0,1,60));
	    enemy.push(createShip(this.x,this.y-30,0,{x:this.x,y:this.y},0,0,1,60));
	};
    }
    if (t == 2){//*****************Twin Bees
	var foo = new Ship();
	foo.yAction = 0;
	foo.update = function (){
	    if (player.x < this.x){
		this.x -= 1;
	    }
	    if (player.x >= this.x){
		if (player.y > this.y && this.yAction === 0){
		    this.yAction = 1;
		}
		if (player.y <= this.y && this.yAction === 0){
		    this.yAction = -1;
		}
		this.y += this.yAction;
	    }
	    for (n=0;n<bullet.length;n++){
		if (bullet[n] instanceof Box && boxCollide(bullet[n],enemy[i])){
		    this.kill();
		}
	    }
	};
    }
    foo.x = o.x;
    foo.y = o.y;
    foo.i = enemy.length;
    foo.wait = o.w || 1;
    foo.position = o.p;
    foo.xFreq = o.xF || 0;//decimals?
    foo.xAmp = o.xA || 0;
    foo.yFreq = o.yF || 0;
    foo.yAmp = o.yA || 30;
    foo.action = {x:o.xF, y:o.yF};
    enemy.push(foo);
}
//Guy who gets a little bigger each time you hit him, until he explodes.
//a REALLY small guy who zooms in and out of the screen really quickly who only shots one quick aimed shot at a time


