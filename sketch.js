function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(200);
  drawBackground();
  // bloodCell(100, 100);
}

// let cells = {
//   150: 110,
//   70: 350,
//   300: 260,
//   340: 80,
//   470: 110,
//   400: 360,
//   600: 310,
//   730: 80
// };
function drawBackground() {
  bloodCell(150, 130, 0);
  bloodCell(70, 350, 0);
  bloodCell(300, 260, 0);
  bloodCell(340, 80, 0);
  bloodCell(490, 150, 0);
  bloodCell(400, 400, 0);
  bloodCell(600, 310, 0);
  bloodCell(730, 80, 127);
}
function bloodCell(x, y, pH) {
  let lightRed = color("#eb4034");
  let darkRed = color("#940f06");
  let spikeRed = color(235, 64, 52, pH);
  noStroke();
  fill(spikeRed);
  quad(-61 + x, -60 + y, 10 + x, 73 + y, 85 + x, -55 + y, 5 + x, -45 + y);
  fill(lightRed);
  ellipse(0 + x, 0 + y, 150, 100);
  fill(darkRed);
  ellipse(10 + x, 5 + y, 85, 60);
}
