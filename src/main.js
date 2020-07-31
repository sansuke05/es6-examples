// ref: https://qiita.com/soarflat/items/b251caf9cb59b72beb9b
// クラス

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.getName()}`);
    }

    getName() {
        return this.name;
    }
}

// 継承
class Teacher extends Person {
    sayHello() {
        console.log(`Hi, I'm ${this.getName()}`);
    }
}

// デフォルト引数
function multiply(a = 5) {
    return a * a;
}

const teacher = new Teacher("sansuke05");
teacher.sayHello();
console.log(multiply());
console.log(multiply(10));

// スプレッド構文
// レストパレメータ
function fun(a, ...r) {
    console.log(a);
    console.log(r);
    console.log(r[0]);
}

fun(2, 4, 6, 8, 10);

// 配列の展開
const array = [1, 10, 3];

console.log(...array);
console.log(Math.max(1, 10, 3));
console.log(Math.max(array));
console.log(Math.max(...array));

function fun2(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

fun2(...array);

// 配列の結合
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

console.log(arr2);

// for...in
const arr3 = [65, 55, 80, 100];

for (const index in arr3) {
    console.log(index);
    console.log(arr3[index]);
}

const obj = { name: "sansuke05", country: "Japan" }

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// for...of
for (const value of arr3) {
    console.log(value);
}

// Promise
function timer(number) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(number * 2);
        }, 1000);
    });
}

timer(100)
    .then(timer)
    .then(timer)
    .then(timer)
    .then(timer)
    .then(function onFulfilled(value) {
        console.log(value)
    });