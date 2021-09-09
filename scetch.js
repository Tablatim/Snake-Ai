var s;
var scl = 20;
var food;
var score = 0;

function setup() {
    createCanvas(600,600);
    resize()
    s = new Snake();
    // frameRate(10);     ====> A rajouter pour limiter les fps
    pickLocation()
    updatescore()
}

function resize() {
    var canvas = document.getElementById("defaultCanvas0");
    document.body.appendChild(canvas)
    canvas.style
        .position = "relative"
        .height = "600px"
        .width = "600px"
        .margin = "0"
        .padding = "0";
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    for(var i=0; i<s.tail.length; i++) {
        if(food.x == s.tail[i].x && food.y == s.tail[i].y) {
            pickLocation()
        }
    }
    
}

function updatescore() {
    document.title = "Score : "+score+" | Snake Game"
    var scoreh2 = document.getElementById("scoreh")
    scoreh2.innerHTML = "Score : "+score
}

function gameOver() {
    null
}

function draw() {
    background(51,51,51);
    s.update();
    s.show();
    if (s.eat(food)) {
        pickLocation()
        score += 1
        updatescore()
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl)
}

