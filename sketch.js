let xPos = 30;
let xWidth = 740;
let state = 0;
let clicks = [
  [300, 10, 200, 50], // Alkalosis
  [15, 120, 150, 40], // equilibrium
  [15, 270, 305, 40], // in the blood
  [280, 370, 240, 40], // causes of alkalosis
  [515, 270, 280, 40], // natural buffer
  [15, 440, 110, 40], // glossary
  [665, 440, 125, 40] // citations
];
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

p5.disableFriendlyErrors = true; // disables FES

function preload() {
  biCarbGraph = loadImage("assets/graph1.png");
  carAcidGraph = loadImage("assets/graph2.png");
  graph = loadImage("assets/Graph of Alkalosis.png");
  phscale = loadImage("assets/pH scale.png");
  equation = loadImage("assets/equation.png");
  equationSmall = loadImage("assets/equation.png");
  reversible = loadImage("assets/reversible.png");
  closedsystem = loadImage("assets/closedsystem.png");
  thermometer = loadImage("assets/thermometer.png");
  denaturation = loadImage("assets/denaturation.gif");
  references = loadImage("assets/references.png");
  imageRef = loadImage("assets/imageReferences.png");
  font = loadFont("assets/Montserrat-Regular.ttf");
}

function setup() {
  createCanvas(800, 500);
  textFont(font);
}

function draw() {
  background(color("#F4CCCC"));
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
      fill(color(255));
      rect(755, 25, 25, 33);
      fill(color(255, 0, 0));
      textAlign(LEFT);
      textStyle(BOLD);
      textSize(24);
      text("X", 760, 50);
      textStyle(NORMAL);
    } else cursor(AUTO);
  } else if (state == 0) {
    for (let i = 0; i < clicks.length; ++i) {
      if (
        mouseX >= clicks[i][0] &&
        mouseX <= clicks[i][0] + clicks[i][2] &&
        mouseY >= clicks[i][1] &&
        mouseY <= clicks[i][1] + clicks[i][3]
      ) {
        cursor(HAND);
        fill(color(253, 255, 133, 100));
        rect(clicks[i][0], clicks[i][1], clicks[i][2], clicks[i][3]);
        return;
      } else if (
        mouseX >= sliderX + sliderVal - sliderRadius &&
        mouseX <= sliderY + sliderVal + sliderRadius &&
        mouseY >= sliderY - sliderRadius &&
        mouseY <= sliderY + sliderRadius
      ) {
        cursor(HAND);
        return;
      }
    }
    cursor(AUTO);
  }
}

function mouseClicked() {
  if (state != 0) {
    if (mouseX >= 760 && mouseX <= 780 && mouseY >= 30 && mouseY <= 50) {
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
let sliderRadius = 15;
let sliderX = 185;
let sliderY = 450;
let sliderVal = 0;
let pH = (sliderVal - 215) / 1.686;
function mouseDragged() {
  if (
    mouseX >= sliderX + sliderVal - sliderRadius &&
    mouseX <= sliderY + sliderVal + sliderRadius &&
    mouseY >= sliderY - sliderRadius &&
    mouseY <= sliderY + sliderRadius
  ) {
    sliderVal = mouseX - 185;
  }
  if (mouseX <= sliderX) sliderVal = 1;
  else if (mouseX >= 615) sliderVal = 615 - sliderX;
}

function slider() {
  stroke(0);
  line(sliderX, sliderY, 615, sliderY);
  ellipse(sliderX + sliderVal, sliderY, sliderRadius);
  noStroke();
  textSize(12);
  text("7.2", 185,sliderY+20);
  text("7.4", 240, sliderY+20);
  text("14", 615,sliderY+20);
  text("Increase the pH to see what happens to the blood cells!",400,485);
}

function titleCard() {
  //the opening layout (before you click on anything) [idk what to call it]
  //check mouse collisions for each of the other state
  textAlign(CENTER);
  textWrap(WORD);
  fill(color(0));
  slider();
  textSize(45);
  text("Alkalosis", 400, 50);
  textSize(24);
  text("Causes of Alkalosis", 400, 400);
  textAlign(LEFT);
  text("Equilibrium", 20, 150);
  text("Equilibrium In The Blood", 20, 300);
  text("Glossary", 20, 470);
  textAlign(RIGHT);
  text("Body's Natural Buffer", 780, 300);
  text("Citations", 780, 470);
  equationSmall.resize(500, 0);
  image(equationSmall, 150, 80);
}

function alkalosis() {
  title("Alkalosis");
  textSize(15);
  textAlign(CENTER);
  text(
    "A condition where the pH of blood is too high (above 7.4). \n When alkalosis happens, there is more HCO3- (conjugate base) relative to the amount of H2CO3 (weak acid). This also increases the relative concentration of hydroxide ions OH-, making the pH of the blood higher than normal.",
    xPos,
    100,
    xWidth
  ); //text(STRING, startX, startY, width of textbox)
  equation.resize(1000, 0);
  image(equation, 80, 190, (equation.width * 5) / 8, (equation.height * 5) / 8);
  biCarbGraph.resize(250, 0);
  image(biCarbGraph, 90, 300);
  carAcidGraph.resize(250, 0);
  image(carAcidGraph, 450, 300);
  textSize(10);
  text("Weak Acid", -250, 250, 780); //text(STRING, startX, startY, width of textbox)
  text("Conjugate Base", 95, 250, 780); //text(STRING, startX, startY, width of textbox)
}

function equilibrium() {
  fill(color(0));
  title("What is Equilibrium?");
  textSize(15);
  textAlign(CENTER);
  text(
    "Equilibrium is a state of a chemical reaction where the rates of the forward and reverse reactions are equal. An equilibrium requires the following: ",
    xPos,
    125,
    xWidth
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
  fill(color(0));
  title("Equilibrium in Blood");
  textSize(15);
  textAlign(CENTER);
  text(
    "Blood contains carbonic acid H2CO3, a weak acid that dissociates into HCO3-, its conjugate base. In equilibrium, your blood has a pH of 7.2 ~ 7.4.\nIt is important to maintain equilibrium in our blood. Otherwise, the pH may change, affecting enzyme substrate binding, hormone binding, membrane transport, and more.",
    xPos,
    125,
    xWidth
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
    750
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
    xPos,
    125,
    xWidth
  );
  text(
    " This means that, normally, your blood will be kept at a constant pH between 7.2 and 7.4. ",
    xPos,
    240,
    xWidth
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
    xPos,
    125,
    xWidth
  );
  text(
    "Bicarbonate: a weak acid present in blood with the chemical formula HCO3-. It is the conjugate base of carbonic acid.",
    xPos,
    175,
    xWidth
  );
  text(
    "pH: a quantitative measure of the acidity of an aqueous solution. It can be thought of as the 'power of hydrogen.' Numerically, it is represented as the negative log of the concentration of hydronium ions (pH = -log[H3O+]).",
    xPos,
    225,
    xWidth
  );
  text(
    "Alkalosis: a condition in which the blood pH is too high.",
    xPos,
    295,
    xWidth
  );
  text(
    "Solution: a mixture containing a 'minor' component (the solute) dissolved within a 'major' component (the solvent).",
    xPos,
    325,
    xWidth
  );
  text(
    "Basic Solution: a solution containing more OH- (hydroxide) ions than H3O+ (hydronium) ions. Its pH is above 7.",
    xPos,
    375,
    xWidth
  );
  text(
    "Acidic Solution: a solution containing more H3O+ (hydronium) ions than OH- (hydroxide) ions. Its pH is below 7.",
    xPos,
    425,
    xWidth
  );
}

function bibliography() {
  title("Bibliography");
  references.resize(750, 0);
  image(references, 25, 100);
  textSize(18);
  textAlign(LEFT);
  text("Image Sources:", 25, 360);
  imageRef.resize(750, 0);
  image(imageRef, 25, 375);
}

function title(titleText) {
  textSize(40);
  fill(color(0));
  textAlign(CENTER);
  textWrap(WORD);
  text(titleText, 400, 60);
}

function textBox() {
  fill(color(244, 146, 146, 240));
  rect(10, 10, 780, 480);
  fill(color(0));
  textAlign(LEFT);
  textSize(24);
  text("X", 760, 50);
}

function drawBackground() {
  for (let i = 0; i < cells.length; ++i) {
    bloodCell(cells[i][0], cells[i][1], sliderVal-50);
  }
  fill(color(255, 255, 255, 90));
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
