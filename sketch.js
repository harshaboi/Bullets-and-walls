var bullet, wall,thickness;
var speed, weight;


function setup() 
{
  createCanvas(1600,400);
  
  speed = Math.round(random(55,90));
  bullet = createSprite(50,200,50,50);
  thickness = random(22,83); 
  bullet.velocityX = speed;
  wall = createSprite(1200,800,thickness,height/2);
  weight=random(400,1500);
  
  wall.shapeColor = color(211,211,211);
}

function draw() 
{
  background(0);  
  
  
  wall.depth = 890;
  wall.depth = wall.depth+1;
  if(hasCollided(bullet,wall))
    {

    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage<10)
  {
      bullet.shapeColor = color(0,255,0);
  }
  if(damage>10)
  {
    bullet.shapeColor = color(255,0,0);
}

}
drawSprites();
}