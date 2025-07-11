const data = [1, 4, 3, 2];

const data2 = [12, 14, 15, 3, 6, 17];

// function bubble_sort(data) {

//     for (let i = 0; i < data.length - 1; i++) {
//         let swaaped = false;
//         for (let j = 0; j < data.length - i - 1; j++) {
//             if (data[j] > data[j + 1]) {
//                 [data[j], data[j + 1]] = [data[j + 1], data[j]];
//                 swaaped = true;
//             }

//         }
//         if (!swaaped) break;

//     }
//     return data;
// }
// console.log(bubble_sort(data));
// console.log(bubble_sort(data2));

// bubble sort with while loop
function bubble_sort(data) {
    let swapped;
    let i = 0;
    while (i < data.length - 1) {
        let j = 0;
        swapped = false;
        while (j < data.length - i - 1) {
            if (data[j] > data[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];
                swapped = true;
            }
            j++

        }
        if (!swapped) break;
        i++
    }
    return data;
}
console.log(bubble_sort(data));
console.log(bubble_sort(data2));