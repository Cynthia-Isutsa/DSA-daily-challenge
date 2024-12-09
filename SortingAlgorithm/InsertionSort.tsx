//Problem Statement: Given an array of integers, sort the array
// example: Const arr = [-6, 20, 5, 8, -3, 4, 33]
// insertion sort should return the array in ascending order

// Idea behind insertion sort

// - virtually divide the array into a sorted and an unsorted part
// - assume that the first element is already sorted and remaining elements are unsorted
// - select an unsorted element and compare with all elements in the sorted part
// - if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part
// - else, shift larger elements in the sorted part towards the right
// - Repeat untill all the unsorted elements are placed in the right order


// Solution

function insertionSort (array){
    for (let i = 1; i < array.length; i++){
        let numberToInsert = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > numberToInsert){
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = numberToInsert
    }
    return array
}


const arrK = [-6, 20, 5, 8, -3, 4, 33];


console.log(insertionSort(arrK))

/// Big-O = O(n^2) - quadratic time complexity