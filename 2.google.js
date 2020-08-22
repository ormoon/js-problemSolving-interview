//First Recurring Character
// ABCBA=>'B'
// ABCA=>'A'
// ABC=>null



function first(str) {
    var arr = str.split('');
    var result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        } else {
            return (arr[i])
            break;
        }
    }
    return null;
}



console.log("First recurring character is " + first('ABCDABC'));