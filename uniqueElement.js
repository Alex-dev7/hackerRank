// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // Write your code here
    if(a.length === 1) return a[0]
    const l = a.length
    const sortArr = a.sort((a, b) => a - b)
    console.log(sortArr)
    for(let i = 0; i < l; i++ ){
        if(sortArr[i] === sortArr[i + 1]){
            i+=1
        } else {
            return sortArr[i]
        }
    }
}