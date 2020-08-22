//find pairs (each no. from each set) so thatb total would be 10

//brute force solution o(n^2)
// function sum(arr1, arr2) {
//     var result = [];
//     for (i = 0; i < arr1.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (result.indexOf([arr1[i], arr2[j]] === -1) && arr1[i] + arr2[j] === 10) {
//                 result.push([arr1[i], arr2[j]]);
//             }
//         }
//     }
//     console.log(result);
// }


// var arr1 = [-1, 3, 8, 2, 9, 5];
// var arr2 = [4, 1, 2, 10, 5, 20];
// sum(arr1, arr2)


//another solution o(n)

function sum(arr1, arr2) {
    var arr = []
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(10 - arr2[i]) != -1) {
            arr.push([10 - arr2[i], arr2[i]]);
        }
    }
    console.log(arr);
}


var arr1 = [-1, 3, 8, 2, 9, 5];
var arr2 = [4, 1, 2, 10, 5, 20];
sum(arr1, arr2)


