// find peak element in an sorted array
function findPeak(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is a peak
        if ((mid === 0 || arr[mid] >= arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])) {
            return mid; // Found a peak
        }

        // If the left neighbor is greater, move left
        if (mid > 0 && arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else {
            // Otherwise, move right
            left = mid + 1;
        }
    }

    return left; // Peak found at index left
}
// Example usage
const sortedArray = [1, 3, 20, 4, 5, 6];
const peakIndex = findPeak(sortedArray);
console.log(`Peak element is at index: ${peakIndex}, value: ${sortedArray[peakIndex]}`);