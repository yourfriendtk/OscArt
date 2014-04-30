
var angle = 0;
var angleVel = 0.1;
var r1;

var angle2 = 0;
var angleVel2 = 0.1;
var r2;
var bgState = true;
var c = 0;

function setup() {
  createCanvas(1200, 400);
  r1 = random(110);
  r2 = random(110);

  background(c);
  //stroke(0);
  strokeWeight(2);
  noFill();
      
}

function draw() {
  wave();

textSize(32);
fill(0, 102, 153);
text(r1, 10, 60);
fill(0, 102, 153, 51);
text(r2, 10, 90); 
}


function wave() {
  stroke(0);
  //  ellipse(0, 1200, 100, 400);
  beginShape();
  for (var x = 0; x <= width; x += r1) {
    var y = map(sin(angle), -1, 1, 0, height);
    vertex(x, y);
    angle +=angleVel;
  } 
  endShape();
  stroke(255);
  beginShape();
  for (var x = 0; x <= width; x += r2) {
    var y = map(sin(angle2), -1, 1, 0, height);
    vertex(x, y);
    angle2 +=angleVel2;
  } 
  endShape();
}

function mousePressed() {
  if (bgState) {
    c = 255;
  } 
  else {
    c = 0;
  }
  background(c);
  r1 = random(110);
  r2 = random(110);
}

