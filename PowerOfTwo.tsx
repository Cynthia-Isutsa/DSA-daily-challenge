// PROBLEM STATEMENT: Given a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x
// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false


// pseudocode
// 1. if the number is less than 1, return false
// 2. if the number is divisible by 2, divide the number by 2
// 3. repeat step 2 until the number is greater than 0
// 4. if the number is 1, return true
// 5. if the number is not 1, return false


function isPowerOfTwo(n){
    if (n<1){
        return false;
    }
    while (n>1){
        if (n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// Big of O(log n) - logarithmic time complexity


// Optimized Solution
// 1. if the number is less than 1, return false
// 2. if the number is divisible by 2, divide the number by 2
// 3. repeat step 2 until the number is greater than 0


function isPowerOfTwo1(n){
    if (n<1){
        return false;
    }
    return (n & (n-1)) === 0;
}

// Big of O(1) - constant time complexity


// In Binary, a number that is a power of 2 except 1 ends with 0
// 1 = 0001
// 2 = 0010
// 3 = 0011
// 4 = 0100
// 5 = 0101
// 6 = 0110
// Bitwise AND of a number and number - 1 is 0 if the number is a power of 2
