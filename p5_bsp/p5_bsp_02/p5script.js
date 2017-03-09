var ellipseRadius = 100;                        

function setup() {                              
    createCanvas(800, 600);                     
    colorMode(RGB, 255);                        // definiert Farbspektrum 
    background(0);                              // Setzt Hintergrunf auf Schwarz
    smooth();                                   // rundet Kanten ab (Anti_Aliasing)
    frameRate(60);                              // Aktualisierungsrate = 60 Bilder pro Sekunde
}

function draw() {                               
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius); 
}