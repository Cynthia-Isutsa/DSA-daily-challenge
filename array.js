const numbers = [22, 24, 34, 12, 45,3,55,3,8,1,5,0,5,2,5,2,5,19,99,44,67,98,90, 56,18,45,22, 24, 34, 12, 45,3,55,3,8,1,5,0,5,2,5,2,5,19,99,44,67,98,90, 56,18,45];
//first index
console.log(numbers[0])


//Write an algorith form the smallest number in the array
//steps
//start with a pseudocode
 //const smallestNumber = numbers[0]
 //loop through the array
 //check if the current number is smaller than the smallest number
 //if it is, update the smallest number

 let smallestNumber = numbers[0];
 for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallestNumber){
        smallestNumber = numbers[i]
    }
 }
 
 console.log(smallestNumber, "is the smallest number")


 //Time Complexity -When exploring algorithms, we often look at how long time an algorithm takes to run relative to the size of the data set.
 //In the example above, the time the algorithm needs to run is proportional, or linear, to the size of the data set. This is because the algorithm
 // must visit every array element one time to find the lowest value. The loop must run 5 times since there are 5 values in the array. And if the array 
 //had 1000 values, the loop would have to run 1000 times.