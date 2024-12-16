// Problem Statement: Given an array of intergers, sort the array
// Example: const arr= [-5, 4, 16, 0, 13, 2]
// quick sort should return [-5, 0, 2, 4, 13, 16]
// Idea behind quick sort
// 1.  Identify the pivot element in the array
//  - you can pick first element as the pivot
//  - you can pick last element as the pivot (best approach)
//  - you can pick a random element as the pivot
//  - you can pick median as the pivot
// 2. Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
// 3. Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
// 4. repeatedy concatenate the left array, pivot and right array till one sorted array remains

// solution 

function quickSort (arr) {
    let pivot = arr[arr.length - 1]
    let left = []
    let right  = []
 if (arr.length < 2){
        return arr
    }

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}

const arr =[-5, 4, 16, 0, 13, 2]

console.log(quickSort(arr))


// Big-O notation = worst case complexity = O(n^2)
// Big-O notation = average case complexity = O(n log n)

