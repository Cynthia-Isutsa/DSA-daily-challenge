// Problem Statement: Given an array of "n" elements and a target element "t", find the index of "t"
// in the array. Return -1 if the target element is not found. 

// Example = [-5, 2, 10, 4, 6]
// if t=10 it should return 2
// if t=6 it should return 4
// if t=20 it should return -1 as t is not present in the array

// Linear serach algorithm pseudocode
// start at the first element of the array and move towards the last
// At each element check if the element is equal to the target element
// if the element is found return the index of the element
// if the element is not found return -1


function linearSearch (array, targ){
    for (let i = 0; i < array.length; i++ ){
        if (array[i] === targ){
            return i
        } 
    }
    return -1

}

console.log(linearSearch([1,5,4,9,10], 10))
console.log(linearSearch([1,5,4,9,10], 9))
console.log(linearSearch([1,5,4,9,10],5))

// Big-O notation = O(n) - Linear Big O notation
