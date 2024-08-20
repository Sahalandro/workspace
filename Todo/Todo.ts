//import something from "./fragen.json";
import p from "prompt-sync";
const prompt = p({ sigint: true });

const noteArr: Array<{ name: string; content: string }> = [
  { name: "Einkauf", content: "Butter und Eier" },
  { name: "Blumen", content: "Rose und Lilie" },
];
let tmpNum: number;
let running = true;
function RemoveNote(index: number) {
  noteArr.splice(index, 1);
}
function AddNote() {
  let answerName = prompt("Was ist der Name der Notiz?: ");
  let answerContent = prompt("Was ist der Inhalt der Notiz?: ");
  noteArr.push({ name: answerName, content: answerContent });
  console.log(noteArr[noteArr.length - 1]);
}
function ChangeNote(index: number) {
  console.log(noteArr[index].name, " War der vorherige Name ihrer Notiz");
  let answerName = prompt("Was ist der neue Name ihrer Notiz?: ");
  console.log(noteArr[index].content, " War der vorherige Inhalt ihrer Notiz");
  let answerContent = prompt("Was ist der neue Inhalt der Notiz?: ");
  noteArr[index] = { name: answerName, content: answerContent };
  console.log(noteArr);
}
function ReadNote(index: number) {
  console.log(noteArr[index]);
}
function ListNotes() {
  for (let i = 0; i < noteArr.length; i++) {
    console.log(noteArr[i], "Index: ", i);
  }
}

while (running) {
  console.log(
    "Notizen Erstellen(1)\n",
    "Notizen Auflisten(2)\n",
    "Eine Bestimmte Notiz Lesen/bearbeiten(3)\n",
    "Eine Bestimmte Notiz Löschen(4)\n",
    "Programm Schließen(5)"
  );
  let answer = prompt("Was möchten sie tun?: ");
  switch (answer.toLowerCase()) {
    case "1":
      AddNote();
      break;
    case "2":
      ListNotes();
      break;
    case "3":
      answer = prompt("Was ist der Index der Notiz?: ");
      tmpNum = parseInt(answer);
      ReadNote(tmpNum);
      answer = prompt("Möchten sie diese bearbeiten?: (Y/N)");
      if (answer.toLowerCase() === "y") {
        ChangeNote(tmpNum);
      }
      break;
    case "4":
      answer = prompt("Was ist der Index der Notiz?: ");
      tmpNum = parseInt(answer);
      RemoveNote(tmpNum);
      break;
    case "5":
      running = false;
      break;
  }
}
