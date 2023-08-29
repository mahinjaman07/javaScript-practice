function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

let myFeet = 5.4;
let myInch = feetToInch(myFeet);
console.log(Math.round(myInch));