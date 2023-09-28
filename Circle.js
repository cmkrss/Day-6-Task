// circle
// -radius: double = 1.0
// -color:String = "red"

// +Circle()
// +Circle(radius:double)
// +Circle(radius:double, color:String)
// +getRadius():double
// +setRadius(radius:double):void
// +getColor():String
// +setColor(color:String):void
// +toString():String   "[Circle[radius=?,color=?]"
// +getArea(): double
// +getCircuference():double


class circle {
    radius = 1.0;
    color="red";
    constructor(radius, color){
        this.radius= radius;
        this.color= color;
    }

    Circle(x,y){
        x= this.radius;
        y= this.color;
    }

    }
    // Circle(radius,color){
    //     return "Circle Radius is "+C.radius+ "Color is: "+C.color; }
// let C = new circle();

console.log(Circle());
