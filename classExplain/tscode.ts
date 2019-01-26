class Point {
    x: number;
    y: number;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    add(point) {
     return new Point(this.x + point.x, this.y + point.y);
    }
    log(): void{
        console.log("here is Point");
    }
}

var point = new Point(1, 1);

class Point3D extends Point {
    z:number;
    constructor(x, y, z){
        super(x, y);
        this.z = z;
    }
    add(point){
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

var point3d =  new Point3D(5, 10, 10);
