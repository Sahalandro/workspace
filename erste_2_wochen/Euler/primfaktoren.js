let a = 600851475143;
let PrimArr = [2, 3];
let pz = 3;
let arrpoint = 2;
let wdo = false;
let prim = 8;
//Primzahl Array Generator
for (let i = 0; i < 10_000; i++) {
  pz++;
  for (let x = 2; x <= pz / 2; x++) {
    if (pz % x === 0) {
      wdo = true;
    }
  }
  if (wdo != true) {
    PrimArr[arrpoint] = pz;
    wdo = false;
    arrpoint++;
  }
  wdo = false;
}
//Primfaktoren Mathe
for (let x = 0; x < PrimArr.length; x++) {
  if (a % PrimArr[x] === 0) {
    console.log(PrimArr[x]);
    a = a / PrimArr[x];
    console.log(a);
    x = 0;
  }
}
//console.log(PrimArr);

function is_prim(zahl) {
  let wdo = false;
  for (let x = 2; x <= zahl / 2; x++) {
    if (zahl % x === 0) {
      wdo = true;
    }
  }
  if (wdo != true) {
    // console.log(zahl, " ist eine Primzahl");
    return true;
  } else {
    // console.log(zahl, " ist keine Primzahl");
    return false;
  }
}

if (is_prim(prim) === true) {
  console.log(prim, "ist eine Primzahl");
}
