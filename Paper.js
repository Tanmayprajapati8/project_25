class paper {
    constructor(x, y) {
        var options = {
            'restitution': 0.8,
            'friction': 1,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, 20, options);
        // this.radius = radius;
        // this.height = height;
        // this.width = width;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        push();

        var pos = this.body.position;
        translate(pos.x, pos.y);
        // rotate(this.body.angle);
        // ellipseMode(RADIUS);
        imageMode(CENTER);
        // ellipse(pos.x, pos.y,20,20);
        image(this.image, 0, 0,70,70);
        pop();
    }
}