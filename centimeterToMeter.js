function  centimeterToMeter (centimeter){
    let meter = centimeter / 100;
    return meter;
}


let myCentimeter = 13000;
let myMeter = centimeterToMeter(myCentimeter);
console.log(myMeter);