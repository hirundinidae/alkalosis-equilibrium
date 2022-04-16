let biCarbGraph;
let carAcidGraph; 
function preload() {
  biCarbGraph = loadImage(
    "https://media.discordapp.net/attachments/630561058465120269/964944646620995634/graph1.png?width=325&height=242"
  );
  carAcidGraph = loadImage(
    "https://media.discordapp.net/attachments/630561058465120269/964944646398705734/graph2.png?width=320&height=242"
  );
  graph = loadImage('Graph of Alkalosis.png');
  phscale = loadImage('pH scale.png');
  equation = loadImage('equation.png');
  // denaturation = createImg('denaturation.gif');
  // gonna have to figure the gif thing out
}

function setup() {
  createCanvas(800, 500);
}

let state = 1; // set to 1, etc to test screen
function draw() {
  background("#F4CCCC");
  drawBackground();
  if (state == 0) {
    titleCard();
  } else textBox();

  if (state == 1) {
    alkalosis();
  } else if (state == 2) {
    equilibrium();
  } else if (state == 3) {
    equilibriumBlood();
  } else if (state == 4) {
    alkalosisCauses();
  } else if (state == 5) {
    buffer();
  } else if (state == 6) {
    glossary();
  } else if (state == 7) {
    bibliography();
  }
}

function mouseClicked() {
  // add more mouseClicked events according to state (eg. slider only on titleScreen)
  if (state != 0) {
    if (mouseX >= 760 && mouseX <= 780 && mouseY >= 30 && mouseY <= 50) {
      // boundaries set by white rect behind the text
      state = 0;
    }
  }
}

function titleCard() {
  //the opening layout (before you click on anything) [idk what to call it]
  //check mouse collisions for each of the other states
}

function equilibrium() {
  //the opening layout (before you click on anything) [idk what to call it]
}

function alkalosis() {
  //will finish later, too lazy to do it rn
  fill(0);
  title("Alkalosis");
  textSize(18);
  textAlign(CENTER);
  text(
    "A condition where the pH of blood is too high (above 7.4). \n When alkalosis happens, there is more HCO3- (conjugate base) relative to the amount of H2CO3 (weak acid). This also increases the relative concentration of hydroxide ions OH-, making the pH of the blood higher than normal.",
    10,
    100,
    780
  ); //text(STRING, startX, startY, width of textbox)
  image(equation, 100, 190, equation.width*5/8, equation.height*5/8);
  image(graph, 100, 150, graph.width*5/8, graph.height*5/8);
  textSize(12);
  text("Weak Acid", -225, 250, 780); //text(STRING, startX, startY, width of textbox)
  text("Conjugate Base", 95, 250, 780); //text(STRING, startX, startY, width of textbox)
  textSize(18);
}

function alkalosisCauses() {
  title("Causes of Alkalosis");
  textSize(16);
  textAlign(LEFT);
  text(
    "Alkalosis can be due to many reasons, including:\n 1. \t Consuming bases, which increases the OH- concentration. This can occur when baking soda, which contains bicarbonate, is accidentally consumed, or when one overdoses on antacids. \n 2. \t Decrease of carbon dioxide (CO2), which has a separate equilibrium with carbonic acid, preventing the formation of carbonic acid (H2CO3), decreasing the amount of acid while the existing OH- ions remain. This raises the pH. Hyperventilation is a possible cause of carbon dioxide decrease.",
    30,
    100,
    780
  );
  biCarbGraph.resize(300, 0);
  image(biCarbGraph, 40, 230);
  text("If bicarbonate is added", 60, 460);
  carAcidGraph.resize(300, 0);
  image(carAcidGraph, 450, 230);
  text("If carbonic acid is removed", 470, 460);
}

function title(titleText) {
  textSize(45);
  textAlign(CENTER);
  textWrap(WORD);
  text(titleText, 400, 50);
}

function textBox() {
  fill(244, 146, 146, 240);
  rect(10, 10, 780, 480);
  //fill(255);
  //rect(760,20,30);
  fill(0);
  textAlign(LEFT, TOP);
  textSize(24);
  text("X", 760, 30);
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
  for (var i = 0; i < cells.length; ++i) {
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
