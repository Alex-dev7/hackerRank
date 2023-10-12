function palindrome(s) {
    // console.log(s.slice(2, s.length))

    if(s.split('').reverse().join('') === s) {return -1}

    // Removing the first character
    if(s.slice(1) === s.split('').reverse().join('').slice(0, s.length - 1)) {
        return 0
    }

    // Removing the last character
    if(s.slice(0, s.length - 1) === s.split('').reverse().join('').slice(1)) {
        return s.length
    }

    for(let i = 0; i < s.length; i++) {
        if(s.slice(0, s.length - 1) === s.split('').reverse().join('').slice(1)) {
            return s.length
        }
    }

    return -1
    
}

console.log(palindrome('brta'))