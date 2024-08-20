const arr = Array(100)
  .fill(0)
  .map((_, i) => ({
    name: Array(Math.floor(3 + i / 5))
      .fill(0)
      .map(() => String.fromCharCode(Math.floor(Math.random() * 26 + 97)))
      .join(""),
    age: Math.round(Math.random() * 100),
  }));

function old(arr) {
  return arr >= 40;
}
function ageremove(age) {
  return age.name;
}
// console.log(
//   arr
//     .filter((lol) => lol.age > 40)
//     .sort((a, b) => a.age - b.age)
//     .map(ageremove)
// );
let sum = 0;
function ageadd(age) {
  sum += age.age;
  return sum;
}
function average() {
  sum = sum / arr.length;
  return sum;
}

let lol = arr.filter((lol) => lol.name.length > 8).map(ageadd);
let l = lol.length;
console.log(lol[l - 1] / lol.length);
