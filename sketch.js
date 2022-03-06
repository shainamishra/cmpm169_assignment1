function setup() {
  createCanvas(400, 400);
  background(0);

  fill(180, 0, 0, 90);
  stroke(120, 63, 120);

  // center flower
  translate(200, 200);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 5);
  }
}

function draw() {
  // NW flower
  translate(75, 75);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 40);
    rotate(PI / 5);
  }
  
  // NE flower
  translate(250, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 40);
    rotate(PI / 5);
  }
  
  // center mini flower
  translate(-125, 125);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 20);
    rotate(PI / 5);

  }
  
  // SE flower
  translate(125, 125);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 40);
    rotate(PI / 5);
  }
  
  // SW flower
  translate(-250, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 40);
    rotate(PI / 5);
  }
}
