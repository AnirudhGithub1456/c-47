class Paddle{
    constructor(x,y,width,height){
       
        this.body = Bodies.rectangle(x, y, width,height);
            this.width = width;
            this.height = height;
            this.image = loadImage("redPuck.png")
            
        
           
            
            
        
        
       
        
        
       
    }
    
   

    display(){

        
        
        var pos = this.body.position
        if(keyIsDown(UP_ARROW) && pos.y > 200 ){
            pos.y -= 10
            

        }
        if(keyIsDown(DOWN_ARROW) && pos.y < 750 ){
            pos.y += 10
            

        }
        Matter.Body.setStatic(this.body, true);
        
        push();
        translate(pos.x, pos.y);

        
        
        imageMode(CENTER);
        image(this.image, 0, 0,300,150);
        pop();
    }


}