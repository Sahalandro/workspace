const prompt = require("prompt-sync")({ sigint: true });

let map = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const p = { x: 1, y: 1 };

function input() {
  let direction = prompt("Where do you go?");
  switch (direction.toLowerCase()) {
    case "w":
      console.log("up");
      break;
    case "s":
      console.log("down");
      break;
    case "a":
      console.log("left");
      break;
    case "d":
      console.log("right");
      break;
    default:
      console.log("Sorry only wasd is accepted!");
  }
}
function render() {
  for (let y = 0; y < map.length; y++) {
    let row = "";
    for (let x = 0; x < map[y].length; x++) {
      if (y === p.y && x === p.x) {
        row += "#";
      } else {
        row += "8";
      }
    }
    console.log(row);
  }
}
render();
input();
