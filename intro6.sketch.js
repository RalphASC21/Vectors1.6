

let mover;
let slider;

function setup(){
    createCanvas(400, 400);
        mover = new Mover(200, 200); //creates a mover in setup and calles the mover constructor
    // background(0);

    slider = createSlider(0, 255, 100); //creates slider 
    slider.position(10, 10); //moves slider to a position x and y
    slider.style('width', '80px'); // size of slider

}

function draw(){
    background(0);
    mover.update(); // updates mover constructor
    mover.show(); // displays mover constructor


}
