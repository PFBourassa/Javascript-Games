function slope(p1,p2){
	var a = p1.y - p2.y;
	var b = p1.x - p2.x;
	var slope = arctan(a/b);
	if (a > 0){
		if (b > 0){//I
			return slope;
		}
		if (b < 0){//II
			return -1*slope;
				}
		else{//straight up or down
			return undefined;
		}
	if (a < 0 ){
		if (b > 0 ){//IV
			return -1*slope;
		}
		if (b < 0){//III
			return slope;
		}
		else{
			return 0;
		}
	}
}