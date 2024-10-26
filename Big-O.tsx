//BIG-0 IS EXPRESSED IN TERMS OF INPUT
function summation(n){
    let sum = 0;
    for (let i=1 ; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(summation(3));

/* The Big-O Time complexity of the above program will be based on the number of time the function execcutes based on the input size
-In this case our program has 3 main statements to execute: line 2,4 and 6
-given n=3, line 2 will execute only once, line 4 executes 3 times and line 6 executes once; the for loop will repeat untill the condition is met
-line 2 - 1
-line 4 - 3
-line 6 - 1
-the total number of executions is 5; i.e generally the number of executions is n+2
-if n is 1000 then the program will be executed 1000+ 2
*/

//BIG-O focusses on the Bigger Picture Without Being Caught up in the minute details
//  n + 2
// if n = 100    100 + 2
// if n = 1000    1000 + 2
// if n = 10000   10000 + 2
// if n = 100000  100000 + 2
// if n = 1000000 1000000 + 2
// if n = 10000000 10000000 + 2

//the above is an example of linear time complexity
//the time complexity is directly proportional to the input size
//As the  input size increases, the number of executions increases
//the time complexity is O(n) - linear time complexity

//When you see a looop in your calculations, most of the time the time complexity is linear
//there are a few exeptions
//A loops worst case is when it iterates over the entire input size hence the time complexity is O(n)- linear


function summation1(n){
    return n * (n+1) / 2;
}

console.log(summation1(3), "non-loop");

// the time complexity of the above program is O(1) - constant time complexity
