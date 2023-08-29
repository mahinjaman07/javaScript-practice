function bestFriends(friends) {
    let largest = '';
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i];
        if (element.length > largest.length) {
            largest = element;
        }
        
    }
    return largest;
}

let myFriends = ['Mahin Jaman', 'Ashrafee', 'Rahim', 'Rifat',  'Rana'];

let largestName = bestFriends(myFriends);
console.log(largestName);