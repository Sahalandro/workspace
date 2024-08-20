let arr = [1, 3, 8, 4, 7, 12, 16, 9, 18, 4, 6];
let s8 = 0;
let s15 = 0;
let s = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 8) {
    s8 = s8 + arr[i];
    s15 = s15 + arr[i];
    console.log(arr[i], " Kleiner als 8");
  } else if (arr[i] < 15) {
    s15 = s15 + arr[i];
    console.log(arr[i], " Kleiner als 15");
  } else {
    console.log(arr[i], " Größer als 15");
  }
}

s = s15 * s8;
console.log("Die Summe aller Zahlen kleiner als 8 ist ", s8);
console.log("Die Summe aller Zahlen kleiner als 15 ist ", s15);
console.log("Das Produkt beider Zahlen ist ", s);
