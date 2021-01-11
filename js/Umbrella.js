class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        //this.image = loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_8.png");
        this.image = loadImage("images/WalkingFrame/walking_1.png");
        this.body = Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,400,400);
    }
}