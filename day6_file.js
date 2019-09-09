var fs = require('fs');
// var sum = require('./sum');
// console.log(sum(1, 2));
var i = 10;
while(i--) {
    fs.writeFile(`abc${i}.txt`, `ㅎㅎㅎㅎ${i}`, function(err) {
        if (err) console.log(err);
    });
}
console.log(i);
