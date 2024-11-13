// Problem Statement: Given an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// Factorial of zero is 1
// Factorial(4) = 4*3*2*1 = 24

function factorial (n){
    let fact = 1;
    for (let i=2; i<=n; i++){
        fact = fact * i;
    }
    return fact;
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// Big-O = O(n) - linear time complexity