function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(200);
  drawBackground();
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
  bloodCell(150, 130);
  bloodCell(70, 350);
  bloodCell(300, 260);
  bloodCell(340, 80);
  bloodCell(490, 150);
  bloodCell(400, 400);
  bloodCell(600, 310);
  bloodCell(730, 80);
}
function bloodCell(x, y) {
  let lightRed = color("#eb4034");
  let darkRed = color("#940f06");
  noStroke();
  fill(lightRed);
  ellipse(0 + x, 0 + y, 150, 100);
  fill(darkRed);
  ellipse(10 + x, 5 + y, 85, 60);
}
