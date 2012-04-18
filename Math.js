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

function slopeOf(p1,p2){//y-intercept
    var a = p2.y - p1.y;
	var b = p2.x - p1.x;
	return a/b;
}

function distance(p1,p2){
    var a = p2.y - p1.y;
    var b = p2.x - p1.x;
    return Math.sqrt(a*a+b*b);
}

function midpoint(p1,p2){
    var a = (p2.y + p1.y)/2;
    var b = (p2.x + p1.x)/2;
	return {x:a,y:b};
}

function cross(y1,m1,x1,y2,m2,x2){
    var a = (((m2)*(x2-x1+(y1/m1))-y2)/((m2/m1)-1));//(m2(x2-x1+(y1/m1))-y2)/((m2/m1)-1);
	var b = ((a-y1)/m1)+x1;
    return {x:a,y:b,r:30};
}