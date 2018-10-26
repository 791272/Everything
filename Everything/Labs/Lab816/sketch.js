
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(710, 400);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

 rSlider = createSlider(0, 255, 100);
 rSlider.position(20, 20);
}

//  The draw function is called @ 30 fps
function draw() {
  var r = rSlider.value() + random(-255 , 255);
  background(r, 0, 0);
  text("red", rSlider.x * 2 + rSlider.width, 35);

  fill(255, 5, 81);
  rect(100, 300, 50,50);
}
