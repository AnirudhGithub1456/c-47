const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Lose = 2
var PLAY = 1;
var END = 0;

var gameState = PLAY;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var balls = [];
var holes = []
var board1, board2;
var numberOfArrows = 10;
var score = 0

function preload() {
  bgImg = loadImage("bg0.png")
  
}

function setup() {
  ellipseMode(CENTER)
  angle = 15
  
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  hole = new Hole(1800,452)
  hole_2 = new Hole(100,452)
  
  holes.push(hole)
  holes.push(hole_2)
  


  paddle = new Paddle(360,452,500,500)
  computerPuck = new ComputerPuck(1600,452)
  

  //link = new Link(paddle.body,{x:960, y: 452})
  

  wall = new Wall(950,900,1675,20)
  wall_2 = new Wall(950,50,1675,20)
  wall_3 = new Wall(120,700,20,400)
  wall_4 = new Wall(120,200,20,400)
  wall_5 = new Wall(1775,700,20,400)
  wall_6 = new Wall(1775,200,20,400)
  
  ball = new Puck(960,452)
  
  
  

  
  

  console.log(windowWidth, windowHeight)


  
}

function draw() {

  console.log(gameState)
  
  background(bgImg);
  
  Engine.update(engine);
  if(gameState = PLAY){
    hole.display()
    hole_2.display()
    
    paddle.display()
    computerPuck.display()
    
   
    wall.show()
    wall_2.show()
    wall_3.show()
    wall_4.show()
    wall_5.show()
    wall_6.show()


    computerPuck.start()
   

    var posY = ball.body.position.y
    computerPuck.body.position.y = posY
    var posX = ball.body.position.x
    console.log(posY, posX)
    if(posY > 950 || posX >1785){
      posY = 452
      posX = 960
    }

    collisionWithHole_2()
    collisionWithHole()

    




    
  
  
  

  
  
  
  
  
  
  

    

  
    fill("#6d4c41")
    textSize(40)
    text("Score: "+score,width -200,50)
    textAlign(CENTER,CENTER)

    if(score === 50){
      END = 1
    }

  
  }

  

  ball.display()

  var collision = Matter.SAT.collides(ball.body, paddle.body);
  if (collision.collided) {
    Matter.Body.applyForce(ball.body, ball.body.position, {
      x: 400, y:-15
  })
  //var collision_1 = Matter.SAT.collides(ball.body, computerPuck.body);
  //if (collision_1.collided) {
    //Matter.Body.applyForce(ball.body, ball.body.position, {
      //x: -100, y:0
 //})

//}


  
    
      
    

    
    
    
    
    
  }

  
  


  

  

  

  
  
  if(gameState = END){
    fill("#6d4c41");
    textAlign("center");
    textSize(100);
    text(" You won", 960,452);
    ball.setPosition(960,452)

    score = 0
    
    

  }

  if(gameState = Lose){
    fill("#FF0000");
    textAlign("center");
    textSize(100);
    text(" You Lost", 960,452);
    ball.setPosition(960,452);

    score = 0

  }
  

  
}

function collisionWithHole_2() {
  for (var i = 0; i < holes.length; i++) {
    if (ball !== undefined && holes[i] !== undefined) {
      var collision = Matter.SAT.collides(ball.body, hole_2.body);

      if (collision.collided) {
        ball.remove()
        Lose = 1
        
          
        

        
        
        
        
        
      }
    }
  }
}
function collisionWithHole() {
  for (var i = 0; i < holes.length; i++) {
    if (ball !== undefined && holes[i] !== undefined) {
      var collision = Matter.SAT.collides(ball.body, hole.body);

      if (collision.collided) {
        score+=5
        
        
        
      }
    }
  }
}

/*function mouseDragged(){
  Matter.Body.setPosition(paddle.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  link.fly()
  link.attach(paddle.body)
  ball.move()
  ball_1.move()
  ball_2.move()
  ball_3.move()
  ball_4.move()
  ball_5.move()
  ball_6.move()
  ball_7.move()
  ball_8.move()
  ball_9.move()
  ball_10.move()
  
  
  
  
  
} */


