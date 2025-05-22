/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let start = 0;
    let end = n;
    while (start <= end) {
        const mid = Math.floor(start + ((end - start) / 2));
        const numberIs = guess(mid);
        if (numberIs === 0) {
            return mid;
        } else if (numberIs === 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

};