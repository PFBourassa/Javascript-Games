//          function Ship( x ,  y, w, h,wait,position,xFreq,xAmp,yFreq,yAmp)

function level(){
	enemy.push(createShip(815,160,30,30,5,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(815,160,30,30,6,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(815,160,30,30,7,{x:600,y:100},1,80,1,80));
	
	enemy.push(createShip(800,600,30,30,10,{x:700,y:400},1,0,1,120));
	enemy.push(createShip(800,600,30,30,10,{x:650,y:400},1,0,1,120));
	enemy.push(createShip(800,600,30,30,10,{x:600,y:400},1,0,1,120));
	enemy.push(createShip(800,600,30,30,10,{x:550,y:400},1,0,1,120));
	
	enemy.push(createShip(400,600,30,30,15,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,600,30,30,16,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,600,30,30,17,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,600,30,30,18,{x:550,y:400},2,60,1,120));
	
	enemy.push(createShip(600,700,30,30,25,{x:550,y:400},1,0,1,30));
	enemy.push(createShip(450,700,30,30,25,{x:500,y:400},1,0,1,30));
	enemy.push(createShip(450,650,30,30,25,{x:500,y:350},1,0,1,30));
	enemy.push(createShip(600,650,30,30,25,{x:550,y:350},1,0,1,30));
}

