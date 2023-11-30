
function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  g = createGraphics(400, 400, P2D);
  angleMode(DEGREES);
}

function draw() {
  background("skyblue");
  ground();

  g.background(255);
  g.fill(0);
  g.textSize(50);
  g.textAlign(CENTER, CENTER);
  g.text("PLACEHOLDER", g.width/2, g.height/2);
  push();
  
  translate(0, 0, 0);
  rotateY(frameCount);
  rotateX(frameCount);
  imageMode(CENTER);
  image(g, 0, 0, 800, 800)
  pop();
  
  orbitControl(3);
  
  if(fullscreen()) document.getElementById("navbar").style.top = "-100px";
  else document.getElementById("navbar").style.top = "0";
}

function mousePressed() {
  if(mouseY >= 80) {
    requestPointerLock();
    if (!fullscreen()) {
      fullscreen(true);
    }
  }
  document.getElementById("navbar").style.top = "-100px";
}

function ground() {
  fill("green");
  noStroke();
  push();
  rotateX(90);
  translate(0, -500, -500);
  plane(10000);
  pop();
}
