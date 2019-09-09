function f() {
    console.log(this);
}
f();
var d = {
    f: f
}
d.f();
new f() === new f() // false

f.apply({name: 'suho'})
console.log(this);
function Person(age) {
    this.age = age;
}
var developer = new Person(36);
var worker = developer;

p1 === p2 // true