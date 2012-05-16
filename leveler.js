function Grid(w,h){
    this.grid=[];
    var row;
    for(i=0;i<h;i++){
		row = [];
		for(var n=0;n<w;n++){
			row.push(0);
		}
		this.grid.push(row);
	}
	this.update = function(x,y,value){//use point as argument?
		c = this.grid[y-1];
        c[x-1]=value;
	};
	this.read = function(x,y){//use point as argument?
		c = this.grid[y-1];
        return c[x-1];
	};
}
 var test= new Grid(4,4);
 