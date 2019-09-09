// function a() {
//     console.log('a');
// }
// function b() {
//     console.log('b');
// }
// function c() {
//     console.log('c');
// }
// function d() {
//     console.log('d');
// }
// a();
// b();
// c();
// d();
var dd = 55;
function a(num1, num2) {
    var bb = 22;
    var cc = 33;
    
    console.log(dd);
    console.log('a');

    console.log(dd);
    function f(){}
    console.log(arguments);
    b();
}
function a(num1, num2) {
    var bb = 22;
    var cc = 33;
    var dd;
    function f(){}
    console.log('a');
    dd = 44;
    console.log(arguments);
    b();
}
function b() {
    console.log('b');
    c();
}
function c() {
    console.log('c');
    d();
}
function d() {
    console.log('d');
}
a();


function sum(n1, n2) {
    console.log(n1);
    console.log(n2);
    console.log(arguments);
    console.log(this);
}

sum()
var d = {
    sum: sum
}
d.sum();
new sum();









