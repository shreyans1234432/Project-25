class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :0.5
            
        }
        this.body = Bodies.circle(100,240,30,options);
        this.width =25;
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,48,48);
    }
}