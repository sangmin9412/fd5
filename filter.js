function filter(items, cb) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    var bool = cb(items[i]);
    if(bool) {
      result.push(items[i]);
    }
  }

  return result;
}

var numbers = [1,2,3,4,5,6,7,345,546,234];
var even = filter(numbers, function(v) {
  return v % 2 === 0
});

var odd = filter(numbers, function(v) {
  return v % 2 !== 0;
});

var man = filter(['남', '남', '여', '여', '남'], function(v) {
  return v === '남';
});

