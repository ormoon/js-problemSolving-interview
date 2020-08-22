var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineapple', 'orange', 'banana', 'apple', 'banana', 'orange', 'grapes', 'papaya', 'grapes'];

//Q.no.1)find unique array of elements from ablve fruits


// function unique(arr) {
//     var new_arr = [];
//     for (i in fruits) {
//         if (new_arr.indexOf(fruits[i]) === -1) {
//             new_arr.push(fruits[i]);
//         }
//     }
//     console.log(new_arr);
// };


// function unique(arr) {
//     var new_arr = [];
//     fruits.forEach((fruit, index, arr) => {
//         if (new_arr.indexOf(fruit) === -1) {
//             new_arr.push(fruit);
//         }
//     });
//     console.log(new_arr)
// }

// unique(fruits);


//Q.no.2) Find the count of items in the fruit array


function count(arr) {
    var obj = {};
    arr.forEach(fruit => {
        // if (obj[fruit]) {
        //     obj[fruit] = obj[fruit] + 1;
        // } else {
        //     obj[fruit] = 1;
        // } 
        obj[fruit] = obj[fruit] ? obj[fruit] + 1 : 1;
        //obj[fruit] = (obj[fruit] || 0) + 1;
    })
    console.log(obj)
}

count(fruits);