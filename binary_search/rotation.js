// find the rotation count in a rotated sorted array
function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated
    if (arr[left] < arr[right]) {
        return 0;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the smallest element
        if (mid > 0 && arr[mid] < arr[mid - 1]) {
            return mid; // Found the rotation point
        }

        // If mid is greater than the last element, search in the right half
        if (arr[mid] >= arr[left]) {
            left = mid + 1;
        } else {
            // Otherwise, search in the left half
            right = mid - 1;
        }
    }

    return 0; // Should not reach here if input is a rotated sorted array
}
// Example usage
const rotatedArray = [4, 5, 6, 1, 2, 3];
const rotationCount = findRotationCount(rotatedArray);