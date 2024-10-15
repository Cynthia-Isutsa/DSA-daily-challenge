
let count = 2; // Initialize the count of Fibonacci numbers

// Function to calculate Fibonacci numbers using recursion
function fibonacci(prev1, prev2) {
    if (count <= 19) {
        let newFibo = prev1 + prev2; // Calculate the new Fibonacci number
        console.log(newFibo);        // Print the new Fibonacci number
        
        // Update previous values
        prev2 = prev1;               
        prev1 = newFibo;             
        count++;                     // Increment count
        
        // Recursive call
        fibonacci(prev1, prev2);    
    } 
}

// Print the first two Fibonacci numbers
console.log(0); 
console.log(1); 

// Start the Fibonacci calculation
fibonacci(0, 1);
