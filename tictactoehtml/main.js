"use strict";
let arr = [];
let index = 0;
let p1 = [[], [], []];
let p2 = [[], [], []];
let nochmal = document.getElementById("Nochmal");
let output = document.getElementById("output");
nochmal.disabled = true;
let a = 0;
let b = 1;
let c = 2;
let d = 3;
let e = 4;
let f = 5;
let g = 6;
let h = 7;
let i = 8;
let PosibillitiesArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
for (let i = 1; i < 10; i++) {
    let l = i.toString();
    let k = document.getElementById(l);
    arr.push(k);
}
let k = 0;
arr[a].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[0].push(0);
        arr[a].innerText = "X";
    }
    else {
        p2[0].push(0);
        arr[a].innerText = "O";
    }
    arr[a].disabled = true;
    k++;
    WinCheck();
});
arr[b].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[0].push(1);
        arr[b].innerText = "X";
    }
    else {
        p2[0].push(1);
        arr[b].innerText = "O";
    }
    arr[b].disabled = true;
    k++;
    WinCheck();
});
arr[c].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[0].push(2);
        arr[c].innerText = "X";
    }
    else {
        p2[0].push(2);
        arr[c].innerText = "O";
    }
    arr[c].disabled = true;
    k++;
    WinCheck();
});
arr[d].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[1].push(3);
        arr[d].innerText = "X";
    }
    else {
        p2[1].push(3);
        arr[d].innerText = "O";
    }
    arr[d].disabled = true;
    k++;
    WinCheck();
});
arr[e].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[1].push(4);
        arr[e].innerText = "X";
    }
    else {
        p2[1].push(4);
        arr[e].innerText = "O";
    }
    arr[e].disabled = true;
    k++;
    WinCheck();
});
arr[f].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[1].push(5);
        arr[f].innerText = "X";
    }
    else {
        p2[1].push(5);
        arr[f].innerText = "O";
    }
    arr[f].disabled = true;
    k++;
    WinCheck();
});
arr[g].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[2].push(6);
        arr[g].innerText = "X";
    }
    else {
        p2[2].push(6);
        arr[g].innerText = "O";
    }
    arr[g].disabled = true;
    k++;
    WinCheck();
});
arr[h].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[2].push(7);
        arr[h].innerText = "X";
    }
    else {
        p2[2].push(7);
        arr[h].innerText = "O";
    }
    arr[h].disabled = true;
    k++;
    WinCheck();
});
arr[i].addEventListener("click", () => {
    if (k % 2 === 0) {
        p1[2].push(8);
        arr[i].innerText = "X";
    }
    else {
        p2[2].push(8);
        arr[i].innerText = "O";
    }
    arr[i].disabled = true;
    k++;
    WinCheck();
});
function WinCheck() {
    if ((arr[0].textContent === "X" &&
        arr[1].textContent === "X" &&
        arr[2].textContent === "X") ||
        (arr[3].textContent === "X" &&
            arr[4].textContent === "X" &&
            arr[5].textContent === "X") ||
        (arr[6].textContent === "X" &&
            arr[7].textContent === "X" &&
            arr[8].textContent === "X") ||
        (arr[0].textContent === "X" &&
            arr[3].textContent === "X" &&
            arr[6].textContent === "X") ||
        (arr[1].textContent === "X" &&
            arr[4].textContent === "X" &&
            arr[7].textContent === "X") ||
        (arr[2].textContent === "X" &&
            arr[5].textContent === "X" &&
            arr[8].textContent === "X") ||
        (arr[0].textContent === "X" &&
            arr[4].textContent === "X" &&
            arr[8].textContent === "X") ||
        (arr[2].textContent === "X" &&
            arr[4].textContent === "X" &&
            arr[6].textContent === "X")) {
        output.innerText = "P1 Wins";
        for (let i = 0; i < 9; i++) {
            arr[i].disabled = true;
        }
        nochmal.disabled = false;
    }
    if ((arr[0].textContent === "O" &&
        arr[1].textContent === "O" &&
        arr[2].textContent === "O") ||
        (arr[3].textContent === "O" &&
            arr[4].textContent === "O" &&
            arr[5].textContent === "O") ||
        (arr[6].textContent === "O" &&
            arr[7].textContent === "O" &&
            arr[8].textContent === "O") ||
        (arr[0].textContent === "O" &&
            arr[3].textContent === "O" &&
            arr[6].textContent === "O") ||
        (arr[1].textContent === "O" &&
            arr[4].textContent === "O" &&
            arr[7].textContent === "O") ||
        (arr[2].textContent === "O" &&
            arr[5].textContent === "O" &&
            arr[8].textContent === "O") ||
        (arr[0].textContent === "O" &&
            arr[4].textContent === "O" &&
            arr[8].textContent === "O") ||
        (arr[2].textContent === "O" &&
            arr[4].textContent === "O" &&
            arr[6].textContent === "O")) {
        output.innerText = "P2 Wins";
        for (let i = 0; i < 9; i++) {
            arr[i].disabled = true;
        }
        nochmal.disabled = false;
    }
    if (arr[0].disabled === true &&
        arr[1].disabled === true &&
        arr[2].disabled === true &&
        arr[3].disabled === true &&
        arr[4].disabled === true &&
        arr[5].disabled === true &&
        arr[6].disabled === true &&
        arr[7].disabled === true &&
        arr[8].disabled === true) {
        if (output.innerText !== "P1 Wins") {
            if (output.innerText !== "P2 Wins") {
                output.innerText = "Tie";
                nochmal.disabled = false;
            }
        }
    }
}
function refreshPage() {
    window.location.reload();
}
nochmal.addEventListener("click", refreshPage);
