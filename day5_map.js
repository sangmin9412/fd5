function map(items, cb) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    result.push(cb(items[i]));
  }

  return result;
}
map([1,2,3,4,5], function (v) {
  return v * 2;
}); // [2,4,6,8,10]

var arr = [1,2,3,4,5];
arr.map(function(v) {
  return v * 2;
});

arr.filter(function(v) {
  return v % 2 === 0;
});

arr.forEach(function(v) {
  console.log(v);
});






