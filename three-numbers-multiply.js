let number1 = 5;
let number2 = 9;
let number3 = 10;

function multiplyCalculate(num1 , num2, num3) {
    let multipleResult = num1 * num2 * num3;
    return multipleResult;
}

let getResult = multiplyCalculate(number1, number2, number3);
console.log(getResult);