


class Mover{
    constructor(x, y){
        this.pos = createVector(x, y);  //creates vector at a point x, y
        // this.velocity = createVector();
        this.vel = p5.Vector.random2D(); // calls a specific p.5 library and sets a random 2D vector to a velocity variable
        this.vel.mult(random(3)); // a velocity multiplier
        // this.acc = p5.Vector.random2D();
        // this.acc.setMag(0.01);

    }

    update(){
        this.mass = slider.value(); // lets the mass of the ellipse change based on a slider position

        let mouse = createVector(mouseX, mouseY); // lets ellipse follow the mouse
        this.acc = p5.Vector.sub(mouse, this.pos); // acceleration of an ellipse and sets it to the mouse and the position of the vector
        this.acc.setMag(40/this.mass); // sets the acceleration magnitude to the mass / force  *Newtons 2nd law* bigger mass with constant force equals slower acceleration

        this.vel.add(this.acc); // velocity effected by a changing acceleration

        this.vel.limit(5); //limits the velocity to a magnitude of "x" number

        this.pos.add(this.vel); //adds a velocity to a certain vector position



        // //Compute a vector that points from...
        // let mouse = createVector(mouseX, mouseY);
        // this.acceleration = p5.Vector.sub();
        
        // //Set magnitude of acceleration
        // this.acceleration.setMag(.2);
    }

    show(){
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 32)
    }
}