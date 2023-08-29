let firstBook = 6;
let secondBook = 3;
let thirdBook = 2;

function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {

    let firstBookPaper = 100;
    let secondBookPaper = 200;
    let thirdBookPaper = 300;

    let firstBookTotalPage = firstBookQuantity * firstBookPaper;
    let secondBookTotalPage = secondBookQuantity * secondBookPaper;
    let thirdBookTotalPage = thirdBookQuantity * thirdBookPaper;

    let totalBookPaper = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return totalBookPaper;
}


let totalBookPage = paperRequirements(firstBook , secondBook, thirdBook);
console.log(totalBookPage);