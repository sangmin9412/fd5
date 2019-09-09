var people = [{
  name: 'Kim Suho',
  age: 35,
  job: 'developer'
}, {
  name: 'Hong Gildong',
  age: 40,
  job: 'thief'
}, {
  name: 'Pack Mujin',
  age: 42,
  job: 'president'
}, {
  name: 'Kent Beck',
  age: 62,
  job: 'developer'
}, {
  name: 'Martin Fowler',
  age: 65,
  job: 'developer'
}, {
  name: 'Uncle Bob',
  age: 22,
  job: 'developer'
}, {
  name: 'Lee Ilmin',
  age: 47,
  job: 'developer'
}, {
  name: 'IU',
  age: 27,
  job: 'singer'
}, {
  name: 'Mun Jaein',
  age: 63,
  job: 'president'
}, {
  name: 'Park Hyoshin',
  age: 40,
  job: 'singer'
}];
var numbers = [5, 12, 34, 22, -6, 77, 30, 55, 102, 32, 1155, 324, 1142, 998, 921, 471, 753, 662, 432];


var 홀수들 = numbers.filter(function(v) {
  return v % 2 !== 0;
});
console.log('홀수들: ', 홀수들);

var 곱하기2한애들 = numbers.map(function(v){
  return v * 2;
});
console.log('곱하기2한애들: ', 곱하기2한애들);

var 곱하기2한애들을숫자순서대로정렬 = numbers.map(function(v){
  return v * 2;
}).sort(function(a, b){
  return a - b;
});
console.log('곱하기2한애들을숫자순서대로정렬: ', 곱하기2한애들을숫자순서대로정렬);

var 나이가40이상인사람들 = people.filter(function(v) {
  return v.age >= 40;
});
console.log('나이가40이상인사람들: ', 나이가40이상인사람들);

var 나이가50이상인사람들의이름 = people.filter(function(v){
  return v.age >= 50;
}).map(function(v){
  return v.name;
});
console.log('나이가50이상인사람들의이름: ', 나이가50이상인사람들의이름);

var 직업이developer인사람을나이순서대로정렬 = people.filter(function(v){
  return v.job === 'developer';
}).sort(function(a, b) {
  return a.age - b.age;
});
console.log('직업이developer인사람을나이순서대로정렬: ', 직업이developer인사람을나이순서대로정렬);

var 직업이developer인사람을나이순서대로정렬하고직업은대문자 = people.filter(function(v){
  return v.job === 'developer';
}).sort(function(a, b) {
  return a.age - b.age;
}).map(function(v) {
  // v.job = v.job.toUpperCase();
  return {
    name: v.name,
    age: v.age,
    job: v.job.toUpperCase()
  };
});
console.log('직업이developer인사람을나이순서대로정렬하고직업은대문자: ', 직업이developer인사람을나이순서대로정렬하고직업은대문자);