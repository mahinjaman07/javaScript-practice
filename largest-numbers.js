let numbers = [45, 50, 20, 15, 60, 89, 99, 70, 121, 105, 56, 88, 90, 85, 94];
let largestNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element > 80) {
        largestNumbers.push(element);
    }
    
}
console.log(largestNumbers);