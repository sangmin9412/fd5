function repeat(max, cb) {
    var i = 1;
    while(i <= max) {
        cb(i);
        i++;
    }
}

function repeatAsync(cb, max, delay) {
    var i = 1;
    var intervalId = setInterval(function(){
        if (i > max) {
            clearInterval(intervalId);
            return;
        }
        cb(i);
        i++;
    }, delay);
}

// repeatAsync(function(i) {
//     document.write(i + '<br />');
// }, 1000, 100);

// repeat(10000000000, function(i) {
//     document.write(i + '<br />');
// });


function sum(numbers) {
    var result = 0;
    var i = 0;
    while(i < numbers.length) {
        result += numbers[i];
        i++;
    }

    return result;
};

// sum([1,2,3,4,5]); // 15
// sum([1,2,3,4,6]); // 16

function max(numbers) {
    var maxNumber = numbers[0];
    var i = 1;
    while(i < numbers.length) {
        if (maxNumber < numbers[i]) {
            maxNumber = numbers[i];
        }
        i++;
    }

    return maxNumber
}
function min(numbers) {
    var minNumber = numbers[0];
    var i = 1;
    while(i < numbers.length) {
        if (minNumber > numbers[i]) {
            minNumber = numbers[i];
        }
        i++;
    }

    return minNumber
}
max([1,2,3,4,-1,7]);
max([1,2,3,4,-1,-3]);

// function countIf(items, condition) {
//     var result = 0;
//     var i = 0;
//     while(i < items.length) {
//         if (items[i] === condition) {
//             result++;
//         }
//         i++;
//     }
//     return result;
// }
function countIf(items, condition) {
    var result = 0;
    
    for(var i = 0; i < items.length; i++) {
        if (items[i] === condition) {
            result++;
        }
    }

    return result;
}
// console.log(countIf(["남", "여", "여", "남", "남"], "남")); // 3

function getDayOfWeek(day) {
    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][day];
}

document.write(getDayOfWeek(new Date().getDay()));
document.body.style.background = 'red'

