// Problem Statement: Given an array of integers, sort the array. sorting can either be ascending or descending
// for example: const arr = [-6, 20, 8, -2, 4]
// bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
// NB: Bubble sort is a poor sorting algorithm in real world scenarios and its often used  for educational purposes

// IDEA
// - Compare adjacent elements in the array and swap the positions if they are not in the intended order
// - Repeat the instruction as you step through each element in the array
// - Once you step through the whole array with no swaps, the array is sorted


function bubbleSort (array) {
let swapped;
    do {
        swapped = false
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    
  
 }


const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr)
console.log(arr)

/// Big-O = O(n^2) - quadratic time complexity