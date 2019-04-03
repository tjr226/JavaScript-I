// example callback

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

sayHello("Tim");

let add = (num1, num2) => num1 + num2;

function double(num1) {
    console.log(add(num1, num1));
}

double(4);

// confusing, I'll wait till Tuesday