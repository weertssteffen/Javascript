var ellipseRadius = 100;
var img;
var lastX = 0;

function preload() { // erstellt function preload, wird vor setup geladen
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ascanius_Shooting_the_Stag_of_Sylvia_1682_Claude_Lorrain.jpg/966px-Ascanius_Shooting_the_Stag_of_Sylvia_1682_Claude_Lorrain.jpg"); // lädt ein Bild in eine Variable
}

function setup() {
    createCanvas(800, 600);
    smooth();
    noStroke();
    image(img, 0, 0); // setzt img in den Hintergrund
}

function draw() {
    var pxl = img.get(mouseX, mouseY); 
    fill(pxl);
    radius = min(ellipseRadius, abs(mouseX - lastX)); // min wählt den kleineren wert, abs berechnet den Betrag einer Zahl
    ellipse(mouseX, mouseY, radius, radius);
    lastX = mouseX;
}