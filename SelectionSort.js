let myArray = [64, 34, 25, 5, 22, 11, 90, 12];

let n = myArray.length;
for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (myArray[j] < myArray[minIndex]) {
            minIndex = j;
        }
    }
    let minValue = myArray.splice(minIndex, 1)[0];
    myArray.splice(i, 0, minValue);
}

console.log("Sorted array:", myArray);
