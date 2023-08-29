let numbers = [10, 20, 45, 15, 32, -5, 12, -19, 50, 40, 86];
function breakNumber(number) {
    let positive = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element >= 0 ) {
            positive.push(element);
        }
        else{
            break;
        }
    }
    return positive;
}

let negativeNumber = breakNumber(numbers);
console.log(negativeNumber);
