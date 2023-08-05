// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const result = [0, 0, 0]
    arr.forEach( i => {
        if(i === 0) result[2] += 1
        if(i < 0) result[1] += 1
        if(i > 0) result[0] += 1
    })
    result.forEach( n => {
        console.log((n / arr.length).toFixed(6))
    })
}

plusMinus([-4, 3, -9, 0, 4, 1]) 

// output 
// 0.500000
// 0.333333
// 0.166667