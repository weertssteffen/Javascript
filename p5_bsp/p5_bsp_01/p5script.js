var ellipseRadius = 500;                            // legt Radius des Kreises auf 500 Pixel fest

function setup() {                                  // wird einmalig ausgeführt, erstellt Grundgerüst
   createCanvas(800, 600);                          // erstellt Canvas, um grafische Oberfläche zu haben, die verändert werden kann, Größe 800x600 Pixel
}

function draw() {                                   // wird mehrmals (60) die Sekunde ausgeführt, Ausgabe des Skripts
    ellipse(width / 2, height / 2, ellipseRadius, ellipseRadius); // erstellt Kreis, Koordinaten in der Mitte des Canvas, Radius = ellipseRadius
}