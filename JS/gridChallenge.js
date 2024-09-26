// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not

function gridChallenge(grid) {
    // Write your code here

    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join("");
    }
    
    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 1; row < grid.length; row++) {
            if (grid[row][col].localeCompare(grid[row - 1][col]) < 0) return 'NO'
        }
    }
    return 'YES'
}


console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))  // YES