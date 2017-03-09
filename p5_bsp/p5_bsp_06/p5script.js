var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600);
    colorMode(RGB, 255);
    background(0);
    smooth();
    frameRate(60);
}

function draw() {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 25); // ( R, G, B, A )
    stroke(255, 255, 255, 25); // definiert Umrandung
    strokeWeight(2); // definiert größer der Umrandung
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}