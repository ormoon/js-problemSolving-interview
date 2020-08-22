// var a = [1,3,4];
// console.log(a.reverse());

//How to reverse a number not an array

// var sum = 0;

// function reverse(num) {
//     while (num > 0) {
//         var rem = num % 10;
//         sum = sum * 10 + rem;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// console.log("reverse of 123 => " + reverse(123));


//How to reverse a string

function reverse(str) {
    var res = [];
    var arr = str.split('');
    for (i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    console.log("Reverse of string " + str + " => " + res.join(''));
}

reverse('apple');