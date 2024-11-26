const array = [22, 24, 34, 12, 45,3,55,3,8,1,5,0,5,2,5,2,5,19,99,44,67,98,90, 56,18,45];


// let n = array.length;

// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }

// console.log("Sorted array:", array);

let n = array.length;

for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            // Swap myArray[j] and myArray[j+1]
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            swapped = true;
        }
    }
    if (!swapped) {
        break; 
}
}

console.log("Sorted array:", array);
