// Given a number, n, return an array containing n unique random numbers
// between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

function luckyNumbers(n) {
    let result = [];
for(let i = 0; i < n; i++) {
 result.push(i)
}
//console.log(result)
return result
}
console.log(luckyNumbers(3))