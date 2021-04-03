class Circle{
    constructor(x, y, width, height){
        var options = {
            'restitution' : 0.5,
            'density' : 1.0,
            'friction' : 1.0,
        }
    this.body = Bodies.circle(x, y, width, height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
    fill("red");
    stroke("red");
     ellipseMode(RADIUS);
     ellipse(this.body.position.x, this.body.position.y, this.width, this.height);  
    }
}