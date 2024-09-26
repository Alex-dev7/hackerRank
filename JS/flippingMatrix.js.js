function flippingMatrix(matrix) {
    // Write your code here
    let length = matrix.length 
    let maxVal = 0

    for (let i = 0; i < Math.floor(length / 2); i++) {
        for (let j = 0; j <  Math.floor(length / 2); j++) {
            maxVal += Math.max(matrix[i][j], matrix[i][length - j -1], matrix[length - i - 1][j], matrix[length - i - 1][length - j - 1])
        }
    }
    return maxVal

}

console.log(flippingMatrix([
    [ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]
  ]))

