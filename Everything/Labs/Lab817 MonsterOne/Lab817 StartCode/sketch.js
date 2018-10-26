
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 0, 0);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
    strokeWeight(30);
    noFill();
    arc(430, 430, 280, 280, ((3*PI)/2)+0.4, (PI/2)+0.5);
    stroke(255, 225, 0);
    //translate(580, 200);
    // noStroke();
    for (var i = 0; i < 1; i ++) {
      rotate(-PI/5);
      rect(100, 550, 20, 200);
    }
    // noStroke();

    rect(75, 520, 70, 25);
    rect(-110, 640, 60, 5);

}
