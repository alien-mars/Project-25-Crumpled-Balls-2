class Paper {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("paper.png");
        this.image.scale = 2;
        World.add(world,this.body);
    }

    display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        //strokeWeight(3);
        //fill(255,0,255);
        image(this.image,0,0,this.r+20,this.r+20);
        pop();
    }
}