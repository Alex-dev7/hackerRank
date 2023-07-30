// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftD = arr[0][0] + arr[1][1] + arr[2][2]
    let rightD = arr[0][2] + arr[1][1] + arr[2][0]

    return Math.abs(leftD - rightD) 

}
