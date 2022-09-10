class Hole{
    constructor(x,y){
        var options = {
            isStatic: true
          };
        this.r = 100;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    

    }
    display(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("red");
        ellipse(pos.x,pos.y, this.r);
        pop();
       
    }
}

