function isEven(num) {
    if(num % 2 === 0)return true;
    return false;
}
// console.log(isEven(30)); // true
// console.log(isEven(29)); // false

//console.log(isOdd(29)); // true
// console.log(isOdd(30)); // false

function isOdd(num) {
    return num % 2 !== 0;
}

function fizzBuzz(x) {
    if (x % 15 === 0) return "FizzBuzz";
    if (x % 3 === 0) return "Fizz";
    if (x % 5 === 0) return "Buzz";
    return x;
}
// console.log(fizzBuzz(2));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

function getDayOfWeek(day) {
    switch(day) {
        case 0: return 'Sun';
        case 1: return 'Mon';
        case 2: return 'Tue';
        case 3: return 'Wed';
        case 4: return 'Thu';
        case 5: return 'Fri';
        case 6: return 'Sat';
        default: return;
    }
}
// console.log(getDayOfWeek(0)); // 'Sun'
// console.log(getDayOfWeek(5)); // 'Fri'

function a() {
    var num = 'aaaa';
    if (true) {
        str = 'strrrrr';
    }
    function b() {
        var num = 'bbb';
        function c() {
            var num = 'ccccc';
            console.log(num);
        }
        c();
        console.log(num);
    }
    b();
}
//a();
//console.log(num);
//console.log(str);

function logRepeat() {
    var i = 1;
    while(i <= 10) {
        console.log(i);
        i++;
    }
}
// logRepeat();

function fizzBuzzGame(max) {
    var i = 1;
    while(i <= max) {
        console.log(fizzBuzz(i));
        i++;
    }
}
// fizzBuzzGame(50);

function gugudan(dan, num = 9) {
    var i = 1;
    // if (num === undefined) {
    //     num = 9;
    // }

    // num = num || 9;
    while(i <= num) {
        console.log(dan + ' * ' + i + ' = ' + dan * i);
        i++;
    }
    console.log('the end');
}

// gugudan(5);
// gugudan(3, 7);

var i = 1;
function log() {
    console.log(i++);
}
setInterval(log, 1000);
