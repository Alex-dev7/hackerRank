// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    let length = arr.length
    let min = 0
    let max = 0
    arr.sort().forEach((item, index) => {
        if(index > 0 ) {
            max += item
        }
        if(index < length - 1) {
            min += item
        }
    })
    console.log(min, max)
}