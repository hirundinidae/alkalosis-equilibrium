function setup() {
  createCanvas(800, 500);
}
let state = 0;
function draw() {
  background('#F4CCCC');
  drawBackground();
  // bloodCell(100, 100);
  checkState();
}
function checkState() { //don't think this needs commenting
  if (state==0) {
    titleCard();
  }
  else if (state==1) {
    alkalosis();
  }
  else if (state==2) {
    equilibrium();
  }
  else if (state==3) {
    equilibriumBlood();
  }
  else if (state==4) {
    alkalosisCauses();
  }
  else if (state==5) {
    buffer();
  }
  else if (state==6) {
    glossary();
  }
  else if (state==7) {
    bibliography();
  }
}
function titleCard() { //the opening layout (before you click on anything) [idk what to call it]
  //check mouse collisions for each of the other states
}
function equilibrium() { //the opening layout (before you click on anything) [idk what to call it]
  
}
function alkalosis() { //will finish later, too lazy to do it rn
  textSize(45);
  textAlign(CENTER);
  textWrap(WORD);
  text('Alkalosis', 400, 50);
  textSize(18);
  textAlign(CENTER);
  text('A condition where the pH of blood is too high (above 7.4). \n When alkalosis happens, there is more HCO3- (conjugate base) relative to the amount of H2CO3 (weak acid). This also increases the relative concentration of hydroxide ions OH-, making the pH of the blood higher than normal.', 10, 100, 780); //text(STRING, startX, startY, width of textbox)
}

var cells = [
  [150, 110],
  [70, 350],
  [300, 260],
  [340, 80],
  [470, 110],
  [400, 360],
  [600, 310],
  [730, 80]
];
function drawBackground() {
  // bloodCell(150, 130, 0);
  // bloodCell(70, 350, 0);
  // bloodCell(300, 260, 0);
  // bloodCell(340, 80, 0);
  // bloodCell(490, 150, 0);
  // bloodCell(400, 400, 0);
  // bloodCell(600, 310, 0);
  // bloodCell(730, 80, 127);
  for (var i = 0; i < cells.length; ++ i) { //made it work, have to make cells an array instead of a json thing
    bloodCell(cells[i][0], cells[i][1], 0);
  }
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
