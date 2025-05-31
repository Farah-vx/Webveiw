let layers = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1.5);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 10); 

  translate(width / 2, height / 2);
  let time = frameCount * 0.015;

  // map mouseX and mouseY to subtle distortion values
  let offsetX = map(mouseX, 0, width, -30, 30);
  let offsetY = map(mouseY, 0, height, -30, 30);

  for (let i = 0; i < layers; i++) {
    let progress = i / layers;
    let baseRadius = 100 + progress * 120;
    
    
    let hue = lerp(30, 210, progress); // warm oranges to cool blues
    let saturation = lerp(40, 60, progress);
    let brightness = lerp(80, 95, progress);
    let alpha = map(i, 0, layers, 60, 15);

    stroke(hue, saturation, brightness, alpha);

    beginShape();
    for (let angle = 0; angle <= TWO_PI + 0.1; angle += 0.05) {
      
      let r = baseRadius 
             + 20 * sin(5 * angle + time * 3 + offsetX * 0.1 * i)
             + 15 * cos(3 * angle + time * 2 + offsetY * 0.1 * i);
      let x = r * cos(angle);
      let y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}





