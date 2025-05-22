var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0;
        let right = n - 1;
        const arr = Array(n).fill(0).map((_, i) => i + 1);
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(arr[mid])) {
                right = mid; // Move left
            } else {
                left = mid + 1; // Move right
            }
        }
        return arr[left]; // Return the first bad version


    };
};
function isBadVersion(version) {
    // Simulate the behavior of isBadVersion function
    const firstBadVersion = 2; // Example: version 4 is the first bad version
    return version >= firstBadVersion;
}
console.log(solution(isBadVersion)(5)); // Output: 4 (first bad version)