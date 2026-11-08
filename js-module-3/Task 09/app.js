function even(arr) {
    const evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
    }
    return evenArray;
}

const originalArray = [2, 7, 4, 9, 12];
const evenArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Even array:", evenArray);