// // map function

//testArray numerico
const testArray = [12, 32, 3, 22, 43, 1, 7, 11, 23, 8, 9, 12, 340, 41];

// Function that adds 2 to each element of the array
function add2ToArray(arrayOfNumbers) {
    // Initialize an empty array to hold the modified values
    const arrayVal = [];
    // Loop through each number in the input array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Get the current number from the array
        const number = arrayOfNumbers[i];
        // Add 2 to the current number
        const newNumber = number + 2;
        // Push the new number to the arrayVal array
        arrayVal.push(newNumber);
    }
    // Return the new array with all numbers incremented by 2
    return arrayVal;
}
// Call the function with testArray as input and store the result in newArray
const newArray = add2ToArray(testArray);
// Output the result to the console
console.log("add2: ", newArray);

// Function that adds the index of each element to its value
function addIndexToArray(arrayOfNumbers) {
    // Initialize an empty array to store the modified values
    const arrayVal = [];
    // Loop through each number in the input array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // Get the current number from the array
        const number = arrayOfNumbers[i];
        // Add the current index (i) to the current number
        const newNumber = number + i;
        // Push the new number (number + index) to the arrayVal array
        arrayVal.push(newNumber);
    }
    // Return the new array with numbers modified by adding their respective index
    return arrayVal;
}
// Call the function with testArray and store the result in newArray2
const newArray2 = addIndexToArray(testArray);
// Output the result to the console
console.log("add index: ", newArray2);


// Custom map function that mimics the behavior of the built-in map method
function map(array, mappingFunction) {
    // Initialize an empty array to store the transformed values
    const arrayVal = [];
    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
        // Get the current element from the array
        const element = array[i];
        // Call the mapping function with the current element, its index, and the original array
        const newElement = mappingFunction(element, i, array);
        // Push the transformed element into the result array
        arrayVal.push(newElement);
    }
    // Return the array with all mapped elements
    return arrayVal;
}

// Function to add 2 to a number
function add2(number) {
    // Add 2 to the input number
    const newNumber = number + 2;
    return newNumber; // Return the new number
}
// Use the custom map function to add 2 to each element of testArray
const newArray3 = map(testArray, add2);
// Output the result of adding 2 to each element
console.log(newArray3);

// Function to add the index to the number
function addIndex(number, index) {
    // Add the current index to the number
    const newNumber = number + index;
    return newNumber; // Return the new number
}
// Use the custom map function to add the index to each element of testArray
const newArray4 = map(testArray, addIndex);
// Output the result of adding the index to each element
console.log(newArray4);

//testArray stringa
const testStringArray = ["ashduias", "dasdas", "dddddd", "wwwww", "hdiiissia", "sjdasdfgg"];

// Function that converts a string to uppercase
function toUpperCase(str) {
    // Convert the input string to uppercase using the toUpperCase() method
    const newString = str.toUpperCase();
    // Return the uppercase version of the string
    return newString;
}
// Use the custom map function to transform to uppercase the elements of testStringArray
const newArray5 = map(testStringArray, toUpperCase);
// Output the result of transforming strings to uppercase
console.log(newArray5);

// Apply the toUpperCase function to each element of testStringArray
const newArray6 = testStringArray.map(toUpperCase);
// Output the result, where each string in testStringArray is converted to uppercase
console.log(newArray6);

// Add 3 to each number in testArray using the map function
const newArray7 = testArray.map(num => num + 3);
// Output the result, where each number in testArray is incremented by 3
console.log(newArray7);

// Subtract (2 * index) from each number in testArray, using both the value and index
const newArray8 = testArray.map((num, index) => num - (2 * index));
// Output the result, where each number is reduced by twice its index
console.log(newArray8);

// Map each string in testStringArray to its length
const newArray9 = testStringArray.map(str => str.length);
// Output the result, where each element in testStringArray is replaced with its length
console.log(newArray9);

// Concatenate "banana" to each string in testStringArray
const newArray10 = testStringArray.map(str => str + "banana");
// Output the result, where "banana" is appended to each string in testStringArray
console.log(newArray10);


// // filter function

function keepEven(arrayOfNumbers) {
    const arrayVal = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const numb = arrayOfNumbers[i];
        if (numb % 2 === 0) {
            arrayVal.push(numb);
        }
    }
    // Return the array with all filtered elements
    return arrayVal;
}
const newArray11 = keepEven(testArray);
console.log(newArray11);

function filter(array, filteringFunction) {
    const arrayVal = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (filteringFunction(element, i, array)) {
            arrayVal.push(element);
        }
    }
    // Return the array with all filtered elements
    return arrayVal;
}

function isEven(numb) {
    return numb % 2 === 0;
}

const newArray12 = filter(testArray, isEven);
console.log(newArray12);

const newArray13 = testArray.filter(isEven);
console.log(newArray13);

const newArray14 = testArray.filter(numb => numb % 2 === 0);
console.log(newArray14);

const newArray15 = testArray.filter(numb => numb < 5);
console.log(newArray15);

const newArray16 = testStringArray.filter(str => str.length > 6);
console.log(newArray16);

const newArray17 = testStringArray.filter((_, index) => index % 2 === 1);
console.log(newArray17);


// // reduce function
function sumAll(arrayOfNumbers) {
    let accumulator = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];
        accumulator = accumulator + number;
    }
    return accumulator;
}
const newArray18 = sumAll(testArray);
console.log(newArray18);

function reduce(array, reducingFunction, startingAccumulator) {
    let accumulator = startingAccumulator;
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        accumulator = reducingFunction(accumulator, current, i, array);
    }
    return accumulator;
}

function sumToNumbers(accumulator, current) {
    const newAccumulator = accumulator + current;
    return newAccumulator;
}

const sumRed = reduce(testArray, sumToNumbers, 0);
console.log(sumRed);

const newArray19 = testArray.reduce(sumToNumbers, 0);
console.log(newArray19);

const newArray20 = testArray.reduce((acc, numb) => acc + numb);
console.log(newArray20);

const newArray21 = testStringArray.reduce((acc, str) => acc ? acc + " " + str : str, "");
console.log(newArray21);

const newArray22 = testArray.reduce((acc, numb) => acc * numb, 1);
console.log(newArray22);



// FIND

function isEven(number) {
    return number % 2 === 0;
}

console.log(testArray.filter(isEven));
console.log(testArray.find(isEven));

// SOME (c'è almeno un elemento che soddisfa la condizione?)

console.log(testArray.some(isEven));

// EVERY (tutti soddisfano la condizione?)

console.log(testArray.every(isEven));

// SORT 

function sortingFunctionDecreasing(first, second){
    if (first < second) {
        return 1;
    }else if(first > second){
        return -1;
    }else{
        return 0;
    }
}

function sortingFunctionincreasing(first, second){
    if (first > second) {
        return 1;
    }else if(first < second){
        return -1;
    }else{
        return 0;
    }
}

// testArray.sort(sortingFunctionincreasing);
// console.log(testArray);

// testArray.sort(sortingFunctionDecreasing);
// console.log(testArray);


// testArray.sort((f,s) => f-s);
// console.log(testArray);
// testArray.sort((f,s) => s-f);
// console.log(testArray);

// //dalla a alla z
// testStringArray.sort((fStr, sStr) => fStr.localeCompare(sStr))
// console.log(testStringArray);

// //dalla z alla a
// testStringArray.sort((fStr, sStr) => sStr.localeCompare(fStr))
// console.log(testStringArray);


function betterSort(array,sortingFunction){
    const newArray= [...array];
    newArray.sort(sortingFunction);
    return newArray;
}

const sortedArray = betterSort(testStringArray, (fStr, sStr) => sStr.localeCompare(fStr));
console.log(testStringArray);
console.log(sortedArray)