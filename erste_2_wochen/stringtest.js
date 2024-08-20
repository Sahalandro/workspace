let string = "Zehn zame Ziegen zogen zehn zentner Zucker zum Zoo Eider";
let test = 0;
let counter = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] >= "a" && string[i] <= "z") {
    counter++;
  }
}
console.log(counter);
