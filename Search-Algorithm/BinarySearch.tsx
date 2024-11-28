//  Problem Statement: Given a sorted array of "n" elements and a target element "t", find the index of "t"
// in the array. Return -1 if the target element is not found. 

// Example = [-5, 2, 10, 4, 6]
// if t=10 it should return 2
// if t=6 it should return 4
// if t=20 it should return -1 as t is not present in the array
 
//PSEUDOCODE
// Binary search only works on a sorted array
// if the array is not sorted, sort the array first
// if the array is empty return -1
// if the array has elements, find the middle element in the array
// if target is equal to the middle element, return the middle element index
// if target is less than the middle element, binary search left half of the array
// if target is greater than the middle element, binary search right half of the array


//SOLUTION

function binarySearch(array, target){
    let leftIndex = 0
    let rightIndex = array.length - 1
     while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === array[middleIndex]){
            return middleIndex
        }
        if (target < array[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10,11], 10))

//Big-O notation = O(logn) - Logarithmic Big O notation
