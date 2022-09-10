class Puck{
    constructor(x,y){
        var options = {
            restitution: 1.0267,
            frictionAir: 0.0005,
            density: 5,
            isStatic: true
          };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("sprite_0.png")
        World.add(world, this.body);
    

    }
    remove(){
        Matter.World.remove(world, ball.body);
        
      
        
        
    

        
       
      
    }
    stop(){
        Matter.Body.setStatic(this.body, true);

    }
    
    display(){
        Matter.Body.setStatic(this.body, false);
        Matter.Body.applyForce(this.body, this.body.position, {
            x: -1, y:-1
        })
        setTimeout =(()=> {Matter.Body.setStatic(this.body, false);}, 2000)
        let pos = this.body.position;
        push();
        translate (pos.x,pos.y)
        imageMode(CENTER);
        noFill()
        image(this.image, 0,0, 100,50);
        pop();
       
    }
}