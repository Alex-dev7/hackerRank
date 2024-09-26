// ---  Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

function countingSort(arr) {
    // Write your code here
    const frequencyArray = []
    // make an array of 100 zeros 
    for (let i = 0; i < 100; i++) {
        frequencyArray[i] = 0
    }
    
    for(let n = 0; n < arr.length; n++){
        
        frequencyArray[arr[n]] += 1
    }
    return frequencyArray
}