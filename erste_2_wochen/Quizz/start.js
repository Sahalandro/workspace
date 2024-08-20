const arrOb = require("./fragen.json");
const prompt = require("prompt-sync")({ sigint: true });
let player1 = { alive: 3, points: 0 };
let player2 = { alive: 3, points: 0 };
let twoplayers = false;
let running = true;
let j = 0;
let answer = prompt("Drücke 1 für Singleplayer und 2 für Coop!");
if (answer === "2") {
  twoplayers = true;
}
console.log("Kategorien\nTiere: 0\nAllgemein Wissen: 1");
let i = prompt("");
while (running && arrOb[i] !== "") {
  console.log("PunkteP1: ", player1.points, "LebenP1: ", player1.alive);
  if (twoplayers) {
    console.log("PunkteP2: ", player2.points, "LebenP2: ", player2.alive);
  }
  console.log(arrOb[i].name);
  console.log(arrOb[i].answer[j]);
  console.log(arrOb[i].questions[j]);
  answer = prompt(arrOb[i].questions);
  if (twoplayers) {
    switch (answer.toLowerCase()) {
      case arrOb[i].right[j].toLowerCase():
        player1.points += 5;
        break;
      default:
        if (player1.alive === 1) {
          console.log("P1 Game Over");
        }
        player1.alive--;
        break;
    }
    answer = prompt("Player2? ");
    switch (answer.toLowerCase()) {
      case arrOb[i].right[j].toLowerCase():
        player2.points += 5;
        break;
      default:
        if (player2.alive === 1) {
          console.log("P2 Game Over");
        }
        player2.alive--;
        break;
    }
    if (player1.points === 15 || player2.points === 15) {
      "Der Spieler mit den meisten Punkten hat gewonnen\nPlayer points P1: " +
        player1.points +
        "\nPlayer points P2: " +
        player2.points;
    }
    if (player1.alive === 0) {
      console.log(
        "Der Spieler mit den meisten Punkten hat gewonnen\nPlayer points P1: " +
          player1.points +
          "\nPlayer points P2: " +
          player2.points
      );
      running = false;
    } else if (player2.alive === 0) {
      console.log(
        "Der Spieler mit den meisten Punkten hat gewonnen\nPlayer points P1: " +
          player1.points +
          "\nPlayer points P2: " +
          player2.points
      );
      running = false;
    }
  } else {
    switch (answer.toLowerCase()) {
      case arrOb[i].right[j].toLowerCase():
        console.log("Richtig");
        player1.points += 5;
        if (player1.points === 15) {
          console.log("YOU WIN!");
          running = false;
        }
        break;
      default:
        console.log("Falsch");
        player1.alive--;
        if (player1.alive === 0) {
          console.log("Game Over");
          running = false;
        }
        break;
    }
  }
  //arrOb.splice(arrOb[i], 1);
  // arrOb.splice(arrOb[i].name[j]);
  // arrOb.splice(arrOb[i].questions[j]);
  // arrOb.splice(arrOb[i].right[j]);
  j++;
}
