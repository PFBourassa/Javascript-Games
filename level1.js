//                       ( x , y,wait,position,xFreq,xAmp,yFreq,yAmp)
//              screen is(800 X 600)
//           top left is (0,0)

function level(){
	enemy.push(createShip(815,160,5,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(815,160,6,{x:600,y:100},1,80,1,80));
	enemy.push(createShip(815,160,7,{x:600,y:100},1,80,1,80));
	
	enemy.push(createShip(815,615,10,{x:700,y:400},1,0,1,120));
	enemy.push(createShip(815,615,10,{x:650,y:400},1,0,1,120));
	enemy.push(createShip(815,615,10,{x:600,y:400},1,0,1,120));
	enemy.push(createShip(815,615,10,{x:550,y:400},1,0,1,120));
	
	enemy.push(createShip(400,615,15,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,16,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,17,{x:550,y:400},2,60,1,120));
	enemy.push(createShip(400,615,18,{x:550,y:400},2,60,1,120));
	
	enemy.push(createShip(600,700,25,{x:550,y:400},1,0,1,30));
	enemy.push(createShip(450,700,25,{x:500,y:400},1,0,1,30));
	enemy.push(createShip(450,650,25,{x:500,y:350},1,0,1,30));
	enemy.push(createShip(600,650,25,{x:550,y:350},1,0,1,30));
}

