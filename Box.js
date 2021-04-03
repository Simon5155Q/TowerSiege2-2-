class Box{
    constructor(x, y, width, height){
    var options = {
        'restitution': 0.6,
        'density' : 1.0,
        'friction' : 1.0,
        'isStatic' : false
    }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height; 
  this.image = loadImage("polygon.png");
  World.add(world, this.body); 
}
display(){
  


  if(this.body.speed < 2){
    //super.display();
    push();
  translate(this.body.position.x, this.body.position.y);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

}