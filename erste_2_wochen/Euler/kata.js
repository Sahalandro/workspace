// let worte = "Sandro";

// function doubleChar(str) {
//   // Your code here
//   let string = "";
//   let stringpos = 0;
//   for (let i = 0; i < str.length; i++) {
//     string = string + str[i];
//     string = string + str[i];
//   }
//   return string;
// }

// doubleChar(worte);

// function printerError(s) {
//   // your code
//   let lettercount = s.length;
//   let counter = 0;
//   let endcount = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] >= "n" && s[i] <= "z") {
//       counter++;
//       console.log(counter);
//     }
//   }
//   lettercount.toString();
//   counter.toString();
//   endcount = counter + "/" + lettercount;
//   console.log(endcount);
//   return endcount;
// }

// printerError("abcdefghijklmnopqrstuvwxyz");

// let numbers = 354321;
// let ergebnis = 0;
// let arr = Array.from(String(n), Number);
// let arrf = [];
// for (let h = 0; h < arr.length; h++) {
//   let legth = arr.length - h;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       zs = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = zs;
//     }
//   }
// }

// for (let x = 0; x < arr.length; x++) {
//   arrf[x] = arr[arr.length - 1 - x];
// }

// ergebnis = Number(arrf.join(""));

// console.log(ergebnis);

// let a = "xyaabbbccccdefww";
// let b = "xxxxyyyyabklmopq";

// function longest(s1, s2) {
//   // your code
//   let s3 = s1 + s2;
//   let s4 = "";
//   let bi = 97;
//   console.log(s3);
//   for (let x = 0; x < s3.length; x++) {
//     for (let i = 0; i < s3.length; i++) {
//       if (s3.charCodeAt(i) === bi) {
//         s4 = s4 + s3[i];
//         bi++;
//         i = 0;
//         console.log(s4);
//       }
//     }
//     bi++;
//   }
//   return s4;
// }

// console.log(longest(a, b));

// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna.charCodeAt(i) === 84) {
//       rna = rna + "U";
//     } else {
//       rna = rna + dna[i];
//     }
//   }
//   return rna;
// }

// console.log(DNAtoRNA("TTAA"));

// function duplicateCount(text) {
//   let arr = [];
//   let wco = false;
//   text = text.toUpperCase();
//   let count = 0;
//   let position = text.length;
//   for (let i = 0; i < text.length; i++) {
//     for (let x = 0; x < text.length; x++) {
//       if (
//         text.charCodeAt(x) === text.charCodeAt(position) &&
//         arr.includes(text.charCodeAt(position)) === wco
//       ) {
//         count++;
//       }
//     }
//     position--;
//   }
//   return count;
// }

// console.log(duplicateCount("Hallo"));

// function arraydive(s) {
//   let sum = 0;
//   for (const e of s) {
//     if (Array.isArray(e)) {
//       sum += arraydive(e);
//     } else {
//       sum = sum + e;
//     }
//     console.log(sum);
//   }

//   return sum;
// }
// let arr1 = [1, [2, 3, [4], 5], 4];

// let arr = [
//   [1, 2, 3],
//   [4, [1, 2, 3], 5],
//   [7, 8, [1, [2, 3]], 5],
// ];

// console.log("End Sum: ", arraydive(arr));
// console.log(-"1");
