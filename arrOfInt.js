// Given an array of integers, find the sum of its elements.


function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce((a, b) => a + b)
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))