class Ball{
constructor(x,y,r){
 var option={
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2,
} 
 this.body=Bodies.circle(x,y,r,option);  
 this.radius=r;
 World.add(world,this.body);
}
display(){
ellipseMode(CENTER);
fill("pink");
ellipse(this.body.position.x,this.body.position.y,this.radius);

}
}