function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
}
img="";
function preload()
{
  img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("#05ffbc");
    text("dog", 65, 50);
    noFill();
    stroke("#05ffbc");
    rect(60, 40, 250, 350)
}