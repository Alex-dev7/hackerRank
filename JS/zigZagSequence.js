// Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.



function processData(input) {
    //Enter your code here
    const a = input.split('\n')[2].split(' ')
    
    a.sort((a, b) => a - b);
    let mid = Math.floor((a.length + 1) / 2) - 1;
    [a[mid], a[a.length - 1]] = [a[a.length - 1], a[mid]];

    let st = mid + 1;
    let ed = a.length - 2;
    while(st < ed) {
        [a[st], a[ed]] = [a[ed], a[st]];
        st++;
        ed--;
    }

    return a.join(' ')
     
} 

console.log(processData('1\n7\n1 3 4 2 6 5 7'))