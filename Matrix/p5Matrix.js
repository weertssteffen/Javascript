var zeichen;
var stränge = [];
var größe = 30;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    var x = 0;
    var y = 0;
    for (var i = 0; i < width / größe; i++) {
        var strang = new Strang();
        strang.erstelleStrang(x, y);
        stränge.push(strang);
        x = x + größe;
    }
    textSize(größe);
}


function draw() {
    background(0, 98);
    stränge.forEach(function(strang) {
        strang.show();
    });
}


function Zeichen(x, y, speed) {
    this.x = x;
    this.y = y;
    this.zähler = 0;
    this.nummer;
    this.speed = speed;
    this.zahl = round(random(17, 25));
    
    this.zufälligesZeichen = function() {
            if (frameCount % this.zahl == 0) {
            this.nummer = String.fromCharCode(0x30A0 + round(random(0, 96)));
            }
        }
    
        this.lauf = function() {
            if (this.y >= height) {
                this.y = 0;
            } else {
                this.y += this.speed;
            }
        }
    
    }



function Strang() {
    this.symbole = [];
    this.anzahl = round(random(5, 30));
    this.speed = round(random(7, 10));
        
    this.erstelleStrang = function(x, y) {
        y = round(random(-500, -100));
         for (var i = 0; i < this.anzahl; i++) {
         zeichen = new Zeichen(x, y, this.speed);
         zeichen.zufälligesZeichen();
         this.symbole.push(zeichen);
         y -= größe;
         }
    }
    
    this.show = function() {
        this.symbole.forEach(function(Zeichen){
            fill(56,254,20);
            text(Zeichen.nummer, Zeichen.x, Zeichen.y);
            Zeichen.lauf();
            Zeichen.zufälligesZeichen();
            
        });
    }
}