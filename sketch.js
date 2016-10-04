var img
var i = 0;
var marigolds

function preload(){
  img = loadImage("img/marigolds.jpg");

}

function setup(){
  createCanvas(640, 580);
}

function draw(){
  fill(random(0,255), random(0,255), 0);
  textSize(i);

  if(mouseIsPressed) {
    text("hungry", mouseY, height/2);
  }


  //background(255, 255, 255, 10);
  //image(marigolds, random(width), random(height), random(width), random(height))
image(img, i, 0, mouseX, mouseY);
i = i + 1;
}
