const prompt = require("prompt-sync")({ sigint: true });
let NotizenSpeicher = ["Rosen und Butter", "Böller und Nägel"];
let Namenliste = ["einkauf", "bombe"];
let Notiz = "";
let NotizName = "";
let index = 0;
let Temp = "";
let vorhanden = false;

function nameNotiz() {
  let NotizName = prompt("Geben sie ihrer Notiz einen Namen: ");
  Temp = NotizName.toLowerCase();
  for (let i = 0; i < Namenliste.length; i++) {
    if (Temp === Namenliste[i]) {
      index = i;
    }
  }
  if (Temp === Namenliste[index]) {
    console.log("Notiz mit diesem Namen schon vorhanden");
    vorhanden = true;
    return;
  } else {
    return NotizName.toLowerCase();
  }
}
function addthingstodo() {
  let Notiz = prompt("Schreiben Sie ihre Notiz hier: ");
  return Notiz;
}
function removenotiz() {
  antwort = prompt("Wie ist der name der Notiz?, Die Sie entfernen wollen:");
  Temp = antwort.toLowerCase();
  for (let i = 0; i < Namenliste.length; i++) {
    if (Temp === Namenliste[i].toLowerCase()) {
      index = i;
    }
  }
  let NaI = Namenliste[index];
  if (Temp === NaI.toLowerCase()) {
    Namenliste.splice(index, 1);
    NotizenSpeicher.splice(index, 1);
    console.log(antwort, " wurde entfernt\n");
  } else {
    console.log("fehler!!!");
  }
}
function searchnotiz() {
  antwort = prompt("Wie ist der name der Notiz die sie suchen?:");
  Temp = antwort.toLowerCase();
  for (let i = 0; i < Namenliste.length; i++) {
    if (Temp === Namenliste[i]) {
      index = i;
    }
  }
  if (Temp !== Namenliste[index]) {
    console.log("Notiz mit diesem Namen nicht vorhanden");
  } else {
    console.log(Namenliste[index], ":\n", NotizenSpeicher[index]), "\n";
  }
}
function notizmodification() {
  antwort = prompt("Wie ist der name der Notiz die sie verändern wollen?:");
  Temp = antwort.toLowerCase();
  for (let i = 0; i < Namenliste.length; i++) {
    if (Temp === Namenliste[i]) {
      index = i;
    }
  }
  if (Temp !== Namenliste[index]) {
    console.log("Notiz mit diesem Namen nicht vorhanden");
  } else {
    console.log(Namenliste[index], ":\n", NotizenSpeicher[index]);
    antwort = prompt(
      "Dies war ihre vorherige Notiz was wollen sie ändern Name oder Inhalt?"
    );
    switch (antwort.toLowerCase()) {
      case "name":
        antwort = prompt("Geben sie hier den neuen Namen ein:");
        Namenliste[index] = antwort;
        break;
      case "inhalt":
        antwort = prompt("Geben sie hier den neuen Inhalt ein:");
        NotizenSpeicher[index] = antwort;
        break;
      default:
        console.log("fehler!!!");
    }
  }
  console.log(
    "Dies ist ihre Notiz nach der Modification\n",
    Namenliste[index],
    ":\n",
    NotizenSpeicher[index],
    "\n"
  );
}

function ui() {
  console.log(
    " Neue Notiz \n Notiz Lesen  \n Notiz Modifizieren \n Notiz Entfernen \n Programm Schliessen"
  );
  let antwort = prompt("Was wollen sie tun?: ");
  switch (antwort.toLowerCase()) {
    case "neue notiz":
      NotizName = nameNotiz();
      if (vorhanden === true) {
        vorhanden = false;
        break;
      } else {
        Notiz = addthingstodo();
        Namenliste.push(NotizName);
        NotizenSpeicher.push(Notiz);
      }
      console.log("Notiz wurde hinzugefügt \n");
      break;
    case "notiz lesen":
      searchnotiz();
      break;
    case "notiz modifizieren":
      notizmodification();
      break;
    case "notiz entfernen":
      removenotiz();
      break;
    case "programm schliessen":
      running = false;
      break;
    default:
      console.log("Fehler Fehler :(");
  }
}
let running = true;
while (running) {
  ui();
}
