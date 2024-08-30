"use strict";
let arr = [];
let add = document.getElementById("+");
let subtract = document.getElementById("-");
let multiply = document.getElementById("*");
let divide = document.getElementById("/");
let sum = document.getElementById("=");
let clear = document.getElementById("cl");
let output = document.getElementById("output");
let input = "";
let numberarr = [];
let operatorarr = [];
let found = false;
let substring = "";
//declares number buttons 1-9
for (let i = 0; i < 9; i++) {
    let l = i.toString();
    let k = document.getElementById(l);
    arr.push(k);
}
let a = "";
function Meth(string) {
    console.log(string);
    if (string.includes("(") && string.includes(")")) {
        let first = string.indexOf("(");
        let last = string.lastIndexOf(")");
        let replace = string.slice(first, last + 1);
        let substring = string
            .slice(first, last + 1)
            .replace("(", "")
            .replace(/\)(?=[^.]*$)/, "");
        console.log(replace);
        substring = Meth(substring);
        console.log(substring, 1);
        string = string.replace(replace, substring);
        console.log(string, 2);
        numberarr = [];
        operatorarr = [];
        a = "";
        // input = "";
    }
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 47 &&
            string.charCodeAt(i) < 58 &&
            string.length - i === 1) {
            a += string.charAt(i);
            numberarr.push(parseFloat(a));
            // console.log(numberarr, a);
        }
        else if ((string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58) ||
            string.charCodeAt(i) === 46) {
            a += string.charAt(i);
            // console.log(i, string.length, a);
        }
        else {
            numberarr.push(parseFloat(a));
            operatorarr.push(string.charAt(i));
            a = "";
            // console.log(numberarr);
            // console.log(operatorarr);
        }
    }
    for (let i = 0; i < numberarr.length; i++) {
        if (Number.isNaN(numberarr[i])) {
            numberarr.splice(i, 1);
        }
    }
    console.log(numberarr);
    console.log(operatorarr);
    //console.log(eval("1+2-4*5")); the devil
    for (let j = 0; j < operatorarr.length; j++) {
        if (operatorarr[j] === "*") {
            numberarr[j] = numberarr[j] * numberarr[j + 1];
            numberarr.splice(j + 1, 1);
            operatorarr.splice(j, 1);
        }
        else if (operatorarr[j] === "/") {
            numberarr[j] = numberarr[j] / numberarr[j + 1];
            numberarr.splice(j + 1, 1);
            operatorarr.splice(j, 1);
        }
    }
    // console.log(numberarr);
    // console.log(operatorarr);
    for (let i = 0; i < operatorarr.length; i++) {
        if (operatorarr[i] === "*" || operatorarr[i] === "/") {
            operatorarr.splice(i, 1);
        }
    }
    for (let i = 0; i < operatorarr.length; i++) {
        // console.log(operatorarr);
        // console.log(numberarr);
        if (operatorarr[i] === "+") {
            numberarr[i] = numberarr[i] + numberarr[i + 1];
            numberarr.splice(i + 1, 1);
            operatorarr.splice(i, 1);
        }
        else if (operatorarr[i] === "-") {
            numberarr[i] = numberarr[i] - numberarr[i + 1];
            numberarr.splice(i + 1, 1);
            operatorarr.splice(i, 1);
        }
    }
    // console.log(operatorarr);
    // console.log(numberarr);
    if (operatorarr[0] === "+") {
        numberarr[0] = numberarr[0] + numberarr[1];
        numberarr.splice(1, 1);
    }
    else if (operatorarr[0] === "-") {
        numberarr[0] = numberarr[0] - numberarr[1];
        numberarr.splice(1, 1);
    }
    if (Number.isNaN(numberarr[0])) {
        output.innerText = "Faulty Input";
        return;
    }
    console.log(numberarr[0]);
    substring = numberarr[0].toString();
    return numberarr[0].toString();
}
//checks textcontent of targeted click and adds it to output
function logbutton(e) {
    if (e.target.localName !== "button") {
        return;
    }
    else if (e.target.id === "=") {
        output.innerText = Meth(input);
        numberarr = [];
        operatorarr = [];
        a = "";
        input = "";
        input = output.innerText;
    }
    else {
        let j = e.target.textContent;
        input += j;
        output.innerText = input;
    }
}
addEventListener("click", logbutton);
//clears input
function clearInput() {
    window.location.reload();
}
clear.addEventListener("click", clearInput);
// function addInput() {
//   input = input + parseInt(<string>arr[i].textContent);
// }
// Input/Key tracking
// let a: string = "";
// function logKey(e: any) {
//   a = <string>e.code;
//   if (a === "KeyW") {
//     console.log("w");
//   } else if (a === "KeyS") {
//     console.log("s");
//   } else if (a === "KeyA") {
//     console.log("a");
//   } else if (a === "KeyD") {
//     console.log("d");
//   } else {
//     console.log("wrong input");
//   }
// }
// addEventListener("keydown", logKey);
