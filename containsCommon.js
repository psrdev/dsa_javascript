// given two array find any element that is common in both arrays
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['x', 'x', 'y', 'z'];
function containsCommon(arr1, arr2) {
    //  create a object from first array
    const fq = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!fq[arr1[i]]) {
            fq[arr1[i]] = true;
        }

    }

    // compare and loop thorugh second array 
    for (let j = 0; j < arr2.length; j++) {
        if (fq[arr2[j]]) {

            return true;
        }
    }
    return false;

}
console.log(containsCommon(array1, array2));