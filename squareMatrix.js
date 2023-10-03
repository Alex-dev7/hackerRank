// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here
    let primtDiag = 0
    let secDieg = 0
   
    for(let i = 0 ; i < arr.length; i++) {
        
     primtDiag += arr[i][i]
     secDieg += arr[i][(arr.length - 1) - i]
     
 }    

 //Math.abs() method convertsa neg num to a pos
 return Math.abs(primtDiag - secDieg)

}