function angleOf(p1,p2){
    var a = p2.y - p1.y;
	var b = p2.x - p1.x;
	var s = Math.atan(a/b)*180/Math.PI;
    //return s;
	if (a > 0){
        if (b > 0){//I
			return s;
		}
		else if (b < 0){//II
			return 90-s;
		}
	}
	if (a < 0 ){
        if (b > 0 ){//IV
			return 270+s;
		}
		else if (b < 0){//III
			return 180+s;
		}
	}
    if (a===0){
        return 0;
    }
}

function midpoint(p1,p2){
    var a = p2.y - p1.y;
    var b = p2.x - p1.x;
    return Math.sqrt(a*a+b*b);
}

function cross(m1,b1,m2,b2){
    var x = (b2-b1)/(m1-m2);
    var y = m1*x +b1;
    return x+","+y;
}