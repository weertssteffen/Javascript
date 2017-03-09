var ellipseRadius = 100;

function setup() {
    createCanvas(800, 600);
    colorMode(RGB, 255);
    background(0);
    smooth();
    frameRate(60);
}

function draw() {
    noStroke();                                         // keine Umrandung wird gezeichnet
    fill( 255, 255, 0, 25); // ( R, G, B, A )           // füllt kreis in gelb aus, r = rotanteil, g = grünanteil, b = blauanteil, a = alpha
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}