const gridaSchiappa = function () {
    console.log("SCHIAPPAAA!!!");
}

console.log(typeof gridaSchiappa);

gridaSchiappa();

// const gridaSchiappa2 = function(name){
//     console.log( name + "SCHIAPPAAA!!!");
// }

gridaSchiappa2('pippo');

function gridaSchiappa2(name) {
    console.log(name + " SCHIAPPAAA!!!");
}

const logDouble = (number) => console.log(number * 2);

logDouble(20);

console.log(logDouble(15));

function sum(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

const sumArrow = (n1, n2) => n1 + n2;

const sumArrow2 = (n1 = 0, n2 = 0) => {
    const sum = n1 + n2;
    return sum;
}

console.log(sum(3, 5));
console.log(sumArrow(7, 8));
console.log(sumArrow2(4, 7));

const result = sum(20, 12);
console.log(result);

const result2 = sum(21, 23, 25, 27);
console.log(result2);

const result3 = sum(12);
console.log(result3);

const hello = 'ciao';
function sayHelloTo(name) {
    function createHelloString(name) {
        const helloString = "Hello " + name + "!";
        return helloString;
    }
    const newHello = createHelloString(name);
    console.log(newHello);
}
sayHelloTo('sara');

// console.log(helloString);

console.log(hello);

//closure

function createCallTwice(name) {
    const call = name + ',' + name + '!';
    const callFunction = () => console.log(call);
    return callFunction;
}
const callTwice = createCallTwice('andrea');
callTwice();

function createMultiplier(num) {
    const multiplierFunction = function (numberToMultiply) {
        return numberToMultiply * num;
    }
    return multiplierFunction;
}
const multiplierX2 = createMultiplier(2);
const multiplierX3 = createMultiplier(3);
console.log(multiplierX2(10));
console.log(multiplierX2(13));
console.log(multiplierX3(10));
console.log(multiplierX3(13));

function createCounter() {
    let counter = 0;
    const incrementFunction = function () {
        counter++;
        return counter;
    }
    return incrementFunction;
}
const increment = createCounter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

//recursion

function fact(number){
    if (number===0){
        return 1;
    }
    return number * fact(number-1);
}

console.log(fact(7));
console.log(fact(8));
console.log(fact(170));