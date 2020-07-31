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
const array = [1, 10, 3];

console.log(...array);
console.log(Math.max(1, 10, 3));
console.log(Math.max(array));
console.log(Math.max(...array));