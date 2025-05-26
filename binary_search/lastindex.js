// binary serch of the last index of a number in a sorted array
function lastIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Found target, but continue searching to the right
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}
// Example usage    
const sortedArray = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const target = 5;