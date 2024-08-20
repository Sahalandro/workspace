let arr = [];
let counter = 0;
for (let i = 0; i < 1000; i++) {
  arr[i] = i;
}
for (let x = 0; x < arr.length; x++) {
  if (arr[x] % 3 === 0 || arr[x] % 5 === 0) {
    counter = counter + arr[x];
  }
}

console.log(counter);
