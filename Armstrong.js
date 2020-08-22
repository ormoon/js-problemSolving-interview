var sum = 0;

function test(num) {
    var n = num;
    while (num > 0) {
        var mod = num % 10;

        sum = sum + mod * mod * mod;

        num = Math.floor(num / 10);
    }
    if (n === sum) {
        console.log(n + " is an armstrong number");
    } else {
        console.log(n + " is not an armstrong number");
    }
}

test(153);