class Stone{
	constructor(x,y,a,b)
	{
	var options={
	restitution  :0.8,
	friction : 0.9,
	density : 12,
	}
    this.stones=Bodies.rectangle(x, y, a, b, options)
    World.add(world, this.stones);
    this.a=a;
    this.b=b;

}
mia()
{		
    push()
   translate(this.irons.position.x,this.irons.position.y);
   rotate(this.irons.angle);
   rectMode(CENTER);
   fill("red");
   stroke("black");
   strokeWeight(2);
   rect(0,0,this.a,this.b)
   pop();
}
}