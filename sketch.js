
let Bigben;

function preload() {
    Bigben = loadImage("Bigben.jpg");
}   

function setup() {
    createCanvas(1200,975);
    background(255,0,0);
    c = Bigben.get(mouseX,mouseY);
}
    
function draw() {
    if (mouseIsPressed) {
        this.x = random(width);
        this.y = random(height);
        var size = random(16,25);
        fill(c);
        stroke(255);
        strokeWeight(1.5);
        ellipse(this.x,this.y,size,size);
      }
}
