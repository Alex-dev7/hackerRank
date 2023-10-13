function isPalindrome(s){
    let left = 0
    let right = s.length - 1

    while(left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }

    return true
}



function palindromeIndex(s) {
// two pointers
let left  = 0
let right = s.length - 1

    while(left <  right){

        if(s[left] !== s[right]){

            // found error, now find which side has the error
            if(isPalindrome(s.slice(left + 1, right + 1))) return left
            else if(isPalindrome(s.slice(left, right))) return right
            return -1
        }

        left++
        right--
    }
    return -1
    
}

console.log(palindromeIndex('bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb'))




