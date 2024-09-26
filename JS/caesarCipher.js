// Submissions	Leaderboard	Discussions	Editorial
// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.


function caesarCipher(s, k) {
    // Write your code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    const string = s.split('')
    let enc = ''

    for(let i = 0; i < string.length  ; i++){
        if(!alphabet.includes(string[i].toLowerCase())) { enc += `${string[i]}`}
        for(let j = 0; j < alphabet.length ; j++){ 
            if(string[i] === alphabet[j].toUpperCase()){
                enc += `${alphabet[(j + k) % 26].toUpperCase()}`
            } 
            if(string[i] === alphabet[j]){
                    enc += `${alphabet[(j + k) % 26]}` 
            }  
        } 
    }
    return enc
}


console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5))   // output: Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj