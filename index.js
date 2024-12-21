// Your code here
class Polygon{
    constructor(Array){
        this.Array = Array;
    }
    get countSides(){
        return this.Array.length;
    }
    get perimeter(){
        for(let i in this.Array){
            return this.Array.reduce((acc, Array)=> acc + Array, 0);
        }
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.countSides !== 3){
            return false;
        }
        const [x,y,z] = this.Array;
        return x+y>z &&y+z>x && x+z>y;
    }
}
class Square extends Polygon{
    get isValid(){
        if (this.countSides !== 4){
            return false;
        }
        return this.Array.every(arr => arr === this.Array[0]);
    }

    get area(){
        if(!this.isValid){
            return undefined;
        }
        return this.Array[0] ** 2;
    }
}