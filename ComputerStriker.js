class ComputerPuck{
    constructor(x,y){
       
        this.body = Bodies.rectangle(x, y, width,height);
            this.width = width;
            this.height = height;
            this.image = loadImage("bluePuck.png")
            
        
           
            
            
        
        
       
        
        
       
    }

    start(){
        
    }
    
    
   

    display(){

        

        

        
        
        var pos = this.body.position
    
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0,300,150);
        pop();
    }


}