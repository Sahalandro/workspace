let s = 0;
let string = "";
// function is_palindrom(s) {
//   x = s.length;
//   letzter_index = s.length - 1;
//   console.log(x, letzter_index);
//   for (let z = 0; z <= x / 2; z++) {
//     if (s[0 + z] === s[letzter_index - z]) {
//       gleich = true;
//       console.log(s[0 + z], s[letzter_index - z]);
//     } else {
//       gleich = false;
//       wng = true;
//     }
//     gleich = false;
//   }

//   if ((wng = false)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function is_palindrom(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// if (is_palindrom(string) === true) {
//   console.log("ist ein palindrom");
// } else {
//   console.log("is kein palindrom");
// }
for (let a = 999; a > 800; a--) {
  for (let b = 999; b > 800; b--) {
    s = a * b;
    //console.log(a);
    string = s.toString();
    if (is_palindrom(string) === true) {
      console.log(string);
    }
  }
}
