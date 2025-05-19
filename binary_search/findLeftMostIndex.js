// find the left most index of a target in a sorted array using binary search
// This function finds the leftmost index of a target in a sorted array using binary search.
function findLeftMostIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1; // Initialize result to -1 (not found)

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Update result to the current mid index
            right = mid - 1; // Search in the left half for the leftmost index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return result; // Return the leftmost index or -1 if not found
}

const arr = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 2;
console.log(findLeftMostIndex(arr, target)); // Output: 1 (leftmost index of target)
console.log(findLeftMostIndex(arr, 10)); // Output: -1 (not found)