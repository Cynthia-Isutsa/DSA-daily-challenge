let yArray = [64, 34, 25, 12, 22, 11, 90, 5];

let n = yArray.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    let currentValue = yArray[i];

    // Shift elements to the right to create space for currentValue
    for (let j = i - 1; j >= 0; j--) {
        if (yArray[j] > currentValue) {
            yArray[j + 1] = yArray[j]; // Shift element to the right
            insertIndex = j; // Update insert index
        } else {
            break; // No need to continue if the currentValue is in the right place
        }
    }
    
    // Place currentValue at its correct position
    yArray[insertIndex] = currentValue;
}

console.log("Sorted array:", yArray);
