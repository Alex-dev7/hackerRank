
// We define super digit of an integer  using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If  has only  digit, then its super digit is .
// Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .


function superDigit(n, k) {
    // Write your code here
    let p = n.split('').map(e => e*1)
    let sum = 0
  
    while (true) {
        sum = p.reduce((acc, cur) => acc + cur) * k
        if (sum < 10)
            break
        p = sum.toString().split('').map(e => e*1)
        k = 1
    }

    return sum 

}

console.log(superDigit('148', 3)) // output: 3

