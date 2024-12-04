// Problem Statement: Given a sorted array of "n" elements and a target element "t", find the index of "t"


// PSEUDOCODE
// - If the array is empty, return -1
// - If the array has elements, find the middle element in the array.If target is equal to the middle element, return the middle element index
// - If the the target is less than the middle element, binary search left half of the array
// - If the target is greater than the middle element, binary search right half of the array

// Break the problem down into smaller versions of the same problem
// F(n) = F(n-1) * n
// Base case: if the array is empty, return -1 && if the array has elements, find the middle element in the array


function recursiveSearch(array, target){
    return search(array, target, 0, array.length - 1)
}

function search(array, target, leftIndex, rightIndex){
    if (leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === array[middleIndex]){
        return middleIndex
    }
    if (target < array[middleIndex]){
        return search(array, target, leftIndex, middleIndex)
    } else {
        return search(array, target, middleIndex + 1, rightIndex)
    }
}


    console.log(recursiveSearch([-5, 2, 4, 6, 10,11], 10))
    console.log(recursiveSearch([-5, 2, 4, 6, 10,11], 6))
    console.log(recursiveSearch([-5, 2, 4, 6, 10,11], 20))


    // Big-O = O(logn) - logarithmic time complexity