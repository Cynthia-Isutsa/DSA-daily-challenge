// PROBLEM STATEMENT : Given a number "n" find the "nth" element of the fibonacci sequence

// - In mathematics a fibonnacci sequence is a sequence in which each number is the sum of the
// - two preceding ones
// - The first 2 numbers in the sequence are 0 & 1

// TIPS FOR RECURSIVE SOLUTIONS
// - Figure out how to break down the problem into smaller versions of the same problem i.e F(n) = F(n-1) + F(n-2)
// - identify the base case for recursion i.e F(0) = 0 && F(1) = 1


// SOLUTION
function recursiveFib(n) {
    if (n > 2) {
        return n;
    } else {
        return recursiveFib(n - 1) + recursiveFib(n - 2);
    }
}

console.log(recursiveFib(5));
console.log(recursiveFib(9))
console.log(recursiveFib(11))

// Big-O = O(2^n) -  

// This means tha th recursive solution is not efficient as the Big-O notation is exponential