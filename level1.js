//          function Ship( x ,  y, w, h,wait,position,xFreq,xAmp,yFreq,yAmp)

function level(){
	enemy.push(createShip(800,160,30,30,5,{x:600,y:60},1,80,1,80));
	enemy.push(createShip(800,160,30,30,6,{x:600,y:60},1,80,1,80));
	enemy.push(createShip(800,160,30,30,7,{x:600,y:60},1,80,1,80));
	
	enemy.push(createShip(800,600,30,30,10,{x:700,y:400},1,0,1,120));
	enemy.push(createShip(800,600,30,30,10,{x:650,y:400},1,0,1,120));
	enemy.push(createShip(800,600,30,30,10,{x:600,y:400},1,0,1,120));
	enemy.push(createShip(800,600,30,30,10,{x:550,y:400},1,0,1,120));
}

