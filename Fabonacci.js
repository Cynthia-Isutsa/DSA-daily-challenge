let prev2 = 0;
let prev1 = 1;

console.log(prev2); // Print the first Fibonacci number
console.log(prev1); // Print the second Fibonacci number

for (let i = 0; i < 18; i++) {
    let newFibo = prev1 + prev2; // Calculate the new Fibonacci number
    console.log(newFibo);        // Print the new Fibonacci number
    prev2 = prev1;               // Update prev2 to the previous number (prev1)
    prev1 = newFibo;             // Update prev1 to the new Fibonacci number
}
