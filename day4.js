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
