class Umbrella{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");
        World.add(world, this.umbrella);
    }
 
      display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,300,300);
      }



}