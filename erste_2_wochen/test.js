const arr = [8, 1, 2, 3, 8, 3, 7, 8];
let test = 0;
let zs = 0;

for (let h = 0; h < arr.length; h++) {
  console.log(test);
  let legth = arr.length - h;
  for (let i = 0; i < length; i++) {
    console.log(test);
    if (arr[i] > arr[i + 1]) {
      zs = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = zs;
    }
    test++;
  }
  test++;
}

console.log(arr);
