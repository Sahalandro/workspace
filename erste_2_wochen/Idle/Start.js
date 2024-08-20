const prompt = require("prompt-sync")({ sigint: true });

let gold = 0;
let aim = 0;
let generator = 1;
let generatorcost = 0;

function addGenerator() {
  if (generatorcost < gold) {
    gold -= generatorcost;
    generator++;
  } else {
    console.log("Nicht Genug Gold!");
  }
}

function ui() {
  console.log(
    "Neuer Generator Kaufen: " +
      generatorcost +
      " Gold, K für Kaufen oder w um einen Wert zu setzen"
  );
  let antwort = prompt("Was wollen sie tun?: ");
  switch (antwort.toLowerCase()) {
    case "k":
      addGenerator();
      break;
    case "w":
      let antwort = prompt("Wert: ");
      aim = antwort;
      break;
    default:
      console.log("WIP !!!");
      break;
  }
}

function countseconds() {
  console.clear();
  generatorcost = generator * 1.5;
  let GoldPS = 1 * generator;
  gold += GoldPS;
  console.log(gold);
}
ui();
setInterval(countseconds, 1000);
