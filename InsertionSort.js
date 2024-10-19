let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

let n = myArray.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    let currentValue = myArray[i];
    
    // Shift elements to the right to make space for the current value
    for (let j = i - 1; j >= 0; j--) {
        if (myArray[j] > currentValue) {
            insertIndex = j;
        }
    }
    
    // Move the elements from insertIndex to i to the right
    for (let k = i; k > insertIndex; k--) {
        myArray[k] = myArray[k - 1];
    }
    
    myArray[insertIndex] = currentValue;
}

console.log("Sorted array:", myArray);
