var größe = 25;
var kreis;
var kreise = [];
var hx = 0;
var hy = 0;
var c = [0, 0, 0, 100];
var co;
var off;
var xmouse;
var ymouse;
var O = new Overlay();
var P = new Pressed();
var Canvas;

function preload() {
    img = loadImage("/Paint/Farbspektrum.png");
}

function setup() {
    frameRate(60);
    colorMode(RGB, 100);
    cursor(CROSS);
    Canvas = createCanvas(window.innerWidth, window.innerHeight - 5);
    push();
    background(255);
    noFill();
    pop();
}

function draw() {
    background(255);
    showDots();
    Zeiger();
    O.Hintergrund();
    O.Abgrenzung();
    O.ResetButton();
    O.SaveButton();
    image(img, window.innerWidth - 200, 0, 200, 150);
}

function mouseWheel(event) {
    if(event.delta < 0) {
        größe += 1;
    } else {
        größe -= 1;
    }
    if(größe < 5) {
        größe = 5;
    }
    return false;
}

function Zeiger() {
    push();
    noFill();
    ellipse(mouseX, mouseY, größe, größe);
    if (mouseIsPressed) {
        fill(0);
        this.X = mouseX;
        this.Y = mouseY;
        this.größe = größe;
        if (!(this.X > window.innerWidth - 200)) {
        kreise.push(new Kreis(this.X, this.Y, größe, c));
        }
    }
    pop();
}

function Kreis(X, Y, größe, co) {
    this.x = X;
    this.y = Y;
    this.größe = größe;
    this.color = co;
    this.show = function() {
        push();
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.größe, this.größe);
        pop();
    }
}

function mouseClicked() {
    P.Farbauswahl();
    P.checkReset();
    P.checkSave();
}

function Pressed() {
    this.Farbauswahl = function() {
        if (((window.innerWidth - 200 < mouseX) && (mouseX < window.innerWidth)) && ((0 < mouseY) && (mouseY < 150))) {
            xmouse = map(mouseX, window.innerWidth - 200, window.innerWidth, 0, 2400);
            ymouse = map(mouseY, 0, 150, 0, 1800);
            push();
            c = img.get(xmouse, ymouse);
            pop();
        }
    }
    this.checkReset = function() {
        if ((window.innerWidth - 175 < mouseX) && (mouseX < window.innerWidth - 25) && (200 < mouseY) && (mouseY < 250)) {
            window.location.reload();
        }
    }
    this.checkSave = function() {
        if ((window.innerWidth - 175 < mouseX) && (mouseX < window.innerWidth - 25) && (300 < mouseY) && (mouseY < 350)) {
            saveCanvas(Canvas, 'Painting', 'jpg');
        }
    }
}

function showDots() {
    push();
    kreise.forEach(function(kreis) {
        kreis.show();
    });
    pop();
}

function Overlay() {
    this.Hintergrund = function() {
        push();
        fill(51);
        rect(window.innerWidth - 200, 0, 200, window.innerHeight);
        pop();
    }
    this.Abgrenzung = function() {
        push();
        stroke(0);
        strokeWeight(1);
        line(window.innerWidth - 200, 0, window.innerWidth - 200, window.innerHeight);
        pop();
    }
    this.ResetButton = function() {
        push();
        fill(100);
        rect(window.innerWidth - 175, 200, 150, 50);
        fill(0);
        textSize(20);
        text("Restart", window.innerWidth - 132, 232);
        pop();
    }
    this.SaveButton = function() {
        push();
        fill(100);
        rect(window.innerWidth - 175, 300, 150, 50);
        fill(0);
        textSize(20);
        text("Save", window.innerWidth - 123, 332);
        pop();
    }
}