let a = 1;
let b = 2;
let value = 0;
let sum = 0;

for (let i = 0; a + b < 4_000_000; i++) {
  value = a + b;
  a = b;
  b = value;
  //console.log(value);
  if (value % 2 === 0) {
    sum += value;
    console.log(value);
  }
}
console.log(sum + 2);
