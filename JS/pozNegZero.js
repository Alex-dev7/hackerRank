// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // Write your code here
    const res = [0, 0 ,0]
    
    arr.forEach(int => {
        if(int < 0 ) {res[1] += 1}
        else if(int > 0){ res[0] += 1}
        else {res[2] += 1}    
    })
    res.forEach(i => console.log((i / arr.length).toFixed(6)))
} 