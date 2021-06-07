class Iron{
	constructor(x,y,a,b)
	{
	// assign options to the rubber ball
	var options={
	restitution  :0.8,
	friction : 3,
	density : 30,
	}
		
		this.irons=Bodies.rectangle(x, y, a, b, options)
		World.add(world, this.irons);
        this.a=a;
        this.b=b;

	}
	trex()
	{		
		push()
       translate(this.irons.position.x,this.irons.position.y);
       rotate(this.irons.angle);
       rectMode(CENTER);
       fill("black");
       stroke("grey");
       strokeWeight(2);
       rect(0,0,this.a,this.b)
       pop();
	}
}