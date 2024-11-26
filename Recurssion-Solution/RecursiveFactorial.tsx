// Problem Statement: Given an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is 
// the product of all positive integers less than or equal to 'n'
// Factorial of zero is 1
// Factorial(4) = 4*3*2*1 = 24

// TIPS FOR RECURSIVE SOLUTIONS
// - Figure out how to break down the problem into smaller versions of the same problem i.e F(n) = F(n-1) * n
// - identify the base case for recursion i.e F(0) = 1


// SOLUTION

function factorialRecursive (n){
    if (n === 0){
        return 1;
    }
    return n * factorialRecursive(n-1);
}

console.log(factorialRecursive(4));
console.log(factorialRecursive(5))
console.log(factorialRecursive(0));
console.log(factorialRecursive(1))

// Big-O = O(n) - linear time complexity