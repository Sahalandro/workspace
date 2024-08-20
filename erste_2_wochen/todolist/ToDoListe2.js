const prompt = require("prompt-sync")({ sigint: true });
let index = 0;
let Temp = "";
let wf = false;
let arrlist = [{ Name: "einkauf", content: "Butter und Milch" }];
let tempOb = {};
const NoteOb = {
  Name: "",
  content: "",
};
function addNote() {
  let notename = prompt("Geben sie ihrer Notiz einen Namen: ");
  Temp = notename.toLowerCase();
  for (let i = 0; i < arrlist.length; i++) {
    if (Temp === arrlist[i].Name) {
      console.log("Notiz mit diesem Namen schon vorhanden");
      return;
    }
  }
  NoteOb.Name = Temp;
  let note = prompt("Schreiben Sie ihre Notiz hier: ");
  Temp = note.toLowerCase();
  NoteOb.content = Temp;
  arrlist.push(NoteOb);
  console.log("Ihre Notiz wurde hinzugefügt\n");
}
function searchnote() {
  answer = prompt("Wie ist der name der Notiz die sie suchen?:");
  Temp = answer.toLowerCase();
  for (let i = 0; i < arrlist.length; i++) {
    if (Temp === arrlist[i].Name) {
      console.log(arrlist[i]);
      return;
    }
  }
  console.log(answer, " was not found");
}
function notemodification() {
  index = 0;
  answer = prompt("Wie ist der name der Notiz die sie verändern wollen?:");
  Temp = answer.toLowerCase();
  for (let i = 0; i < arrlist.length; i++) {
    if (Temp === arrlist[i].Name) {
      index = i;
    }
  }
  tempOb = arrlist[index];
  if (Temp !== tempOb.Name) {
    console.log("Notiz mit dem Namen ", answer, " nicht vorhanden");
  } else {
    console.log(arrlist[index]);
    tempOb = arrlist[index];
    answer = prompt(
      "Dies war ihre vorherige Notiz was wollen sie ändern Name oder Inhalt?"
    );
    switch (answer.toLowerCase()) {
      case "name":
        answer = prompt("Geben sie hier den neuen Namen ein:");
        arrlist[index].Name = answer;
        break;
      case "inhalt":
        answer = prompt("Geben sie hier den neuen Inhalt ein:");
        arrlist[index].content = answer;
        break;
      default:
        console.log("fehler!!!");
    }
  }
  console.log("Dies ist ihre Notiz nach der Modification\n", arrlist[index]);
}
function removenote() {
  answer = prompt("Wie ist der name der Notiz?, Die Sie entfernen wollen:");
  Temp = answer.toLowerCase();
  for (let i = 0; i < arrlist.length; i++) {
    tempOb = arrlist[i];
    if (Temp === tempOb.Name) {
      arrlist.splice(i, 1);
      console.log(answer, " wurde entfernt\n");
    } else {
      wf = true;
    }
  }
  if (wf) {
    console.log("fehler!!!");
  }
}

function ui() {
  console.log(
    " Neue Notiz \n Notiz Lesen  \n Notiz Modifizieren \n Notiz Entfernen \n Programm Schliessen"
  );
  let answer = prompt("Was wollen sie tun?: ");
  switch (answer.toLowerCase()) {
    case "neue notiz":
      addNote();
      break;
    case "notiz lesen":
      searchnote();
      break;
    case "notiz modifizieren":
      notemodification();
      break;
    case "notiz entfernen":
      removenote();
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
let a = 5;
console.log(`a ist ${a}`);
