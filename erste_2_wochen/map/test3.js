const prompt = require("prompt-sync")({ sigint: true });

let mapvar = 0;
let change = 0;
const coordinats = { x: 1, y: 1, undiscoverdform: "■", discoverdform: "#" };
let coordinatarray = [{ x: 1, y: 1, undiscoverdform: "■", discoverdform: "#" }];
const currentcoordinat = {
  x: 1,
  y: 1,
  undiscoverdform: "■",
  discoverdform: "#",
};
let new_coordinats = coordinats;
let map = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
// let x = 0;
// let y = 0;
const p = { x: 1, y: 1, playerform: "0" };
let offset = { x: 1, y: 1 };

function input() {
  let direction = prompt("Where do you go?");
  switch (direction.toLowerCase()) {
    case "w":
      console.log("North");
      if (p.y === 0) {
        map.unshift(map[2]);
        p.y++;
      }
      p.y--;
      break;
    case "a":
      if (p.x === 0) {
        for (let i = 0; i < map.length; i++) {
          map[i].push("");
        }
        p.x++;
      }
      console.log("West");
      p.x--;
      break;
    case "s":
      console.log("South");
      if (p.y === map.length - 1) {
        map.push(map[2]);
      }
      p.y++;
      break;
    case "d":
      if (p.x === map[p.y].length - 1) {
        for (let i = 0; i < map.length; i++) {
          map[i].unshift("");
        }
      }
      console.log("East");
      p.x++;
      break;
    default:
      console.log("Sorry only wasd is accepted!");
  }
}

while (true) {
  for (let y = 0; y < map.length; y++) {
    let row = "";
    for (let x = 0; x < map[y].length + change; x++) {
      currentcoordinat.x = new_coordinats.x;
      currentcoordinat.y = new_coordinats.y;
      while (map[x] < map[x + 1]) {
        map[x].push("");
      }

      if (y === p.y && x === p.x) {
        new_coordinats.x = x;
        new_coordinats.y = y;
        row += p.playerform;
      } else if (coordinatarray === currentcoordinat) {
        row += coordinats.discoverdform;
        console.log("true");
      } else {
        row += coordinats.undiscoverdform;
      }
    }
    console.log(row);
  }
  coordinatarray.push(new_coordinats);
  console.log("1:", coordinatarray);
  console.log(p.x, p.y);
  input();
}
