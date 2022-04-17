let biCarbGraph;
let carAcidGraph;
function preload() {
  biCarbGraph = loadImage("assets/graph1.png");
  carAcidGraph = loadImage("assets/graph2.png");
  graph = loadImage("assets/Graph of Alkalosis.png");
  phscale = loadImage("assets/pH scale.png");
  equation = loadImage("assets/equation.png");
  reversible = loadImage("assets/reversible.png");
  closedsystem = loadImage("assets/closedsystem.png");
  thermometer = loadImage("assets/thermometer.png");
  denaturation = loadImage("assets/denaturation.gif");
  font = loadFont("assets/static/Montserrat-Light.ttf");
}

function setup() {
  createCanvas(800, 500);
  textFont(font);
}

let state = 0;
function draw() {
  background("#F4CCCC");
  drawBackground();
  if (state != 0) textBox();
  checkCursor();
  if (state == 0) {
    titleCard();
  } else if (state == 1) {
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

function checkCursor() {
  if (state != 0) {
    if (mouseX >= 760 && mouseX <= 780 && mouseY >= 30 && mouseY <= 50) {
      cursor(HAND);
      fill(255);
      rect(755,25,25,33);
      fill(255,0,0);
      textAlign(LEFT);
      textStyle(BOLD);
      textSize(24);
      text("X", 760, 50);
      textStyle(NORMAL);
    }
    else
    cursor(AUTO);
  } else if (state==0) {
    for (let i = 0; i < clicks.length; ++i) {
      if (
        mouseX >= clicks[i][0] &&
        mouseX <= clicks[i][0] + clicks[i][2] &&
        mouseY >= clicks[i][1] &&
        mouseY <= clicks[i][1] + clicks[i][3]
      ) {
        cursor(HAND);
        fill(253, 255, 133,100);
        rect(clicks[i][0],clicks[i][1],clicks[i][2],clicks[i][3]);
        return;
      }
    }
    cursor(AUTO);
  }

}

function mouseClicked() {
  // add more mouseClicked events according to state (eg. slider only on titleScreen)
  if (state != 0) {
    if (mouseX >= 760 && mouseX <= 780 && mouseY >= 30 && mouseY <= 50) {
      // boundaries set by white rect behind the text
      state = 0;
    }
  } else if (state == 0) {
    for (let i = 0; i < clicks.length; ++i) {
      if (
        mouseX >= clicks[i][0] &&
        mouseX <= clicks[i][0] + clicks[i][2] &&
        mouseY >= clicks[i][1] &&
        mouseY <= clicks[i][1] + clicks[i][3]
      ) {
        state = i + 1;
      }
    }
  }
}

let clicks = [
  [300, 10, 200, 50], // Alkalosis
  [15, 120, 150, 40], // equilibrium
  [15, 270, 305, 40], // in the blood
  [280, 370, 240, 40], // causes of alkalosis
  [515, 270, 280, 40] // natural buffer
];
function titleCard() {
  //the opening layout (before you click on anything) [idk what to call it]
  //check mouse collisions for each of the other state
  textSize(45);
  textAlign(CENTER);
  textWrap(WORD);
  fill(255);
  // rect(300, 10, 200, 50); // Alkalosis
  // rect(15, 120, 150, 40); // equilibrium
  // rect(15, 270, 305, 40); // in the blood
  // rect(280, 370, 240, 40); // causes of alkalosis
  // rect(515, 270, 280, 40); // natural buffer
  fill(0);
  text("Alkalosis", 400, 50);
  textSize(24);
  text("Causes of Alkalosis", 400, 400);
  textAlign(LEFT);
  text("Equilibrium", 20, 150);
  text("Equilibrium In The Blood", 20, 300);
  textAlign(RIGHT);
  text("Body's Natural Buffer", 780, 300);
}

function alkalosis() {
  title("Alkalosis");
  textSize(15);
  textAlign(CENTER);
  text(
    "A condition where the pH of blood is too high (above 7.4). \n When alkalosis happens, there is more HCO3- (conjugate base) relative to the amount of H2CO3 (weak acid). This also increases the relative concentration of hydroxide ions OH-, making the pH of the blood higher than normal.",
    10,
    100,
    780
  ); //text(STRING, startX, startY, width of textbox)
  image(
    equation,
    100,
    190,
    (equation.width * 5) / 8,
    (equation.height * 5) / 8
  );
  image(graph, 100, 150, (graph.width * 5) / 8, (graph.height * 5) / 8);
  textSize(10);
  text("Weak Acid", -225, 250, 780); //text(STRING, startX, startY, width of textbox)
  text("Conjugate Base", 95, 250, 780); //text(STRING, startX, startY, width of textbox)
  textSize(15);
}

function equilibrium() {
  fill(0);
  title("What is Equilibrium?");
  textSize(15);
  textAlign(CENTER);
  text(
    "Equilibrium is a state of a chemical reaction where the rates of the forward and reverse reactions are equal. An equilibrium requires the following: ",
    10,
    125,
    780
  ); //text(STRING, startX, startY, width of textbox)
  image(
    reversible,
    100,
    250,
    (reversible.width * 6) / 5,
    (reversible.height * 6) / 5
  );
  image(
    closedsystem,
    300,
    250,
    (closedsystem.width * 5) / 8,
    (closedsystem.height * 5) / 8
  );
  image(
    thermometer,
    550,
    250,
    (thermometer.width * 1) / 6,
    (thermometer.height * 1) / 6
  );
  textSize(14);
  text("1. A reversible reaction ", -235, 420, 780); //text(STRING, startX, startY, width of textbox)
  text("2. A closed system", -20, 420, 780); //text(STRING, startX, startY, width of textbox)
  text("3. A constant temperature", 190, 420, 780); //text(STRING, startX, startY, width of textbox)
  textSize(15);
}

function equilibriumBlood() {
  fill(0);
  title("Equilibrium in Blood");
  textSize(15);
  textAlign(CENTER);
  text(
    "Blood contains carbonic acid H2CO3, a weak acid that dissociates into HCO3-, its conjugate base. In equilibrium, your blood has a pH of 7.2 ~ 7.4.\nIt is important to maintain equilibrium in our blood. Otherwise, the pH may change, affecting enzyme substrate binding, hormone binding, membrane transport, and more.",
    10,
    125,
    780
  ); //text(STRING, startX, startY, width of textbox)
  image(
    denaturation,
    240,
    220,
    (denaturation.width * 6) / 5,
    (denaturation.height * 6) / 5
  );
  textSize(12);
  text(
    "An animation of a protein changing shape, which can be caused by a change in pH. This change in shape can affect its ability to function.",
    240,
    430,
    (denaturation.width * 6) / 5
  ); //text(STRING, startX, startY, width of textbox)
  textSize(15);
}

function alkalosisCauses() {
  title("Causes of Alkalosis");
  textSize(15);
  textAlign(LEFT);
  text(
    "Alkalosis can be due to many reasons, including:\n 1. \t Consuming bases, which increases the OH- concentration. This can occur when baking soda, which contains bicarbonate, is accidentally consumed, or when one overdoses on antacids. \n 2. \t Decrease of carbon dioxide (CO2), which has a separate equilibrium with carbonic acid, preventing the formation of carbonic acid (H2CO3), decreasing the amount of acid while the existing OH- ions remain. This raises the pH. Hyperventilation is a possible cause of carbon dioxide decrease.",
    30,
    100,
    780
  );
  biCarbGraph.resize(300, 0);
  image(biCarbGraph, 40, 230);
  text("If bicarbonate is added", 60, 470);
  carAcidGraph.resize(300, 0);
  image(carAcidGraph, 450, 230);
  text("If carbonic acid is removed", 470, 470);
}

function buffer() {
  title("Your Body's Natural Buffer System");
  textSize(15);
  textAlign(CENTER);
  text(
    "Concerned that your blood's pH will suddenly skyrocket? Don't fear! Your blood is a buffer solution that resists small changes in acid or base. In the buffer solution, there exists both the weak acid and its conjugate base, allowing for the neutralization of any added acid or base.",
    10,
    125,
    780
  );
  text(
    " This means that, normally, your blood will be kept at a constant pH between 7.2 and 7.4. ",
    10,
    240,
    780
  );
  phscale.resize(700, 0);
  image(phscale, 50, 350);
}

function glossary() {
  title("Glossary");
  textSize(15);
  textAlign(LEFT);
  text(
    "Carbonic Acid: a weak acid present in blood with the chemical formula H2CO3. It dissociates into bicarbonate ions and can affect the pH of blood.",
    10,
    125,
    780
  );
  text(
    "Bicarbonate: a weak acid present in blood with the chemical formula HCO3-. It is the conjugate base of carbonic acid.",
    10,
    175,
    780
  );
  text(
    "pH: a quantitative measure of the acidity of an aqueous solution. It can be thought of as the “power of hydrogen.” Numerically, it is represented as the negative log of the concentration of hydronium ions (pH = -log[H3O+]).",
    10,
    225,
    780
  );
  text(
    "Alkalosis: a condition in which the blood pH is too high.",
    10,
    295,
    780
  );
  text(
    "Solution: a mixture containing a “minor” component (the solute) dissolved within a “major” component (the solvent).",
    10,
    325,
    780
  );
  text(
    "Basic Solution: a solution containing more OH- (hydroxide) ions than H3O+ (hydronium) ions. Its pH is above 7.",
    10,
    375,
    780
  );
  text(
    "Acidic Solution: a solution containing more H3O+ (hydronium) ions than OH- (hydroxide) ions. Its pH is below 7.",
    10,
    425,
    780
  );
}

function title(titleText) {
  textSize(40);
  fill(0);
  textAlign(CENTER);
  textWrap(WORD);
  text(titleText, 400, 60);
}

function textBox() {
  fill(244, 146, 146, 240);
  rect(10, 10, 780, 480);
  fill(0);
  textAlign(LEFT);
  textSize(24);
  text("X", 760, 50);
}

let cells = [
  [150, 110],
  [70, 350],
  [300, 260],
  [340, 80],
  [500, 110],
  [400, 360],
  [600, 310],
  [730, 80]
];
function drawBackground() {
  for (let i = 0; i < cells.length; ++i) {
    bloodCell(cells[i][0], cells[i][1], 0);
  }
  fill(255, 255, 255, 90);
  rect(0, 0, 800, 500);
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
