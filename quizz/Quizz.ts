import something from "./fragen.json";
import p from "prompt-sync";
const prompt = p({ sigint: true });

let i: number = 0;
let running: boolean = true;
let Coop: number = 0;
let p1: number = 0;
let p2: number = 0;
function removequestion(i: number) {
  something.splice(i, 1);
}
function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let answer = prompt("Press 1 for Solo, Press 2 for Coop: ");
while (running) {
  if (answer === "2") {
    Coop = 1;
  }
  i = randomIntFromInterval(0, something.length - (1 + Coop));
  console.log("I ist ", i);
  console.log("length ist ", something.length);

  for (let j: number = 0; j <= Coop; j++) {
    if (Coop === 1) {
      console.log("Player " + (1 + j));
    }
    console.log(
      something[i].name,
      "\n",
      something[i].answer,
      "\n",
      something[i].questions
    );
    answer = prompt("Answer: ");
    if (answer.toLowerCase() === something[i].right.toLowerCase()) {
      console.log("Right");
      if (j === 0) {
        p1 += 5;
      } else {
        p2 += 5;
      }
    } else {
      console.log("False");
      if (j === 0) {
        p1 -= 2;
      } else {
        p2 -= 2;
      }
    }
    removequestion(i);
    if (something[0] === undefined) {
      if (Coop === 1) {
        console.log("Player 1: ", p1, "\nPlayer 2: ", p2, "\nEnd");
        if (p1 > p2) {
          console.log("Player 1 wins");
        } else if (p1 < p2) {
          console.log("Player 2 wins");
        } else {
          console.log("Tie");
        }
      } else {
        console.log("Player 1: ", p1);
      }
      running = false;
    }
  }
}
