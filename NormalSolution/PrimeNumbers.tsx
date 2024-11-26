// Problem Sttatement: Given a natural number 'n', determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4, 4*1, 2*2)


function isPrime (n){
    if (n<2){
        return false;
    }else{
        for (let i=2; i<n; i++){
            if (n%i === 0){
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(12));
console.log(isPrime(13));

//Algorithm
// 1. Check if the number is less than 2, if so return false
// 2. Check if the number is greater than 2, if so loop through the numbers from 2 to n-1
// 3. If the number is divisible by any number between 2 and n-1, return false
// 4. If the number is not divisible by any number between 2 and n-1, return true

// Big-O = O(n) - linear time complexity



//Optimized Solution
// intergers larger than the square root of n do not need to be checked because, for example, when checking if 16 is prime, we have already checked 4 is a factor.
// Therefore, we only need to check factors up to the square root of n

function isPrime1 (n){
    if (n<2){
        return false;
    }else{
        for (let i=2; i<=Math.sqrt(n); i++){
            if (n%i === 0){
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime1(1));
console.log(isPrime1(5));
console.log(isPrime1(25));


// Big-O = O(sqrt(n)) - square root time complexity