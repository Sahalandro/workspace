let string = "12+7-((7+8)+4)";
let first = string.indexOf("(");
let last = string.lastIndexOf(")");
let replace = string.slice(first, last + 1);
i = string
  .slice(first, last + 1)
  .replace("(", "")
  .replace(/\)+($)/, "");

let k = string.replace(replace, i);

// function debrackify(string) {
//   if (string.includes("(") && string.includes(")")) {
//     string = string
//       .slice(string.indexOf("("), string.lastIndexOf(")") + 1)
//       .replace(string.indexOf("("), "")
//       .replace(string.lastIndexOf(")") + 1, "");
//     debrackify(string);
//   } else {
//     return string;
//   }
// }

// console.log(debrackify(string));
console.log(replace);
console.log(i);
console.log(k);
