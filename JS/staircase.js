
// Write a program that prints a staircase of size .
/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for(let i = 1; i <= n; i++) {
        let step = ""
        for(let j = 1; j <= (n - i); j++) {
            step += " "
        }
        for(let c = 1; c <= i; c++) {
            step += "#"
        }
        console.log(step)
    }
}

staircase(6)