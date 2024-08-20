import p from "prompt-sync";
const prompt = p({ sigint: true });

let running = true;
let origin = { X: 1, Y: 1 };
const playerCoordinats = { X: 1, Y: 1 };
let discoverd = [{ X: 1, Y: 1 }];
let player = { HP: 5, Damage: 3, Level: 1, EXP: 0 };
let enemies = [
  { name: "Slime", HP: 1, Damage: 2, EXP: 2 },
  { name: "Skeleton", HP: 6, Damage: 12, EXP: 8 },
];
let playertempHP = player.HP;
let DistanceFromOriginX: number = 0;
let DistanceFromOriginY: number = 0;
let wasTrue = false;
const map = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function Input() {
  let direction = prompt("Where do you go?(WASD) e is exit!");
  switch (direction.toLowerCase()) {
    case "w":
      if (playerCoordinats.Y === 0) {
        map.unshift([]);
        for (let i: number = 0; i < map[playerCoordinats.Y + 1].length; i++) {
          map[0].push("0");
        }
        for (let i = 0; i < discoverd.length; i++) {
          discoverd[i].Y++;
        }
        origin.Y++;
        playerCoordinats.Y++;
      }
      playerCoordinats.Y--;
      break;
    case "s":
      if (playerCoordinats.Y === map.length - 1) {
        map.push([]);
        for (let i: number = 0; i < map[playerCoordinats.Y - 1].length; i++) {
          map[map.length - 1].push("0");
        }
      }
      playerCoordinats.Y++;
      break;
    case "a":
      if (playerCoordinats.X === 0) {
        for (let i: number = 0; i < map.length; i++) {
          map[i].unshift("");
        }
        for (let i = 0; i < discoverd.length; i++) {
          discoverd[i].X++;
        }
        origin.X++;
        playerCoordinats.X++;
      }
      playerCoordinats.X--;
      break;
    case "d":
      if (playerCoordinats.X === map[0].length - 1) {
        for (let i: number = 0; i < map.length; i++) {
          map[i].push("");
        }
      }
      playerCoordinats.X++;
      break;
    case "e":
      running = false;
      break;
    default:
      console.log("Sorry only wasd is accepted!");
  }
}

function MapLoader() {
  for (let y: number = 0; y < map.length; y++) {
    for (let x: number = 0; x < map[y].length; x++) {
      for (let i: number = 0; i < discoverd.length; i++) {
        if (y === discoverd[i].Y && x === discoverd[i].X) {
          map[y][x] = "O";
          wasTrue = true;
        } else if (wasTrue === false) {
          map[y][x] = "■";
        }
      }
      wasTrue = false;
      if (y === playerCoordinats.Y && x === playerCoordinats.X) {
        map[y][x] = "!";
        let currentY: number = playerCoordinats.Y;
        let currentX: number = playerCoordinats.X;
        discoverd.push({ X: currentX, Y: currentY });
      }
    }
  }
  for (let i: number = 0; i < map.length; i++) {
    console.log(map[i], "\n");
  }
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Encounter() {
  if (randomIntFromInterval(1, 12) >= 13) {
    return true;
  }
  return false;
}

function MonsterChooser() {
  DistanceFromOriginX = playerCoordinats.X - origin.X;
  DistanceFromOriginY = playerCoordinats.Y - origin.Y;
  if (
    DistanceFromOriginX <= 3 &&
    DistanceFromOriginX >= -3 &&
    DistanceFromOriginY <= 3 &&
    DistanceFromOriginY >= -3
  ) {
    return enemies[0];
  } else if (
    DistanceFromOriginX > 3 ||
    DistanceFromOriginX < -3 ||
    DistanceFromOriginY > 3 ||
    DistanceFromOriginY < -3
  ) {
    return enemies[1];
  }
  return enemies[0];
}

function BattleUI() {
  if (Encounter() === true) {
    let currentEnemy = { name: "String", HP: 1, Damage: 1, EXP: 1 };
    currentEnemy = MonsterChooser();
    let tmpHP = currentEnemy.HP;
    console.log("You Encounter a ", currentEnemy);
    console.log("Attack(1)\nRun(2)");
    let answer = prompt("What will you do?");
    switch (answer.toLowerCase()) {
      case "1":
        currentEnemy.HP = currentEnemy.HP - player.Damage;
        console.log("You hit for ", player.Damage, " Damage");
        console.log("Enemy has ", currentEnemy.HP, "HP left");
        break;
      case "2":
        console.log("You ran away... like a COWARD!");
        return;
        break;
      default:
        break;
    }
    if (currentEnemy.HP <= 0) {
      console.log(currentEnemy.name, " beat, YOU WIN!");
      console.log("+", currentEnemy.EXP, "EXP");
      player.EXP += currentEnemy.EXP;
      currentEnemy.HP = tmpHP;
      return;
    }
    playertempHP = playertempHP - currentEnemy.Damage;
    console.log("You take ", currentEnemy.Damage, " damage");
    console.log(playertempHP, " HP left");
    if (playertempHP <= 0) {
      console.log("Death is upon you");
      running = false;
    }
  } else {
    return;
  }
}

function LevelUP() {
  let baseExp = 25;
  console.log("Current Stats: ", player);
  if (player.EXP > baseExp * player.Level) {
    player.EXP = player.EXP - baseExp * player.Level;
    console.log("LEVEL UP!");
    player.Damage = Math.round(player.Damage * 1.5);
    player.HP = Math.round(player.HP * 1.5);
    player.Level++;
    console.log("New Stats: ", player);
  } else {
    console.log(player.EXP, "/", baseExp * player.Level, " EXP");
  }
  return;
}

while (running) {
  LevelUP();
  MapLoader();
  Input();
  BattleUI();
}
